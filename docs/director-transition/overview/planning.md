---
sidebar_position: 4
id: planning
---

# Keeping Things Running Smoothly

:::info

Below are some suggestions that I have for systems and habits that I think could keep tech team
more well organized and running more smoothly and keep us from spiraling into the chaos that
we would end up in last year.

None of these tools are "magic", they will only work if they are implemented consistency, the key
is to get everyone on the same playbook at the beginning so that it can save you dozens
of frantic messaging and groupchats during the weeks leading up to Dillo Day

:::

## Gmail

Realistically, only you will have access to the Tech team Gmail account. Ideally, no one else
would need access to it as most things that require creating accounts and what not would need
to go through you.

In anycase, the Gmail doesn't see a lot of activity, and we don't really use the Google Drive for anything.

**JUST PLEASE MAKE SURE THAT ALL IMPORTANT DOCUMENTS ARE SHARED AND OWNED BY THE GMAIL ACCOUNT**

This is because when you graduate, you only have a few weeks to transfer anything in Google Drive
before they vanish into the void. So if you have stuff for tech team in **your own personal Northwestern
email, it _will_ be deleted after you graduate.**

## Communication

### Move to Discord instead of iMessage

S works, but the free tier caps your searchable history and integrations vanish after 90 days. Discord gives us:

iMessage works _okay_ for most things but the issues that I have for it is that it can be
buggy, if there's an Android user in the team, then the benefits of iMessage go away....

I think Discord is generally widely accepted at Northwestern as a form of communication,
and at the end of the day, you have the final say in this.

You can either create a new Discord server or just keep the same way that I made this year
(and didn't use that much).

If you choose to transition over to Discord, here's a server layout that I think is good to start out with:

### Server Layout

| Channel | Purpose |
|---------|---------|
| `#tech-general` | Quick questions, links, async stand-ups |
| `#tech-announcements` | One-way updates from leads only |
| `#tech-<project>` | Deep dives and daily chatter for each active codebase |
| `voice/coffee-chat` | Drop-in voice room for pair debugging or design huddles |

### Meetings

Now, when it comes meetings, I'm not sure what is best.

This is because short meetings are good only for giving updates (like Stand-Ups)
and longer meetings (like the ones we were doing in the Spring) are good for
basically getting everyone to work on something.

I also realize that a lot of the other committees don't have the same
meeting structure that tech does. Though, I think tech team will inherently
need to have a different meeting structure anyways because of the nature
of the work (just my thoughts).

If I had to break it down, I would suggest having two types of meetings per week:

- **Async Stand-Ups**
  Post every Monday and/or Thursday morning in `#tech-general`:  
  1. What you did since last check-in  
  2. What you’re doing next  
  3. Blockers

- **Sprints and Meetings**
  - Bi-weekly sprint retro (30 min) to reflect on what shipped and what hurt  
  - Monthly full-team sync (45 min) for demos and roadmap adjustments  
  Keep video calls short; push everything else to Discord threads.

**Emphasis on Demos**. I think that forcing people to have share and show the entire
team their work applies pressure on them to actually get things done because no
one wants to the person who visually doesn't look like they've done a lot.

## Notion

1. **Home Page as Single Source of Truth**  
   - Roadmap, onboarding docs, and FAQ live here.

2. **Sprint Board**  
   - Kanban split into `Backlog` • `In Progress` • `Review` • `Done`.  
   - Each card links to its GitHub issue (two-way sync plugin is worth it).

3. **Document Decisions**  
   - Any architectural choice longer than two paragraphs goes into Notion, not Discord.  
   - Tag `@tech-lead` for sign-off, then drop the page link in the relevant channel.

> Avoid page sprawl. If a doc will not be referenced three months from now, keep it in Discord.

## Distributing Tasks

### The “Two Yeses” Rule  

A task is officially someone’s responsibility only when **they accept it** and **a lead assigns it** in Notion or GitHub.

1. **Skill-Based Assignment**  
   - Gather skills and interests through a quick Google Form during onboarding.  
   - Tag tickets with `beginner`, `intermediate`, `advanced` so members can self-select.

2. **Size Matters**  
   - If a task can’t be finished in one week, break it down.  
   - Story points: 1 (tiny fix), 3 (normal feature), 5 (large refactor). Anything above 5 becomes an epic.

3. **Buddy System**  
   - Pair newer members with seniors for the first few tickets.  
   - Encourages code reviews that are educational rather than gate-keeping.

## Keeping People Accountable

1. **Weekly Check-In Doc**  
   - Everyone writes three bullets: Done / Doing / Blocked.  
   - Leads skim before Monday stand-up so blockers get airtime.

2. **Review Gates, Not Bureaucracy**  
   - No pull request merges without at least one reviewer approval and passing CI.  
   - Reduces surprises like “It worked on my machine.”

3. **Quarterly One-on-Ones**  
   - Fifteen minutes per person: workload review, learning goals, and feedback loop.  
   - Document action items in Notion and revisit next quarter.

4. **Public Praise, Private Nudge**  
   - Celebrate wins in `#tech-announcements`.  
   - Address missed deadlines via direct message first; escalate only if patterns repeat.

> Accountability is not micromanagement. Set clear goals, trust people to meet them, and intervene early when things slip.
