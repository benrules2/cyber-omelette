import { readFileSync, writeFileSync, readdirSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { marked } from 'marked';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const POSTS_DIR = join(ROOT, 'content/posts');
const PAGES_DIR = join(ROOT, 'content/pages');
const SITE_DIR = join(ROOT, 'site');
const POSTS_OUT_DIR = join(SITE_DIR, 'posts');
const TAGS_OUT_DIR = join(SITE_DIR, 'tags');

// Top-level categories to show in sidebar (manually curated for quality)
const CATEGORIES = {
  'Raspberry Pi': ['raspberry pi', 'raspberry', 'pi', 'magic mirror', 'smart mirror'],
  'Alexa & Voice': ['alexa', 'voice', 'echo'],
  'Arduino': ['arduino', 'neopixel'],
  'Python': ['python'],
  'Astrophotography': ['astrophotography', 'barn door', 'stars'],
  'Coffee': ['coffee', 'espresso', 'aeropress', 'gaggia'],
  'Laser & 3D': ['laser', '3d print', 'laser cut'],
};

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const frontmatterStr = match[1];
  const body = match[2];

  const frontmatter = {};
  for (const line of frontmatterStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    }
    frontmatter[key] = value;
  }

  return { frontmatter, body };
}

function slugifyTag(tag) {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function categorizePost(post) {
  const categories = [];
  const tagsLower = (post.tags || []).map(t => t.toLowerCase());
  const titleLower = post.title.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    for (const keyword of keywords) {
      // Use word boundary regex to avoid partial matches (e.g., "opinion" matching "pi")
      const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (tagsLower.some(t => regex.test(t)) || regex.test(titleLower)) {
        categories.push(category);
        break;
      }
    }
  }
  return categories;
}

function buildSidebar(posts, categoryPosts, currentPage = '') {
  const categoryHtml = Object.entries(categoryPosts)
    .filter(([_, posts]) => posts.length > 0)
    .map(([category, catPosts]) => `
      <div class="sidebar-category">
        <h4>${category}</h4>
        <ul>
          ${catPosts.slice(0, 5).map(p => `<li><a href="${currentPage}posts/${p.slug}.html">${p.title}</a></li>`).join('')}
          ${catPosts.length > 5 ? `<li class="more">+${catPosts.length - 5} more</li>` : ''}
        </ul>
      </div>
    `).join('');

  return `
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <a href="${currentPage}about.html">About Me</a>
        <a href="${currentPage}index.html">All Posts</a>
      </nav>
      <div class="sidebar-categories">
        <h3>Topics</h3>
        ${categoryHtml}
      </div>
    </aside>
  `;
}

function headerHtml(currentPage = '') {
  return `
    <header class="site-header">
      <a href="${currentPage}index.html" class="logo">
        <span class="logo-icon">🍳</span>
        <div class="logo-text">
          <span class="logo-title">The Cyber Omelette</span>
          <span class="logo-tagline">DIY projects, code & experiments</span>
        </div>
      </a>
    </header>
  `;
}

function tagsHtml(tags, currentPage = '') {
  if (!tags?.length) return '';
  return `<div class="tags">${tags.map(t =>
    `<a href="${currentPage}tags/${slugifyTag(t)}.html" class="tag">${t}</a>`
  ).join('')}</div>`;
}

function postTemplate(post, categoryPosts) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} - The Cyber Omelette</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  ${headerHtml('../')}
  <div class="layout">
    ${buildSidebar([], categoryPosts, '../')}
    <main>
      <article>
        <header class="post-header">
          <h1>${post.title}</h1>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          ${tagsHtml(post.tags, '../')}
        </header>
        <div class="post-content">
          ${post.html}
        </div>
      </article>
      <footer class="post-footer">
        <a href="../index.html">← Back to all posts</a>
      </footer>
    </main>
  </div>
</body>
</html>`;
}

function indexTemplate(posts, categoryPosts) {
  const postsHtml = posts.map(post => `
    <article class="post-preview">
      <h2><a href="posts/${post.slug}.html">${post.title}</a></h2>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
      ${post.preview ? `<p class="post-excerpt">${post.preview}</p>` : ''}
      ${tagsHtml(post.tags?.slice(0, 3), '')}
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Cyber Omelette</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${headerHtml('')}
  <div class="layout">
    ${buildSidebar(posts, categoryPosts, '')}
    <main>
      <h2 class="section-title">All Posts</h2>
      <div class="posts-list">
        ${postsHtml}
      </div>
    </main>
  </div>
  <footer class="site-footer">
    <p>Built with markdown and a bit of scripting</p>
  </footer>
