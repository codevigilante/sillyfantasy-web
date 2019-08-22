# FAQ - Silly Fantasy
@page-title FAQ
@lead Winning Fantasy Football

<h1 class="header-title">What's the deal?</h1>

I started Silly Fantasy with two goals in mind. One, I wanted to develop a more statistical, performance based model to calculate player rankings and metrics, instead of relying on observational analysis or projections or whatever. There's nothing wrong with those methods - they've served me well over the years - but I wanted something a little more mathematical; something that learns and adjusts to new data quickly.

Two, I wanted to eliminate the clutter that most fantasy sites have become. Pop up ads, videos, pay walls, wonky layouts, data overload, make a lot of these sites unusable. I wanted to streamline and simplify data collection for myself and whoever wants to use the information provided here. Easy to read, distraction free, straight to the point, visually appealing. Get in, take what you need, and move on.

My intent with Silly Fantasy has never been to be a one stop shop. More of a supplement or sanity check, as I'm sure most fantasy players don't rely on a single source of information (if this is you, let's talk <strong>sillyfantasy@outlook.com</strong>). I hope I'm fulfilling these goals.

<h1 class="header-title mt-5">Who the fuck am I?</h1>

I'm A-ron. I heart math, loathe computers, and make money during the day as a software engineer. I'm a comedian, a micro farmer, husband, environmentalist wanna-be, writer, musician, fitness nut, and politcs junkie. Oh yeah, I also make money on the side playing fantasy football and occasionally dabble in betting on games.

Go read some things I wrote <a href="https://a-ron.me" target="_blank">@ a-ron.me</a>

<h1 class="header-title mt-5">What is Rank?</h1>

At its simplest, Rank is a value on a gaussian distribution (the typical bell curve). It is the marginal, or conservative, value of a player's or team's performance in a particular category. For example, the QB Ranks you'll find on this site are how a QB performs weekly against every other QB from week to week, fantasy points wise. I use other categories under the hood to arrive at this value, like workload, matchup quality, etc.

Rank is comprised of two values, a mean and a standard deviation. The mean is the apex of the gaussian distribution, the average. The standard deviation is considered the uncertainty regarding a player's Rank. Higher standard deviation, higher uncertainty, and lower Rank. The single, conservative, value you see is calculated by subtracting three standard deviations from the mean.

The more games a player plays in, the more certain the algorithm becomes about his Rank in that particular category.

Rank is based on <a href="https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/" target="_blank">Microsoft's TrueSkill</a> algorithm, what they use to create matches and leaderboards on XBox Live. I selected this algorithm because it has the ability to adjust quickly to new information, which is exactly what's needed in fantasy football, due to small sample sizes.

<h1 class="header-title mt-5">What else is going on?</h1>

Sometimes, my balls itch.
