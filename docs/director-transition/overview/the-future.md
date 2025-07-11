---
sidebar_position: 2
id: the-future
---

# Looking Ahead for Tech Team

:::warning

This is going to the most opinionated page in this entire handbook.
So, read it with a large grain of salt. Of course, not everything
that I mention here can all be done in a year, but if the groundwork
is planted, then perhaps tech team can be more than what it currently
is.

:::

## Possible Future Projects and Additions to Current Projects

As mentioned already in other pages, it would be nice if the core projects
that tech team works is expanded. The reason why I would like to see this
expanded is because in the grand picture of Dillo Day, the mobile app is
just _one_ thing that tech team is known for. Of course, we have other projects
that we work and maintain, but many of those are not _customer facing_
(seen by people outside of Mayfest). In general, a lot of our work is
inherently not very visible.

So, I am proposing the following future projects for tech team in the
hopes that can give you guys some more ideas to expand the overall impact
of tech team beyond just one singular project.

## Dillo Day Logistics App

:::info

It would be wise to scale down this project. I don't think that there will be enough time in a time to
push **all** of these features. But this should give you a good overview of what I think
could be something both _big_ and _useful_ for both Tech Team as well as Mayfest Productions.

:::

Over the last few Dillo Days, I think I have heard / seen some of the issues when it comes to managing Mayfest members the day of: schedules slip, communication scatters, and keys (literal and figurative) somehow go missing when we need them most.

I think a potential better solution than just creating a bunch of ad-hoc group chats, playing games of Telephone, Tech Team should own a single internal mobile app inside of Mayfest that tries to "stich" everything together.

Think of this as a connective tissue between Production, Operations, and Community, and every single Mayfest member
during Dillo Day.

### What the App Must Do

1. **Surface personal schedules** before, during, and after Dillo Day so no one is guessing where to be.
2. **Show each volunteer’s “pod”**—who they report to, who their peers are, and how to reach them.
3. **Offer a one-tap help line** (chat + voice) that routes directly to the staffed help desk.
4. **Track assets** (golf-cart keys, radios, et al.) with a quick check-in/check-out flow.
5. **Push live notifications** for schedule changes or critical alerts without relying on radio chatter.

Under the hood we will stay consistent with our established stack—**React Native + Expo** on the client, **Firebase** for auth, realtime data, and cloud messaging. That keeps the learning curve flat and the CI/CD story identical to the public-facing mobile app.

### Planning & Collaboration

This project is equal parts code and cross-functional coordination.

Before **any** of the TypeScript code can be written, we need coordinate "buy-ins" from Production, Operations, and Community so that the workflows that we need to have in the app can be fully fleshed out and written. By buy-ins, I am referring to commitments
between you (the technology director(s)) and the other exec heads that will be coordinating all of this.

It would be the first time that something like this would be created, so it's bound to have some flaws, but the more feedback there is, the better the first iteration will be.

### Development Roadmap

In prose, the timeline looks like this: we spend the remainder of Fall quarter gathering requirements and locking the MVP scope; we open January with a focused sprint on auth, schedule views, and realtime updates; by early February we should have an internal beta in TestFlight\Google Play; March is reserved for asset tracking and iterative polish; April is our field-test window with Lakefill walk-throughs; and by early May the release-candidate build is live in the stores with fallback SMS tested and ready.

And for those of us who think better in grids:

| Timeframe        | Core Focus           | Key Deliverables                                                                       |
| ---------------- | -------------------- | -------------------------------------------------------------------------------------- |
| **Dec (Fall Q)** | Requirements & scope | • Align with Ops/Production/Community on workflows<br />• Draft Firebase data model    |
| **Jan**          | MVP sprint           | • Implement auth (Expo + Firebase)<br />• Build schedule view with realtime updates    |
| **Early Feb**    | Internal beta        | • Push TestFlight / Google Beta<br />• Collect feedback from exec & pod leads          |
| **Mar**          | Feature expansion    | • Add asset check-in/out flow<br />• Integrate in-app chat routed to help-desk Slack   |
| **Apr**          | Field testing        | • Offline-mode verification on Lakefill<br />• Iterate on UI/UX based on walk-throughs |
| **Early May**    | Release prep         | • Submit final build to stores<br />• Rehearse day-of comms workflow with full staff   |