</body>
</html>`;
}

function tagPageTemplate(tag, posts, categoryPosts) {
  const postsHtml = posts.map(post => `
    <article class="post-preview">
      <h2><a href="../posts/${post.slug}.html">${post.title}</a></h2>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
      ${post.preview ? `<p class="post-excerpt">${post.preview}</p>` : ''}
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tag} - The Cyber Omelette</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  ${headerHtml('../')}
  <div class="layout">
    ${buildSidebar(posts, categoryPosts, '../')}
    <main>
      <h2 class="section-title">Posts tagged "${tag}"</h2>
      <div class="posts-list">
        ${postsHtml}
      </div>
      <footer class="post-footer">
        <a href="../index.html">← Back to all posts</a>
      </footer>
    </main>
  </div>
</body>
</html>`;
}

function aboutTemplate(aboutHtml, categoryPosts) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About - The Cyber Omelette</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${headerHtml('')}
  <div class="layout">
    ${buildSidebar([], categoryPosts, '')}
    <main>
      <article class="about-page">
        <h1>About Me</h1>
        <div class="post-content">
          ${aboutHtml}
        </div>
      </article>
    </main>
  </div>
</body>
</html>`;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

async function main() {
  console.log('Building site...');

  mkdirSync(SITE_DIR, { recursive: true });
  mkdirSync(POSTS_OUT_DIR, { recursive: true });
  mkdirSync(TAGS_OUT_DIR, { recursive: true });
  mkdirSync(PAGES_DIR, { recursive: true });

  const files = readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} posts`);

  const posts = [];
  const tagMap = new Map(); // tag -> posts

  for (const file of files) {
    const content = readFileSync(join(POSTS_DIR, file), 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    const html = await marked(body);

    // Extract preview (~50 words) from markdown body
    const plainText = body
      .replace(/!\[.*?\]\(.*?\)/g, '') // remove images
      .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // convert links to text
      .replace(/<[^>]+>/g, '') // remove HTML tags
      .replace(/#{1,6}\s*/g, '') // remove heading markers
      .replace(/[*_`~]/g, '') // remove emphasis markers
      .replace(/\n+/g, ' ') // collapse newlines
      .trim();

    const words = plainText.split(/\s+/);
    const preview = words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');

    const post = {
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date,
      slug: frontmatter.slug,
      tags: frontmatter.tags,
      html,
      preview,
    };

    post.categories = categorizePost(post);
    posts.push(post);

    // Build tag index
    if (post.tags) {
      for (const tag of post.tags) {
        if (!tagMap.has(tag)) tagMap.set(tag, []);
        tagMap.get(tag).push(post);
      }
    }
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Build category → posts mapping
  const categoryPosts = {};
  for (const category of Object.keys(CATEGORIES)) {
    categoryPosts[category] = posts.filter(p => p.categories.includes(category));
  }

  // Write individual post pages
  for (const post of posts) {
    const postHtml = postTemplate(post, categoryPosts);
    writeFileSync(join(POSTS_OUT_DIR, `${post.slug}.html`), postHtml);
    console.log(`  ✓ posts/${post.slug}.html`);
  }

  // Write tag pages
  for (const [tag, tagPosts] of tagMap) {
    tagPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const tagHtml = tagPageTemplate(tag, tagPosts, categoryPosts);
    writeFileSync(join(TAGS_OUT_DIR, `${slugifyTag(tag)}.html`), tagHtml);
    console.log(`  ✓ tags/${slugifyTag(tag)}.html`);
  }

  // Write index page
  const indexHtml = indexTemplate(posts, categoryPosts);
  writeFileSync(join(SITE_DIR, 'index.html'), indexHtml);
  console.log('  ✓ index.html');

  // Write about page
  const aboutPath = join(PAGES_DIR, 'about.md');
  if (existsSync(aboutPath)) {
    const aboutContent = readFileSync(aboutPath, 'utf-8');
    const { body } = parseFrontmatter(aboutContent);
    const aboutHtml = await marked(body);
    writeFileSync(join(SITE_DIR, 'about.html'), aboutTemplate(aboutHtml, categoryPosts));
    console.log('  ✓ about.html');
  } else {
    console.log('  ⚠ No about.md found in content/pages/');
  }

  copyFileSync(join(ROOT, 'style.css'), join(SITE_DIR, 'style.css'));
  console.log('  ✓ style.css');

  // Copy CNAME for custom domain
  const cnamePath = join(ROOT, 'CNAME');
  if (existsSync(cnamePath)) {
    copyFileSync(cnamePath, join(SITE_DIR, 'CNAME'));
    console.log('  ✓ CNAME');
  }

  console.log(`\nSite built to ${SITE_DIR}`);
  console.log(`Generated ${tagMap.size} tag pages`);
}

main().catch(console.error);
