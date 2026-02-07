---
title: "The Abstraction Rises"
date: 2026-02-06
slug: the-abstraction-rises
tags: ["programming", "AI", "LLM", "history", "FORTRAN", "coding agents", "abstraction", "vibe coding"]
original_url: /2026/02/the-abstraction-rises.html
---

In the time it takes to get an undergraduate degree, Large Language Models (LLMs) have evolved from delivering realistic chat responses, to autonomously coordinating and completing tasks at the scale of full engineering teams.

In programming circles, Stack Overflow used to be where you landed when you got stuck. A simple search typically led you to discover another programmer who had suffered through the same problem, and if lucky, the solution too ([relevant xkcd](https://xkcd.com/979/)). Since 2022, however, the number of new Stack Overflow posts has [fallen by 77%](https://gist.github.com/hopeseekr/f522e380e35745bd5bdc3269a9f0b132). Instead, developers have begun turning to tools like ChatGPT to get help, and now, even entire fleets of [Coding Agents](https://code.claude.com/docs/en/how-claude-code-works).

In my experience, coding agents **can** do amazing things. I've built numerous prototypes in a few hours, that would have once prevented by my own incompetence. Most recently it was a full-stack iOS app for photographing, indexing, and searching my personal storage bins. The back-end was familiar territory for me, iOS front-end was not. So I let agents do 100% of the front-end work for me, and by the afternoon I had a fully functional prototype. I still experience the limits of these agents though. In a recent case, I was adding a configurable field for an SSL certificate path. The task was mundane and well-defined, yet the agent fixated on adding an unrelated parameter. No amount of pleading could convince the agent that it was, in fact, wrong.

Steven Yegge poses a compelling vision of the use of coding agents with his provocative orchestration tool called [Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04):

> *Gas Town is an industrialized coding factory manned by superintelligent robot chimps, and when they feel like it, they can wreck your shit in an instant.*

Relatable. Yet while it's clear that something major has changed, I remain unsure of how this will play out over the next decade or two. Some believe AI Super-intelligence is just around the corner (for good or evil). Others believe we're mistaking philosophical zombies for true intelligence, and speedrunning our own brainrot.

When facing an uncertain future, I try to anchor my predictions in historical outcomes. In the history of computing, it turns out that Vibe Coding, or more specifically [Automatic Programming](https://antirez.com/news/159), has been invented before. Reading this history reshaped my own view of the future and my place in it. Your mileage may vary.

## The Priesthood

Let's go back to the early 1950s. Computing machines had progressed from mechanical abacus-esque calculators, to room-scale computing machines capable of ending wars. The [ENIAC](https://www.seas.upenn.edu/about/history-heritage/eniac/) and [UNIVAC](https://en.wikipedia.org/wiki/UNIVAC_I) were state of the art. The field was small, with [fewer than 1,000 computers](https://www.columbia.edu/cu/computinghistory/gilchristearlycomputers.pdf) in existence.

Programming these machines was labour-intensive. It was done on punch cards, with the programmer defining exact mechanical steps from an operator's manual. Performing a simple two-number addition involved explicitly choreographing where the values would be stored, when the computation step would fire, and wiring the outputs back to meaningful addresses. There was complexity even in the most basic requirements.

The most notable computation of the time was forecasting who would win the presidential election, where a UNIVAC-1 system [correctly predicted Eisenhower to win](https://www.computerhistory.org/revolution/early-computer-companies/5/102) with a landslide from [a sample size of 5.5%](https://en.wikipedia.org/wiki/UNIVAC_I) of voters. Another notable application was the SAGE air defence system, consuming [250,000 to 500,000 lines of assembly code](https://www.computerhistory.org/revolution/real-time-computing/6/122) and employing 7000 engineers - ~20% of the world's programmers at the time.

Leading minds of the day considered programming to be a black art, so advanced it could never be generalized for the masses. While efforts to simplify existed, like the [Laning and Zierler system](https://en.wikipedia.org/wiki/Laning_and_Zierler_system) at MIT, they slowed machines down [by a factor of five or ten](https://dl.acm.org/doi/pdf/10.1145/800025.1198345). With the price of computation so high, that inefficiency was like lighting money on fire. The small group of contributors capable of producing efficient and correct code considered themselves exceedingly clever, and scoffed at the idea that they could be replaced. A man named John Backus later referred to this group of black art programmers as "The Priesthood," and he was one of them. But he had his own plans to disrupt the status quo.

## Enter Automatic Programming

As head of IBM's Programming Research Group, John Backus was seeking to vastly simplify the effective use of the IBM 704. His motivation was blunt: "I didn't like writing programs," he [later admitted](https://dl.acm.org/doi/10.1109/85.728232). His team set out to build an abstraction on top of machine code, seeking to simplify logic without sacrificing speed. The stakes were high: computers cost nearly $1M, and [more than 90% of elapsed project time](https://dl.acm.org/doi/10.1145/1455567.1455599) went to planning, writing, and debugging while the machine sat idle.

In the [1956 Programmer's Reference Manual](https://archive.computerhistory.org/resources/text/Fortran/102649787.05.01.acc.pdf), Backus made a bold claim:

> *Since FORTRAN should virtually eliminate coding and debugging, it should be possible to solve problems*

In hindsight, this seems absurd. There's a saying that "[You can write FORTRAN in any language](https://web.archive.org/web/20050530074644/http://www.acmqueue.com/modules.php?name=Content&pa=showpage&pid=271)," a reminder that any language can produce buggy, illegible code. But compared to hand-coded assembly, FORTRAN delivered. Programs that previously required 1000 machine instructions could be written in [47 FORTRAN statements](https://www.ibm.com/history/fortran). GM's productivity studies showed FORTRAN reduced programming effort by [a factor of five to ten](https://www.ebsco.com/research-starters/history/ibm-develops-fortran-computer-language). This was significant progress.

FORTRAN wasn't the only language dramatically simplifying computer coding. [Grace Hopper](https://hiddenheroes.netguru.com/grace-hopper), a computing pioneer who had helped build the UNIVAC-1, was also convinced that coding didn't need to be so opaque. She drove the creation of the [FLOW-MATIC](https://en.wikipedia.org/wiki/FLOW-MATIC) language, a predecessor to [COBOL](https://en.wikipedia.org/wiki/COBOL), and the first compiled language to adopt English-like syntax. Hopper's motivation was simple: you can't force a businessman to learn math notation.

Programming languages were moving from esoteric holes in punch cards toward portable, readable text.

## What They Expected

Computer code was getting easier to write, and not everyone was impressed. In John Backus' own [reflections](https://softwarepreservation.computerhistory.org/FORTRAN/paper/Backus-ProgrammingInAmerica-1976.pdf), he describes:

> *The Priesthood wanted and got simple mechanical aids for the clerical drudgery which burdened them*

The skeptics had economics on their side as well. Slowdown meant lost money, so Automatic Programming would have to match hand-coded efficiency to be adopted. There was a human component as well: programming was a hard-won skill, and implying it could be automated felt like an attack on the craft itself.

Meanwhile, [analysts in the early 1960s](https://exhibits.stanford.edu/computers) predicted everyone would *have* to become a programmer to meet expected demand. Computers were proliferating. Software was essential. The prediction was that programmers would become as common as typists, and technology would be democratized.

## What Actually Happened

Despite historically-anchored criticism, the efficiency problem *was* eventually solved. FORTRAN's optimizing compiler produced code that ran nearly as fast as hand-coded assembly. The IEEE Computer Society later noted it was ["the best overall optimizer for not 5 years, not 10 years, but 20 years"](https://history.computer.org/pioneers/backus.html). Coupled with the falling cost of computation, the performance objection evaporated.

The democratization vision, however, did partially come true. COBOL became the most widely used language in the world, but not for use by the general masses. Businessmen still needed trained programmers. Reading and writing code [proved to be very different skills](https://increment.com/programming-languages/cobol-all-the-way-down/). As Turing Award winner Fred Brooks phrases it, simpler programming languages reduce the *accidental complexity* of a task, but the *[essential complexity](https://en.wikipedia.org/wiki/No_Silver_Bullet)* remains. You still have to know what you want the computer to do, and that can be very hard. While not everyone wrote computer programs, the number of computers in the world exploded. This count grew from under 1000 in 1960 to [over 7 billion smartphones alone today](https://www.statista.com/statistics/330695/number-of-smartphone-users-worldwide/). Computers became daily tools for a majority of the world, and not just for business.

With easier programming, teams didn't shrink either. Paradoxically, they grew. The U.S. went from [200k computer workers in 1970 to 1.6 million by 2015](https://www.researchgate.net/figure/Computer-programmer-employment-and-wages-in-the-US-Sources-1970-data-from-US-Census_fig2_328521760), with estimates of [26-28 million globally](https://www.statista.com/statistics/627312/worldwide-developer-population/). As a percentage of the S&P 500, technology went from [around 3%](https://www.qad.com/blog/2019/10/sp-500-companies-over-time) when the index launched in 1957, to [over 32% in 2024](https://www.syntaxdata.com/research/know-what-you-own-revisiting-s-p-500-tech-exposure). Now more than double the next largest sector.

The Priesthood lost its grip, and the black art of telling computers what to do made it to the masses.

## Looking Back, Looking Forward

This post began as an exploration into history. When reading John Backus' reflection [on being a programmer in the 1950s](https://softwarepreservation.computerhistory.org/FORTRAN/paper/Backus-ProgrammingInAmerica-1976.pdf), it completely matched my own views from my days [optimizing GPU kernels](https://www.academia.edu/103661397/Investigating_Performance_Benefits_from_OpenACC_Kernel_Directives) as an HPC Developer.

He states:

> *The programmer had to be a resourceful inventor to adapt his problem to the idiosyncrasies of the computer*

When first reading this quote, I realized I am a part of the modern Priesthood. Seventy years later, this is exactly how I think of (some) programming. But history shows this is wrong - even the sharpest skills *will* be made obsolete. Yet the need for niche expertise to push computation to its limits will remain. What changes is the problems they will be solving.

There's a saying in cycling - "It never gets easier, you just go faster." Perhaps with knowledge work, it doesn't get easier, the systems just get more complex. Before FORTRAN, crude election forecasts and tracking a handful of aircraft were state of the art. The next 50 years brought weather forecasting, universe-scale simulations, and the codification of the human genome. This wildly exceeded anyone's imagination at the dawn of the compiler era.

This lesson predates FORTRAN as well. When James Watt optimized the steam engine, the expectation was that coal use would plummet. Instead, it ballooned. This is known as [Jevons Paradox](https://en.wikipedia.org/wiki/Jevons_paradox), and it continues today. In 2016, Nobel Laureate Geoffrey Hinton predicted that [radiologists would be obsolete within 5 years](https://fastdatascience.com/ai-in-healthcare/ai-replace-radiologists-doctors-lawyers-writers-engineers/). Ten years later, radiologist MD Dana Smetherman notes that not only is demand strong, "[AI might even increase the workload by identifying additional findings](https://radiologybusiness.com/topics/healthcare-management/healthcare-staffing/radiology-workforce-shortage-major-concern-american-college-radiology)".

When primed with lessons from history, I find my own technological arrogance fading. My concerns about obsolescence have shifted toward curiosity about what remains to be built. The *accidental complexity* of coding is plummeting, but the *essential complexity* remains. The abstraction is rising again, to tame problems we haven't yet named.