If we keep this timeline, and keep everyone involved in the development of this project, I think that this project
can definitely be used for Dillo Day 54.

## Dillo Day App

### New App Features

For the mobile app, I do not have as much suggestion because everything that
I wanted to get done got done. These are some of the things that I think could
be added but not that important

1. [IOS live activities integration](https://developer.apple.com/design/human-interface-guidelines/live-activities)
2. [Deep linking on notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
3. [Making the app feel more "native"](https://www.reddit.com/r/reactnative/comments/roxxwu/how_do_i_make_my_react_native_app_not_look_like/)

:::tip

Because of the new Spotify API rules, keep in mind that there might need
to be more creativity when it comes to the "interactive" feature in the
mobile app!

Or you can try your hand at applying for the extended quota for Spotify again...

:::

### Build or Re-Release?

Now to answer a question that you may have:

_Do we still create different mobile apps every year? Or do we release the same app with a
different color scheme?_

Now initially, this year, I wanted to make **one** mobile app. And of course, just update
that app every year with the new color scheme and features of that year.

Here is the main issue with that:

1. We need to make an Apple Developer Account for Mayfest

The issue with that is that in order to do that, _Mayfest Productions_
would need to be registered as a _company_ according to [Apple](https://developer.apple.com/programs/enroll/).

It's a lot more hoops to jump through, and even with Dilan's help
and of course, being an Apply employee, this was not able to happen.

You can try to go through the process again, but again, since Mayfest
is just a student org at Northwestern, there's a more caveats and
probably lots of meetings that would need to happen with Admin.

The bureaucracy that you would need to go through alone just
doesn't make the single app approach very feasible _unless_,
you would be okay with: Having the app being released under the same person's name every year.

Which honestly, doesn't make a lot of sense and creates an issue once that
person graduates.

## Dillo Day Website

Currently, the Dillo Day website follows a Black/White theme.

It works, but if you want to change it and make things more interesting,

I would propose making the website to be on theme with the Dillo Day theme.

I think that would the website "pop" more.

From what I've seen, I some other schools have better websites than ours.

Examples:

- [Duke LDOC](https://www.dukeldoc.com/)
- [Yale Spring Fling](https://www.yalespringfling.com/) - Not a super big fan of it but it "feels" more interesting
- [UCSD Sun God Festival](https://sgf.ucsd.edu/) - The best one imo

## Mayfest Email Builder

This is one the "weirder" projects since we got but not a lot of work done
this year for it.

Currently, the email builder is hosted [here](https://email-builder-template-eta.vercel.app/)

:::note

The email builder template is currently hosted on _my_ personal GitHub.

I will work on getting it deployed instead, inside of the Mayfest Productions

GitHub organization
:::

### The Hard Parts

The **core** of the Email builder, which is of course, to make emails is pretty complete.
We basically put together and got rid of stuff from different open source libraries.

The only things that realistically need to be added to the frontend of the Email Builder
is the following:

1. Some way of authenticating that a person has access to the website (Google OAuth)
2. Some way of checking if a specific user has access to send emails to specific group of People
3. Some way of creating email groups for example: (1) Mayfest All Org (everyone in Mayfest)
(2) Mayfest Mailing List - everyone who registered for the Mayfest mailing list.

(2) is important because you may have for example, Community exec want to send an email to
Mayfest all org, but the technology director(s) may want to send an email to everyone in the
Mayfest Emailing list. So, the auth flow needs to check if a user had the required
authorization to make sure that they can send to whatever email group they want to send too.

**The real hard part here though is the backend**.

Last year, Sofia and I tried to get access to [Amazon SES](https://aws.amazon.com/ses/) because
it was going to the cheapest way of sending emails to the thousands of people
that are in the Mayfest Mailing List (you can look at the Firebase or use the dillo day CLI to see
the exact number).

There are more alternatives to do this, but it requires a lot of work both in logistics
as well as development. It would be nice to be fully transitioned off of Mailchimp.

This is probably the _hardest_ project because Email is super hard to do **right**.

If I would suggest some goals if you want to make progress on this. This is an order
of priorities that I recommend:

1. Figure out which email provider to use (definitely will need to talk to Finance about this)
2. Make a prototype of a backend, connect to the current frontend and test within Mayfest internally first
3. If internal test go well, try to see how it scales with a larger user base. Maybe all Mayfest and Alumni?...

:::warn

I wouldn't stress too much about this project, since in all honestly, it's not the _most_ important
project that needs to be worked on or figured out. But, if you have someone who is really interested in email,
this could be a good solo project for someone to do by themselves, as long as they **actually make progress on it**.

## Keeping Development Consistent

### Frontend Development

One of my "gripes" with our projects is that while they all generally
follow the same technology stack: React and TypeScript, however, the issue
comes with the following:

- Styling Solutions
- React frameworks

These are minor but they increase the "skill gap" of the team.

For example, dilloday[dot]com is built with `Next.js`, TailwindCSS **and**
styled components. bio[dot]dilloday[dot]com is built with Vite, React,
styled components, and the bio editor is built with Vite + React and
TailwindCSS.

Now to be fair, I had some fault in this because I have _preferences_
but so did other directors in the past.

**It would be better if the team stuck to one stack, and one set of tools**
especially because many of the team members don't all have the same skills,
everyone speaking the same language is far better than having polygots who
can't communicate effectively.

For this I don't have a solution, because it's hard to prescribe a specific
framework / React solution. If I had to go with my gut feeling, this is
what _I_ think is the best in terms of velocity, ease to learn, and ease
of use:

1. Vite + React
2. TypeScript
3. TailwindCSS
4. Shadcn/UI
5. React router (if it's needed).

That's it. I wouldn't suggest trying to add more to that besides `npm`
packages you'll need to install and all of these technologies are
well used enough and trained on by LLMs so "vibe coding" with them
wouldn't be that hard either.

**Ultimately I would pick something that is going to the easiest to learn. In all
honestly, using just JavaScript might be worth it because TypeScript has a learning
curve to it (even if its small).**,

And when it comes to the mobile app development side of things, this
is what I recommend sticking too:

1. Expo
2. React Native
3. TypeScript

:::danger

I don't suggest exploring other mobile app frameworks besides
React Native with Expo. The reasoning is that going outside of this
ecosystem means that you will lose critical features when it comes
to:

1. Fixing bugs during Dillo Day
2. Ease of use
3. Building for both IOS and Android concurrently
4. Notifications
5. Many more

Expo is _not perfect_ but it is _perfect for our use cases_ and has
proven to be super effective, easy to learn, and reliable even
when pushing the framework to its limits.

I seriously don't think any other mobile app framework would be
able to let us do the same as Expo does

:::

### Backend Development

Pretty much everything goes Firebase. As of right now,
we haven't ran into issues with it comes to usage in that
we are not being _charged_ for using Firebase. However, as we
scale our operations, more people download and use the app, I suspect
that we will eventually hit the usage limits of the free tier(s)
of Firebase. When that moment comes, I believe it's best to
communicate with **Finance** about it ASAP.

In the event that we have no money and need to switch providers,
the next best option I believe would be to transition all of our
core infrastructure to [Supabase](https://supabase.com/).

It's maybe not the most ideal but it gives the best interface and
experience similar to Firebase.

I personally would prefer to use something that uses `SQL` but
for something like this, it's better to rely on serverless
architectures more than serverful. It makes scaling much easier
and stress free even if it's not the most "technical"
approach or solution.
