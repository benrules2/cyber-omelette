import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { parseStringPromise } from 'xml2js';
import TurndownService from 'turndown';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const FEED_PATH = join(ROOT, 'CyberOmeletteExport/Blogger/Blogs/The Cyber Omelette/feed.atom');
const OUTPUT_DIR = join(ROOT, 'content/posts');

// Initialize Turndown for HTML → Markdown conversion
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Preserve iframes (YouTube embeds)
turndown.addRule('iframe', {
  filter: 'iframe',
  replacement: (content, node) => {
    const src = node.getAttribute('src');
    if (src && src.includes('youtube')) {
      // Extract video ID and create a clean embed
      const match = src.match(/embed\/([a-zA-Z0-9_-]+)/);
      if (match) {
        return `\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/${match[1]}" frameborder="0" allowfullscreen></iframe>\n\n`;
      }
    }
    return '';
  }
});

// Handle Blogger images
turndown.addRule('bloggerImages', {
  filter: (node) => node.nodeName === 'IMG',
  replacement: (content, node) => {
    const src = node.getAttribute('src');
    const alt = node.getAttribute('alt') || '';
    if (src) {
      return `\n![${alt}](${src})\n`;
    }
    return '';
  }
});

// Handle gist embeds
turndown.addRule('gist', {
  filter: (node) => node.nodeName === 'SCRIPT' && node.getAttribute('src')?.includes('gist.github.com'),
  replacement: (content, node) => {
    const src = node.getAttribute('src');
    // Convert to a gist link
    const match = src.match(/gist\.github\.com\/([^/]+\/[^.]+)/);
    if (match) {
      return `\n\n[View Gist](https://gist.github.com/${match[1]})\n\n`;
    }
    return '';
  }
});

function decodeHtmlEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)));
}

function extractSlug(filename) {
  // /2017/12/diy-fire.html → diy-fire
  if (!filename) return null;
  const match = filename.match(/\/([^/]+)\.html$/);
  return match ? match[1] : null;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
}

async function main() {
  console.log('Reading Blogger feed...');
  const xml = readFileSync(FEED_PATH, 'utf-8');

  console.log('Parsing XML...');
  const result = await parseStringPromise(xml, {
    explicitArray: false,
    tagNameProcessors: [(name) => name.replace('blogger:', 'blogger_')]
  });

  const entries = Array.isArray(result.feed.entry) ? result.feed.entry : [result.feed.entry];

  // Filter for LIVE posts only
  const posts = entries.filter(entry =>
    entry.blogger_type === 'POST' &&
    entry.blogger_status === 'LIVE'
  );

  console.log(`Found ${posts.length} live posts`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  let converted = 0;
  for (const post of posts) {
    const title = post.title || 'Untitled';
    const content = post.content?._ || post.content || '';
    const published = post.published;
    const filename = post.blogger_filename;

    if (!filename) {
      console.log(`  Skipping post without filename: ${title}`);
      continue;
    }

    const slug = extractSlug(filename);
    const date = formatDate(published);

    // Extract tags from category elements
    let tags = [];
    if (post.category) {
      const categories = Array.isArray(post.category) ? post.category : [post.category];
      tags = categories
        .map(c => c.$.term)
        .filter(Boolean);
    }

    // Decode HTML entities in content
    const decodedHtml = decodeHtmlEntities(content);

    // Remove <!--more--> markers
    const cleanedHtml = decodedHtml.replace(/<!--more-->/g, '');

    // Convert HTML to Markdown
    const markdown = turndown.turndown(cleanedHtml);

    // Build frontmatter
    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `slug: ${slug}`,
      tags.length > 0 ? `tags: [${tags.map(t => `"${t}"`).join(', ')}]` : null,
      `original_url: ${filename}`,
      '---',
    ].filter(Boolean).join('\n');

    const outputFilename = `${date}-${slug}.md`;
    const outputPath = join(OUTPUT_DIR, outputFilename);

    writeFileSync(outputPath, `${frontmatter}\n\n${markdown}`);
    converted++;
    console.log(`  ✓ ${outputFilename}`);
  }

  console.log(`\nConverted ${converted} posts to ${OUTPUT_DIR}`);
}

main().catch(console.error);
