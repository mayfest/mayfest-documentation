--- 
sidebar_position: 2
id: timeline
---

# Tech Team Timeline

This is a quick overview of what I would
_suggest_ should be the timeline of tech team in the future. This is because
I think that looking at the past year in addition to how the:

1. Code Quality
2. Quality of Products
3. Overall stress/health of the team

Starts to diminish because of doing things at the last minute/not planning the best
or keeping tasks and people accountable

So as of right now, there are a couple of **main** things that Tech Team needs
to deliver on on a timely manner. I would say the order is the following:

1. The Dillo Day Mobile App
2. [NEW] Mayfest internal app for Dillo Day-off logistics _more on this later_
3. A promo website for the mobile app
4. Updating [dilloday.com](https://dilloday.com)
5. Updating the Dillo Day CLI
6. Everything else goes here....

This ordering is intentional. The first two are easily the most important.
Because of the technical requirements but also because as you will
read later, deploying mobile apps is a lot different than deploying
websites and comes with many caveats that are non-trivial

So now I want to get into some specifics for each item in the list above

## The Dillo Day Mobile App

The Mobile app is obviously the main thing that our team is responsible for.
It's important that this is the _one project_ that the team puts it's all in
since this is the project that is probably one of the most **customer facing**
in terms of being seen/interacted with festival-goers. It's also the project
that is pivotal for day-of communications between Mayfest and Dillo Day
attendees

I would recommend that work on this project start as early as the
theme is picked from **promo**. Which is usually going to be in late
fall quarter. This way, you can start working on a overall design and "vibe"
for what the app is going to look like. This was the main pitfalls of
last year where I focused too hard on functionality and pushed design last.
It would have been easier, I think to put design first because otherwise,
changing the code to reflect a new design may not be trivial if the codebase
is written in a non-ideal way.

### Designing the Mobile App

Next, once you have the design, use the starter code template for the app
to have at the minimum, feature parity with the mobile app from last year.
This is important because a lot of the groundwork that is **core** to the
mobile app is pretty much already done for you, including:

- Notifications
- Configurations
- CI/CD
- Creating themes
- Deployment

### Building the Mobile App

Unless something changes dramatically in React Native or Expo, then most
of the code/functionality that is already implemented will require minimal
changes in the future. Again, you will find this out early if you start
the mobile app development early. Otherwise, you might get caught off guard
by new bugs/issues in the tools that we use!

Let's say that developing the mobile app usually takes at the maximum, one month,
at least for a build that can be _shipped_ to users and not have a lot of bugs.

If you can get the first build done by lets say the end of **January**, then
that leaves you with about **four months** for bug testing, user studies, etc

And of course, leaves with more than plenty of time to submit to the App stores
so you won't have to worry about shipping the app to users late.

So to summarize this, the mobile app development should ideally look like this:

### Mobile All Development General Timeline

1. December: Finalize theme, work with Promo on Color Scheme (if needed)
2. January: Go all in development
3. Early February: finish version 1.0.0
4. Mid-February: submit version 1.0.0 to App stores
(can schedule a specific release date)
5. Late-February-First week of May: Fix bugs, collect internal feedback,
implement other features

And I think this should give you more than enough time to get an app out
without all of the craziness that we have had to deal with in the past

## Dillo Day Logistics App

This is a new and going to be heavily experimental new addition to the
tech team project list. There is a more detailed write up _here_ but
this is a summary for what this app should do on a high-level and a possible
timeline for it.

### Logistics App

In the past, exec has collected feedback that managing communication,
keeping people "busy" and things super well organized during Dillo Day
has been a challenge. This is because people either:

1. Don't follow their schedules
2. Don't have a clear line of communication
3. Don't know what they can be doing to help
4. Don't know where golf cart keys go
5. Don't do things they way they need to be doing them.

One possible solution to this, is if we have some _internal_ mobile app
that Mayfest members download so that they can have access to the following
information at ease:

- Their schedule for before, during, and after Dillo Day
- Who is in their Dillo Day "pod"
- Who they should directly report to on exec for any issues
- A line they can contact if they are confused, lost, or don't know
what to do
- Report they have a golf cart/car keys
- Get live notifications from tech team for any super important
communications.

### Planning for the Logistics App

I think this is easily going to be the **hardest** project that tech team
has undertaken because of how non-trivial it's going to be but also because
of how cross-functional it's going to be since you will need to talk too:

- Operations
- Community
- Production
- Admin?
- ....

So not only is there a development part of this, this is largely a communication
project as well.

**Start work on this early** if you want to get it done on time.

Again, you're going to have to submit this app to the app stores too,
so any delays in getting that submission in will only decrease the chances of
the app being
accepted in time by the app stores for Dillo Day.

I don't think the development will be _that_ hard. The main things that you would
need to figure out for the bare minimum MVP of this app would need to add the
following to the framework for the mobile app:

1. Authentication (so only Mayfest members can access the map)
2. Some database (firebase collection) for storing and getting a personals schedule
3. Being able to pull in real-time changes to the app in case someone's schedule
changes at the last second, during the day, or something like that.

Because of this project being new, and it's scope being kind of high,
I think once the team is onboard with our technologies, development
on this should begin in **January** and continue for as long it
needs too. With constant feedback and iterations from the team
as well as the rest of the Mayfest executive board.

**Work super closely with the rest of the exec and your co-chairs for this.
And be super communicative with them! I think this project is going to be
hard, but the most rewarding for the team to release if it can get done
in time**

## Everything else

The rest of the projects are much easier to plan because there's not
_as much_ work that needs to be done with them. For example, updating
the main Dillo Day website, creating the app promo website, should all
take no more than two weeks to complete and be completed in concurrent
with the other projects (don't require as much people either).

## Closing

So, to summarize this up, this is a table view of how I would scope
out the entire timeline for Tech Team:

| Timeframe | Dillo Day Mobile App | Logistics Mobile App (NEW) | Web & Other Projects* |
|-----------|----------------------|----------------------------|-----------------------|
| **Dec (Fall Q)** | • Finalize theme & color palette with Promo<br />• Kick-off high-level UI/UX design | • Gather requirements with Ops / Production / Community / Admin<br />• Define MVP scope & data model | — |
| **Jan** | • Full-scale development sprint (v1.0.0 code-complete goal)<br />• CI/CD & core features | • Begin development (auth, Firebase schedule DB, real-time updates)<br />• Align UI with exec | • Start promo microsite & _dilloday.com_ refresh (run in parallel)<br />• Initial Dillo CLI audit |
| **Early Feb** | • Finish v1.0.0 build<br />• Internal QA via TestFlight / Google Beta | • Continue feature build & internal testing | — |
| **Mid Feb** | • Submit v1.0.0 to App Store & Google Play (schedule release) | • Iterate on feedback; polish core flows | • Finalize promo microsite copy & assets |
| **Late Feb → Mar** | • Bug-fix cycle & user studies<br />• Incremental feature adds | • Ongoing dev; closed beta with Mayfest staff | • Launch promo site<br />• Complete _dilloday.com_ content/style updates |
| **Apr (target)** | • Stability monitoring & analytics | • Submit to stores for review<br />• Lock schedules/notifications | • Ship updated Dillo CLI<br />• Tackle “everything else” backlog |
| **Early May (≤ festival week)** | • Release-candidate build live in stores<br />• Configure day-of push notifications | • Release approved build<br />• Rehearse day-of comms workflow | • Final polish & contingency tasks |

\* “Web & Other Projects” bundles the promo microsite, _dilloday.com_ refresh, Dillo Day CLI, and any lower-stake tasks that can run concurrently with minimal team load.
