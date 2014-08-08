Title:			How to make a quality website
Author:			David Newton
Organization:	Knowledge Translation Program, St. Michael’s Hospital
Date:			2014-08-07
Contributors:	Wai-Hin Chan, Michael R. Kealey, Gail Klein, Nikolas LeBlanc, and Sharon Straus
URL:			https://github.com/knowledgetranslation/process/




## 1. Introduction

This process has lots of padding and failsafes built-in. Every project always runs over-time, over-budget, and under-scope. The padding and failsafes should help mitigate the consequences of unexpected barriers.




## 2. Principles

These principles should be examined and considered before the project starts, when the project ends, and at every step in between. At every step, every team member should consider how the principle applies to the step as a whole, and to their work in that step.

1. Every website needs to be [responsive](https://en.wikipedia.org/wiki/Responsive_web_design)[^1][^2], every website needs to be [accessible](https://en.wikipedia.org/wiki/Web_accessibility)[^3][^4], every website needs to use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_Enhancement)[^5][^6].

1. Every stakeholder is a team member and every team member is a stakeholder.[^7]

	* Exception: Usability tests should, ideally, be conducted and summarized by people completely separate from the rest of the team, to avoid bias.

		If the team members are the ones conducting usability tests, every effort should be made to avoid bias in testing.[^8]

1. Involve all stakeholders at every step of the project, every meeting, and every decision point. Everybody should have the *opportunity* to participate.

	* Involvement should be discussed and agreed upon at the first meeting, and the team should make decisions about what the expectations are for every team member, and what the timelines for response are.

	* For some parts of the project, a team member’s involvement will be mandatory, for others optional; but, every team member should have the option to participate in every stage.

	* Involvement does not simply equal presence. Every team member should have the option of *participating actively*, and should be encouraged to do so.

	* e.g. designers should be involved during content creation, developers should be involved while creating timelines, users should be involved while planning scope[^9], etc.

1. Trust the expertise of your experts, *in their area of expertise*. Being an expert in one area doesn’t make somebody an expert in another area.

	* e.g. a content expert is not a designer; a developer is not a scientist

1. Don’t give disproportionate or inappropriate weight to trivial issues.[^10]

	* As an example, holding a meeting to discuss a typeface or the colour of a design element is probably not the best use of the team’s time. Instead, focus on content, functionality, and usability.

1. Remember the [Priority of Constituencies](http://www.w3.org/TR/html-design-principles/#priority-of-constituencies), a founding web design principle encoded by the World Wide Web Consortium and Web Hypertext Application Technology Working Group (the organizations responsible for web standards):

	> In case of conflict, consider users over authors over implementors over specifiers over theoretical purity. In other words costs or difficulties to the user should be given more weight than costs to authors; which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone. Of course, it is preferred to make things better for multiple constituencies at once.

	* The original principle defines “authors” as web authors, i.e. web developers and designers who are building a site; “implementors” as browser implementors, i.e. software developers who build web browsers; and “specifiers” as those writing web standards specifications.

	* For our projects, we can alter these definitions while still retaining the spirit of the principle. “Specifiers” would be those team members who are responsible for planning, and “implementors” would be those responsible for content; the definitions for “users”, “authors”, and “theoretical purity” can remain unchanged.

	* With these new definitions, we can resolve conflicts by giving more weight to costs/difficulties affecting users over developers/designers over content creators over planners over theoretical purity. But, as always, solutions should ideally improve things for multiple/all constituencies.

	* Note that this principle does not mean we should always defer to what each constituency wants or says they want; it means that in cases of conflict we should look at evidence and use that evidence to prioritize benefits to users over authors, etc.[^11] We always prioritize evidence over expert opinion.

1. No single user is more important than another user.[^12]

	* e.g. mobile users need the same access to the same content as desktop users, disabled users need the same access to the same content as able users, etc.

1. Usability tests are for identifying problems, not for generating suggestions.

	* Users might think they know how to solve these problems, but they may be wrong. They aren’t the experts in tool development, you are. *However*, they may be knowledge experts in the context of the tool usage.

	* Usability test summaries focus on identifying 	problems rather than solutions. While user-suggested solutions should be considered, final decisions on solutions should be decided by experts on your team.

	* “Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”[^13]

1. Usability testing should only ever focus on one area at a time, e.g. either content, look-and-feel, or functionality. If you want to test multiple areas, conduct separate usability tests.

	* Usability tests should have specific performance and success goals.[^14]

1. You’re building for the web, so use web-compatible technologies.

	* Create content using plain text, [Markdown](https://en.wikipedia.org/wiki/Markdown), or HTML; not in Microsoft Word (and especially not PDFs or PowerPoint).

	* If possible, design *in the browser*[^15][^16][^17] using CSS, not in software designed for print, like Photoshop, Illustrator, or InDesign (and especially not in non-design software like PowerPoint, Word, etc).

	* Define design in terms of web units, e.g. colours as hex values, sizes and distances in pixels and ems, etc.

	* Collaborate using version control software and services like GitHub, not by emailing and turning on Track Changes in Microsoft Word.

1. Make sure all designs account for and define all interactions and states (clicks, hovers, transitions, etc.).

1. “A user interface is like a joke. If you have to explain it, it’s not that good.” —Martin LeBlanc[^18]

	“No line of instruction will compensate for a bad design.” —Robert Hoekman Jr.[^19]

1. Build everything (content, design, development) modularly: you’ll probably be on another project where you can re-use components.

1. Avoid social components (e.g. forums, chat, blogs, social media) when possible.

1. Avoid requiring users to log in with a username and password.

	* If a password cannot be avoided, show it in plain text with an option to obscure it[^20] and provide an automated way for users to reset their own passwords.

1. Document everything you do at every step and use version control software for every piece.

1. Everybody should track their hours. Ideally hours should be tracked according to specific tasks. One good way to do this is to make every task a GitHub issue, and associate all hours with specific issues.

	* Tracking the time it takes to create each feature can help with scoping and budgeting future projects.

1. Publish what you publish. Knowledge translation depends on dissemination; we need share what we’re creating[^21].

	* Make all website content public, not password protected or behind a paywall.

	* If it can’t be made public, then it probably shouldn’t be on the website. Use other services, like intranets, Basecamp, Canvas, etc.

	* Open source all the developed designs, code, documentation, etc.

	* Find out what your rights are when you publish papers about the project. If possible make the papers available as widely as possible, for free, even if it costs extra money.

1. Research as much as possible. Learn as much as possible. Collect as much data as possible. We should always strive to do evidence-based web development.

1. Work in the open. Avoid decision-making over email or in private conversations.

	* All meetings should have a secretary, and that secretary should take notes *visibly*, e.g. on a whiteboard, so other attendees can contribute and update notes where they see fit. Ideally, meetings should also be audio recorded and made available to members who weren’t able to attend. Ideally, any sketches should be photographed/scanned and be included with the minutes.

	* All decision-making between meetings should be done in an open forum, such as GitHub or Basecamp.

1. Give credit where it’s due. In [Steps 1–3](#steps) you’ll clearly define roles and responsibilities for each team member. With all the documentation you develop, including git logs and timesheets, you’ll be able to verify who did what. Give appropriate credit to *everyone* in *all* the following places:

	* on the website (e.g. in a humans.txt file, in page metadata)
	* in the website’s documentation (e.g. CONTRIBUTORS.MD on GitHub)
	* in papers about the project (e.g. authorship for anybody that had decision-making responsibility, acknowledgements for every other team member)
	* in presentations (e.g. on an acknowledgements slide)




## 3. Steps

1. Determine who the stakeholders and team members are.

1. For each of the following areas, determine which team member is the most responsible person: planning, content, design, development, and science. The most responsible person should be an expert in their area.

	* The most responsible person will have the final decision on matters related to their area(s).

	* All other team members are still welcome to provide *feedback* on all other areas.

1. For every team member that’s not a most responsible person, determine which area (planning, content, design, development, and science) they will focus on.

	* All other team members are still welcome to provide *feedback* on all other areas, but they should have a specific focus.

1. Determine the maximum budget that is available, and divide by two. This is your operating budget.

	* Remember: extra money is a good problem to have.

1. Using your operating budget and timelines as guides, determine the ideal project scope[^22], then reduce it by half. This is your scope for *this phase*.

	* A focused project is more likely to be successful, and there will always be time for more phases later.

	* It may be best to think of each phase as a collection of specific features. E.g., Phase 1 might be a collection of static content pages, Phase 2 might add videos or other interactive content, etc.

	* Remember to consider *all* the steps in this document when considering timelines, including multiple rounds of usability and testing.

1. Plan exactly what data you’d like collected for research, testing, and development/planning purposes, and define why you need it. Then, for each of these, plan to collect more data than you think you’ll need.

	* If possible, try to collect as much data as possible anonymously. Identifiable data should be avoided whenever possible.

	* If you’re collecting data, write a privacy policy and submit it to REB/legal, and make sure to include it in the publicly-available content you develop in the **Content** steps.

1. Research

	* Study the data collected from other projects and earlier versions of this project, and interview stakeholders (especially users). Determine what content and features are important to whom and why, how they will be used, and where they will be accessed from.[^13][^23]

	* Every team member should spend at least one full day reading about their area of focus (and especially about how it applies to the web), and another full day about an area on which they aren’t focusing and/or aren’t an expert. This helps ensure that everybody’s knowledge is current and continues to grow.

1. Create user personas based on your research, that reflect different types of typical and atypical users.

	* Remember that these form a useful but incomplete subset of your users; real users will never behave as you expect, nor should they.

1. Do the **Content** steps.

1. Do the **Design** steps.

1. Do the **Development** steps.

1. Create a launch plan.

	* If this is an update to an existing site, develop a plan for how users will transition to the new version. Give them options to opt-in to the new version early, and opt-out for a set period after launch. Plan specific changeover dates and stick to them. Create and make available change documentation explaining what has changed and why.[^24][^25]

	* Provide communication and feedback channels, and plan how these will be monitored.

	* Plan how data will be monitored during the launch/transition period, and how to react/make adjustments based on this data.

1. Create a post-launch plan.

	* Decide what actions will be required for maintaining and updating the site, who will be responsible for this, and where the funds will come from.

	* Plan for how to monitor and react to usage and other data post-launch. For example, tracking usage of individual features can help determine if they should be removed, and can help with scoping and budgeting for future projects.

	* Plan for who will monitor and respond to the communications channels that were defined in your launch plan.

1. Implement your launch plan.

1. Once the final phase of your launch plan is complete, implement your post-launch plan.

1. Once you are in the post-launch phase, have all the stakeholders go over the built-up documentation (minutes, git logs, documentation, style guides, READMEs, help files, timesheets, papers written, etc.) and compile a “bible” for the project.

	* This should include take-aways that can be used in future projects.

	* Contribute relevant pieces to any department documents (process docs, pattern libraries, etc.)

	* Make sure to document, in as much detail as possible, any failures or barriers.



### 3.1 Content steps

1. Develop or choose an existing style guide for content, *before* you actually start creating any of the content.[^26]

	* Making already-created content conform to your style guide is much more work than developing content with a style guide already in-place.

1. Information Architecture: create a plan for how your content will be structured, both at a high-level (e.g. site navigation), and a low-level (e.g. sections within documents/pages). Then, reduce the complexity of your Information Architecture by half.[^27][^28][^29][^30]

	* Content should be structured as simply as possible to help users find what they’re looking for.[^29][^30]

1. Create your content, in compliance with your style guide and Information Architecture, and keeping in mind your user personas. Then, delete half the content.[^31]

	* Your users usually have very specific goals when visiting a web site. Don’t clutter their experience, and don’t give them what they don’t need.[^23][^32][^31][^33]

1. Conduct usability testing on the content. Can users understand it and get the info they need?[^13]

	* Try to test with *real* users, and/or users that closely match each of your personas.[^9]

1. Revise the content based on the usability test feedback.

1. Update the project’s style guide with any content and IA details that weren’t previously accounted for.



### 3.2 Design steps

1. Create basic, works-for-everybody design templates that account for all the content and work well for all users, regardless of:

	* Printed vs. on-screen[^34][^35][^36]

	* Device, e.g. phone, tablet, desktop, laptop, etc.[^6]

	* Browser, e.g. modern IE, obsolete IE, Firefox, Chrome, Safari, Opera, etc.

	* Connection speed, e.g. high-speed/broadband, LTE, 3G, 2G, etc.

	* Ability, e.g. using a mouse, using a keyboard, without assistive technology, with a screenreader, etc.

	* Javascript and plugin support/availability[^37][^38]

	* Language, e.g. with machine-translation support

	Specifically, this fallback should work in the “Default Delivery Context”, which [The W3C Recommendation on Mobile Web Best Practices](http://www.w3.org/TR/mobile-bp/) defines as:

	* Usable Screen Width: 120 pixels, minimum.

	* Markup Language Support: XHTML Basic 1.1 delivered with content type application/xhtml+xml.

	* Character Encoding: UTF-8

	* Image Format Support: JPEG, GIF89a

	* Maximum Total Page Weight: 20 kilobytes

	* Colors: 256 Colors, minimum.

	* Style Sheet Support: CSS Level 1. In addition, CSS Level 2 @media rule together with the handheld and all media types.

	* HTTP: HTTP/1.0 or more recent [HTTP1.1].

	* Script: No support for client side scripting.

	This isn’t the “showcase” design, this is the fallback, lowest-common-denominator design.[^12]

1. Perform the **Design validation substeps**

1. Create “showcase” design templates for how everything should look in a mobile browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.[^39]

1. Perform the **Design validation substeps**

1. Create “showcase” design templates for how everything should look in a desktop browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.

1. Perform the **Design validation substeps**

1. Design “showcase” design templates for how everything should look when printed in the best possible case: modern device, modern browser, available JavaScript.[^34][^35][^36]

1. Perform the **Design validation substeps**

1. Document in detail how each element of each template progressively enhances from the fallback design to the mobile design to the desktop design. Make sure there is complete content- and functionality-parity between all three designs, and that it’s clear how each element adjusts in changing circumstances.

	* This process will probably require creating a few extra alternate design templates at different “breakpoints”, i.e. an adjustment when something breaks or looks bad at a certain size or when a certain feature is/isn’t supported. Always create these alternate templates based on breakpoints and not specific devices.

1. Update the style guide with any design information not previously entered.


#### 3.2.1 Design validation substeps

1. Cut the number of templates in half, and for each remaining template, cut the number of user interace elements in half[^40]. Double the font size, and double the white space.[^41][^42]

1. Conduct usability testing on this design, using paper prototypes.[^12][^23][^43]

	* Try to test with *real* users, and/or users that closely match each of your personas.[^9]

	* Test both previous and new testers if possible.

1. Revise the design based on usability feedback.

1. Based on this design, update the project’s style guide with relevant design details, e.g. typefaces, colours, grid definitions, sizes, interactions, etc.



### 3.3 Development steps

These steps focus on front-end development. Back-end development may need to take place in parallel with these steps.

1. Develop HTML and CSS versions of each fallback template, using real content.

	* This should involve *no JavaScript*, but may involve creating some backend functionality.

	* These need to be fully functional. If something doesn’t or can’t work at this stage, go back to whatever previous step created the barrier, fix it, and redo everything from that point forward.

1. Perform the **Development validation substeps**

1. Progressively enhance your design to get to the showcase mobile design, and any breakpoints between it and the fallback.

	* Always use real content.

	* Use feature checking and appropriate fallbacks.

	* Remember that not every user needs the showcase design; that’s why the fallback and breakpoint templates are there, and why there are feature fallbacks. Everybody will get a good experience *appropriate* to their browsing context.

1. Perform the **Development validation substeps**

1. Progressively enhance your design to get to the showcase desktop design, and any remaining breakpoints.

	* Always use real content.

	* Use feature checking and appropriate fallbacks.

	* Remember that not every user needs the showcase design; that’s why the fallback and breakpoint templates are there, and why there are feature fallbacks. Everybody will get a good experience *appropriate* to their browsing context.

1. Perform the **Development validation substeps**

1. Perform Search Engine Optimization by:

	* Ensuring proper meta-information and titles have been used for all pages, including the use of structured data (e.g. [schema.org](http://schema.org/) or [schema-creator.org](http://schema-creator.org/)).[^44]

	* Creating a sitemap.

	* Using search engine submission tools, such as [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en).

	Note that the best ways to achieve high-ranking search results are to have high quality content; semantic, validated code; and high performance. All of these should have been handled before this point in the process.

1. Create a “help” section.[^45][^46]

	* If any parts of your “help” section get very complex, consider simplifying the design/functionality to require less explanation. This may require returning to an earlier step.

1. Do a code review and refactor where appropriate.

1. Perform the **Testing** steps.


#### 3.3.1 Development validation substeps

1. Perform the **Testing** steps.

1. Conduct usability testing on these templates, using real browsers/devices *of the users’ choice*.

	* Conduct separate usability sessions geared at how it looks and how it works.

	* Try to test with *real* users, and/or users that closely match each of your personas.[^9]

	* Test both previous and new testers if possible.

1. Revise based on usability testing.

1. Perform the **Testing** steps.

1. Update the style guide with any new information that hasn’t previously been included.



### 3.4 Testing steps

1. Test the templates in as many browsers as possible[^24], on as many devices as possible, with as many assistive technologies as possible. Make sure everything functions as it should and looks ok (though not necessarily pixel perfect!).

	* Prioritize testing with real browsers and devices, and only use emulators/simulators if the real thing is unavailable.[^47]

	* While testing, take screenshots of every template in every browser/device combination. Save these.

	* Make sure multiple team members test. Fresh eyes are crucial.

1. Fix any problems that arose during browser testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated markup[^48] and accessibility[^4] validation.

1. Fix any problems that arose during validity testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated performance testing[^49][^50][^51][^52][^53].

1. Fix any problems that arose during performance testing.

	* Good performance should take priority over good aesthetics. Ideally you can achieve both, but in cases of conflict, optimize for performance.[^54]

	* If there were problems to fix, return to step 1.




## 4. Resources

1. Many of the references in this document cite [usability.gov](http://usability.gov), a secondary source for evidence-based web development. The [usability.gov](http://usability.gov) pages cited here contain examples and references to primary research sources, as well as indicators of relative importance and strength of evidence.

	[usability.gov](http://usability.gov) also contains many guidelines, templates, and methods not covered here, that may be useful to review as part of your research steps. Note, though, that some of their recommendations are out of date and are no longer considered best practice, especially:

	* [Chapter 4: Hardware and Software](http://guidelines.usability.gov/chapters/4/introduction)

	* [5:7 Limit Homepage Length](http://guidelines.usability.gov/guidelines/52)

	* [6:13 Use Frames when Functions Must Remain Accessible](http://guidelines.usability.gov/guidelines/66)[^55]

	* [13:19 Place Cursor in First Data Entry Field](http://guidelines.usability.gov/guidelines/144)

	* [14:7 Limit Large Images Above the Fold](http://guidelines.usability.gov/guidelines/156)

1. Another oft-cited and useful resource is [The W3C Recommendation on Mobile Web Best Practices](http://www.w3.org/TR/mobile-bp/), an evidence-based guideline that also includes references to other secondary and primary sources.

1. The [A Book Apart](http://www.abookapart.com/) and [Five Simple Steps](http://www.fivesimplesteps.com/) series consist of a number of short, focused, and very high quality books that cover all aspects of building projects for the web. Current and upcoming titles cover:

	* Research:

		* [Just Enough Research](http://www.abookapart.com/products/just-enough-research) by Erika Hall

		* [International User Research](http://www.fivesimplesteps.com/products/international-user-research) by Chui Chui Tan

		* [Interviewing for Research](http://www.fivesimplesteps.com/products/interviewing-for-research) by Andrew Travers

	* Content:

		* [The Elements of Content Strategy](http://www.abookapart.com/products/the-elements-of-content-strategy) by Erin Kissane

		* [Content Strategy for Mobile](http://www.abookapart.com/products/content-strategy-for-mobile) by Karen McGrane

		* [The Craft of Words. Part One: Macrocopy](http://www.fivesimplesteps.com/products/the-craft-of-words) by The Standardistas

		* [The Craft of Words. Part Two: Microcopy](http://www.fivesimplesteps.com/products/the-craft-of-words) by The Standardistas

	* Design:

		* [Designing for Emotion](http://www.abookapart.com/products/designing-for-emotion) by Aarron Walter

		* [On Web Typography](http://www.abookapart.com/products/on-web-typography) by Jason Santa Maria

		* [Combining Typefaces](http://www.fivesimplesteps.com/products/combining-typefaces) by Tim Brown

		* [Psychology for Designers](http://www.fivesimplesteps.com/products/psychology-for-designers) by Joe Leech

		* [Usability of Web Photos](http://www.fivesimplesteps.com/products/usability-of-web-photos) by James Chudley

		* [Designing for the Web](http://www.fivesimplesteps.com/products/a-practical-guide-to-designing-for-the-web) by Mark Boulton

		* [Designing the Invisible](http://www.fivesimplesteps.com/products/a-practical-guide-to-designing-the-invisible) by Robert Mills

		* [The Icon Handbook](http://www.fivesimplesteps.com/products/the-icon-handbook) by Jon Hicks

	* Development:

		* [HTML5 for Web Designers](http://www.abookapart.com/products/html5-for-web-designers) by Jeremy Keith

		* [CSS3 for Web Designers](http://www.abookapart.com/products/css3-for-web-designers) by Dan Cederholm

		* [Responsive Web Design](http://www.abookapart.com/products/responsive-web-design) by Ethan Marcotte

		* [Mobile First](http://www.abookapart.com/products/mobile-first) by Luke Wroblewski

		* [SASS for Web Designers](http://www.abookapart.com/products/sass-for-web-designers) by Dan Cederholm

		* [Responsible Responsive Design](http://www.abookapart.com/products/responsible-responsive-design) by Scott Jehl

		* [Creating Symbol Fonts](http://www.fivesimplesteps.com/products/creating-symbol-fonts) by Brian Suda

		* [CSS Animations](http://www.fivesimplesteps.com/products/css-animations) by Val Head

		* [CSS3 Layout Modules](http://www.fivesimplesteps.com/products/css3-layout-modules) by Rachel Andrew

		* [HTML Email](http://www.fivesimplesteps.com/products/html-email) by Andy Croll

		* [Web Performance](http://www.fivesimplesteps.com/products/web-performance) by Andy Davies

		* [Hardboiled Web Design](http://www.fivesimplesteps.com/products/hardboiled-web-design) by Andy Clarke

	* Accessibility:

		* [Colour Accessibility: A Pocket Guide](http://www.fivesimplesteps.com/products/colour-accessibility) by Geri Coady

	* Business and project management:

		* [Design is a Job](http://www.abookapart.com/products/design-is-a-job) by Mike Monteiro

		* [You’re My Favorite Client](http://www.abookapart.com/products/youre-my-favorite-client) by Mike Monteiro)

		* [Managing Web Projects](http://www.fivesimplesteps.com/products/a-practical-guide-to-managing-web-projects) by Breandán Knowlton

		* [Web App Success](http://www.fivesimplesteps.com/products/web-app-success) by Dan Zambonini




### 4.1 Automated testing resources

These can be run manually, but since they are automated tests, they’d ideally be integrated into build and/or deployment steps.

#### 4.1.1 HTML and other markup

1. [W3C Markup Validation Service](http://validator.w3.org/) for HTML validity

	* [grunt-w3c-validation](https://www.npmjs.org/package/grunt-w3c-validation)

1. [W3C Feed Validation Service](http://validator.w3.org/feed/) for RSS and Atom feed validity

	* No grunt package available

1. [W3C RDF Validator](http://www.w3.org/RDF/Validator/) for RDF/XML validity

	* No grunt package available

#### 4.1.2 CSS

1. [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/) for CSS validity

	* [grunt-w3c-validation](https://www.npmjs.org/package/grunt-w3c-validation)

1. [CSS Lint](http://csslint.net/) for CSS validity and recommended style

	* [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)

#### 4.1.3 JavaScript

1. [JSLint](http://www.jslint.com/) for JS validity and recommended style

	* [grunt-jslint](https://www.npmjs.org/package/grunt-jslint)

1. [JSHint](http://jshint.com/) for JS validity and recommended style

	* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

1. [JSONLint](http://jsonlint.com/) for JSON

	* [grunt-jsonlint](https://www.npmjs.org/package/grunt-jsonlint)

#### 4.1.4 PHP

1. [PHPLint on-line](http://www.icosaedro.it/phplint/phplint-on-line.html) for PHP

	* [grunt-phplint](https://www.npmjs.org/package/grunt-phplint)

#### 4.1.5 Content and Semantics

1. [W3C Spell Checker](http://www.w3.org/2002/01/spellchecker) for English/French spelling

	* [grunt-spell](https://github.com/shama/grunt-spell) (Similar, but with a different engine. Supports en, fr, de, pt, es. Not great.)

1. [W3C Semantic Data Extrator](http://www.w3.org/2003/12/semantic-extractor.html) for semantic information

	* No grunt package available

1. [Google Webmaster Tools Structured Data Testing Tool](http://www.google.com/webmasters/tools/richsnippets) for rich snippets

	* No grunt package available

1. [W3C Internationalization Checker](http://validator.w3.org/i18n-checker/) for internationalization- and translation-readiness

	* No grunt package available

#### 4.1.6 Links and URLs

1. [W3C Link Checker](http://validator.w3.org/checklink) for broken links

	* [grunt-link-checker](https://www.npmjs.org/package/grunt-link-checker) (Similar, but with a different engine. Needs a server.)

1. [no-www.org](http://no-www.org/verify.php) to verify that `www` is stripped from the URL (expected results: ‘Class B’)

	* No grunt package available

#### 4.1.7 Compatibility

1. [W3C mobileOK Checker](http://validator.w3.org/mobile/) for mobile compatibility

	* No grunt package available

1. [Microsoft modern.IE Site Scan](https://www.modern.ie/en-us/report) for compatibility-related coding issues

	* [modern.IE-static-code-scan](https://github.com/InternetExplorer/modern.IE-static-code-scan/) (A grunt/nodeunit suite.)

1. [Microsoft modern.IE Compatibility Report](https://www.modern.ie/en-us/compat-scan) for compatibility-related coding issues

	* [modern.IE-static-code-scan](https://github.com/InternetExplorer/modern.IE-static-code-scan/) (A grunt/nodeunit suite.)

#### 4.1.8 Accessibility

1. [AChecker](http://www.atutor.ca/achecker/) for general accessibility

	* [wcag-validator](https://www.npmjs.org/package/wcag-validator) (Node package, not grunt. Requires web service ID.)

1. [WAVE](http://wave.webaim.org/) for general accessibility

	* [grunt-accessibility](https://www.npmjs.org/package/grunt-accessibility) (Similar, uses a different engine.)

1. [checkmycolours](http://www.checkmycolours.com/) for color contrast

	* No grunt package available

#### 4.1.9 Security

1. [ASafaWeb](https://asafaweb.com/) for security (specifically for ASP.NET pages, but provides general tests as well)

	* No grunt package available

1. [Qualys SSL Labs SSL Server Test](https://www.ssllabs.com/ssltest/) for SSL/TLS security certificates

	* No grunt package available

1. [openresolver](http://openresolver.com/) for recursive DNS request vulnerabilities

	* No grunt package available

1. [cookiechecker](http://www.cookie-checker.com/) to check cookies and validate against EU cookie law

	* No grunt package available

#### 4.1.10 Performance

1. [Google PageSpeed](https://developers.google.com/speed/pagespeed/) for performance and usability

	* [grunt-pagespeed](https://www.npmjs.org/package/grunt-pagespeed)

1. [Yahoo YSlow](http://yslow.org/) for performance

	* [grunt-yslow](https://www.npmjs.org/package/grunt-yslow)

1. [WebPageTest](http://www.webpagetest.org/) for performance

	* [grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget)

1. [REDbot](https://redbot.org/) for HTTP headers

	* No grunt package available

1. [Sizer Soze](http://sizersoze.org/) for responsive images

	* No grunt package available

#### 4.1.11 Social

1. [Twitter Card Validator](https://dev.twitter.com/docs/cards/validation/validator) to preview Twitter link cards

	* No grunt package available





## 5. Glossary

Unless otherwise noted, all definitions are from [Wikipedia](http://en.wikipedia.org/wiki/Main_Page) or [Wiktionary](https://www.wiktionary.org/).

assistive technology
:	“Assistive technology is an umbrella term that includes assistive, adaptive, and rehabilitative devices for people with disabilities and also includes the process used in selecting, locating, and using them. Assistive technology promotes greater independence by enabling people to perform tasks that they were formerly unable to accomplish, or had great difficulty accomplishing, by providing enhancements to, or changing methods of interacting with, the technology needed to accomplish such tasks.” —[Wikipedia](http://en.wikipedia.org/wiki/Assistive_technology)

ASP.NET
:	“ASP.NET is an open source[1] server-side Web application framework designed for Web development to produce dynamic Web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services.” —[Wikipedia](http://en.wikipedia.org/wiki/Asp.net)

	We do not use ASP.NET in our department.

Atom
:	“The name Atom applies to a pair of related Web standards. The Atom Syndication Format is an XML language used for web feeds, while the Atom Publishing Protocol (AtomPub or APP) is a simple HTTP-based protocol for creating and updating web resources.

	“Web feeds allow software programs to check for updates published on a website. To provide a web feed, the site owner may use specialized software (such as a content management system) that publishes a list (or "feed") of recent articles or content in a standardized, machine-readable format. The feed can then be downloaded by programs that use it, like websites that syndicate content from the feed, or by feed reader programs that allow Internet users to subscribe to feeds and view their content.

	“A feed contains entries, which may be headlines, full-text articles, excerpts, summaries, and/or links to content on a website, along with various metadata.” —[Wikipedia](http://en.wikipedia.org/wiki/Atom_(standard))

back-end development
:	“In computer science, the front end is responsible for collecting input in various forms from the user and processing it to conform to a specification the back end can use. The front end is an interface between the user and the back end. The front and back ends may be distributed amongst one or more systems.

	“In software architecture there may be many layers between the hardware and end user. Each can be spoken of as having a front end and a back end. The front is an abstraction, simplifying the underlying component by providing a user-friendly interface.

	“In software design, for example, the model-view-controller architecture, provides front and back ends for the database, the user, and the data processing components. The separation of software systems into front and back ends simplifies development and separates maintenance. A rule of thumb is that the front (or ‘client’) side is any component manipulated by the user. The server-side (or ‘back end’) code resides on the server. The confusion arises when one must make front-end edits to server-side files. Most HTML designers, for instance, don’t need to be on the server when they are developing the HTML; conversely, the server-side engineers are, by definition, never on anything but a server. It takes both to ultimately make a functioning, interactive website.” —[Wikipedia](http://en.wikipedia.org/wiki/Front_and_back_ends)

Bikeshedding
:	“Parkinson’s law of triviality, also known as bikeshedding, bike-shed effect, or the bicycle-shed example, is C. Northcote Parkinson’s 1957 argument that organizations give disproportionate weight to trivial issues. Parkinson observed and illustrated that a committee whose job is to approve plans for a nuclear power plant spended the majority of its time with pointless discussions on relatively trivial and unimportant but easy-to-grasp issues, such as what materials to use for the staff bike-shed, while neglecting the less-trivial proposed design of the nuclear power plant itself, which is far more important but also far more difficult and complex task to criticize constructively.

	“The law has been applied to software development and other activities, and the term ‘bikeshedding’ was coined as a metaphor to illuminate Parkinson’s Law of Triviality and was popularized in the Berkeley Software Distribution community by Poul Henning-Kamp and has spread from there to the software industry at large.” —[Wikipedia](http://en.wikipedia.org/wiki/Bikeshedding)

character encoding
:	“In computing, a character encoding is used to represent a repertoire of characters by some kind of an encoding system. Depending on the abstraction level and context, corresponding code points and the resulting code space may be regarded as bit patterns, octets, natural numbers, electrical pulses, etc. A character encoding is used in both computation, data storage, and transmission of textual data.” —[Wikipedia](http://en.wikipedia.org/wiki/Character_encoding)

client-side
:	“Client-side refers to operations that are performed by the client in a client–server relationship in a computer network.

	“Typically, a client is a computer application, such as a web browser, that runs on a user's local computer or workstation and connects to a server as necessary. Operations may be performed client-side because they require access to information or functionality that is available on the client but not on the server, because the user needs to observe them or provide input, or because the server lacks the processing power to perform the operations in a timely manner for all of the clients it serves. Additionally, if operations can be performed by the client, without sending data over the network, they may take less time, use less bandwidth, and incur a lesser security risk.

	“When the server serves data in a commonly used manner, for example according to the HTTP or FTP protocols, users may have their choice of a number of client programs (most modern web browsers can request and receive data using both of those protocols). In the case of more specialized applications, programmers may write their own server, client, and communications protocol, that can only be used with one another.” —[Wikipedia](http://en.wikipedia.org/wiki/Client_side)

CONTRIBUTORS.MD
:	A Markdown file included with many GitHub repositories, that lists contributors to a project and/or instructions for how to contribute.

CSS
:	“Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to style web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. CSS is a cornerstone specification of the web and almost all web pages use CSS style sheets to describe their presentation.

	“CSS is designed primarily to enable the separation of document content from document presentation, including elements such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple pages to share formatting, and reduce complexity and repetition in the structural content (such as by allowing for tableless web design). It obviates those portions of markup that would specify presentation by instead providing that information in a separate file. For each relevant HTML element (identified by tags), it provides a list of formatting instructions. For example, it might say (in CSS syntax), ‘All heading 1 elements should be bold.’ Therefore, no formatting markup such as bold tags (`<b></b>`)is needed within the content; what is needed is simply semantic markup saying, ‘this text is a level 1 heading.’” —[Wikipedia](http://en.wikipedia.org/wiki/CSS)

dogfooding
:	“Eating your own dog food, also called dogfooding, is a slang term used to reference a scenario in which a company uses its own product to validate the quality and capabilities of the product.” —[Wikipedia](http://en.wikipedia.org/wiki/Dogfooding)

DNS
:	“The Domain Name System (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Most prominently, it translates easily memorized domain names to the numerical IP addresses needed for the purpose of locating computer services and devices worldwide. The Domain Name System is an essential component of the functionality of the Internet.

	“An often-used analogy to explain the Domain Name System is that it serves as the phone book for the Internet by translating human-friendly computer hostnames into IP addresses. For example, the domain name www.example.com translates to the addresses 93.184.216.119 (IPv4) and 2606:2800:220:6d:26bf:1447:1097:aa7 (IPv6). Unlike a phone book, the DNS can be quickly updated, allowing a service’s location on the network to change without affecting the end users, who continue to use the same host name. Users take advantage of this when they use meaningful Uniform Resource Locators (URLs), and e-mail addresses without having to know how the computer actually locates the services.” —[Wikipedia](http://en.wikipedia.org/wiki/Dns)

ems
:	“An em is a unit in the field of typography, equal to the currently specified point size. For example, one em in a 16-point typeface is 16 points. Therefore, this unit is the same for all typefaces at a given point size.…

	“In Cascading Style Sheets, the ‘em’ unit is the height of the font in nominal points or inches. The actual, physical height of any given portion of the font depends on the user-defined dpi setting, current element font-size, and the particular font being used.” —[Wikipedia](http://en.wikipedia.org/wiki/Em_(typography))

front-end development
:	“In computer science, the front end is responsible for collecting input in various forms from the user and processing it to conform to a specification the back end can use. The front end is an interface between the user and the back end. The front and back ends may be distributed amongst one or more systems.

	“In software architecture there may be many layers between the hardware and end user. Each can be spoken of as having a front end and a back end. The front is an abstraction, simplifying the underlying component by providing a user-friendly interface.

	“In software design, for example, the model-view-controller architecture, provides front and back ends for the database, the user, and the data processing components. The separation of software systems into front and back ends simplifies development and separates maintenance. A rule of thumb is that the front (or ‘client’) side is any component manipulated by the user. The server-side (or ‘back end’) code resides on the server. The confusion arises when one must make front-end edits to server-side files. Most HTML designers, for instance, don’t need to be on the server when they are developing the HTML; conversely, the server-side engineers are, by definition, never on anything but a server. It takes both to ultimately make a functioning, interactive website.” —[Wikipedia](http://en.wikipedia.org/wiki/Front_and_back_ends)

git
:	“Git is a distributed revision control and source code management (SCM) system with an emphasis on speed, data integrity, and support for distributed, non-linear workflows. Git was initially designed and developed by Linus Torvalds for Linux kernel development in 2005, and has since become the most widely adopted version control system for software development.

	“As with most other distributed revision control systems, and unlike most client–server systems, every Git working directory is a full-fledged repository with complete history and full version-tracking capabilities, independent of network access or a central server.” —[Wikipedia](http://en.wikipedia.org/wiki/Git_(software))

	For more on git, see the companion document, *Working with git and GitHub* (forthcoming).

GitHub
:	“GitHub is a Git repository web-based hosting service which offers all of the functionality of Git as well as adding many of its own features. Unlike Git, which is strictly a command-line tool, Github provides a web-based graphical interface and desktop as well as mobile integration. It also provides access control and several collaboration features such as wikis, task management, and bug tracking and feature requests for every project.

	“GitHub offers both paid plans for private repositories, and free accounts, which are usually used to host open source software projects. As of 2014, Github reports having over 3.4 million users, making it the largest code host in the world.

	“GitHub has become such a staple among the open-source development community that many developers have begun considering it a replacement for a conventional resume and some employers require applicants to provide a link to and have an active contributing GitHub account in order to qualify for a job.” —[Wikipedia](http://en.wikipedia.org/wiki/Github)

	For more on GitHub, see the companion document, *Working with git and GitHub* (forthcoming).

grid
:	“In graphic design, a grid is a structure (usually two-dimensional) made up of a series of intersecting straight (vertical, horizontal, and angular) or curved guide lines used to structure content. The grid serves as an armature on which a designer can organize graphic elements (images, glyphs, paragraphs) in a rational, easy to absorb manner. A grid can be used to organize graphic elements in relation to a page, in relation to other graphic elements on the page, or relation to other parts of the same graphic element or shape.…

	“While grid systems have seen significant use in print media, interest from web developers has only recently seen a resurgence. Website design frameworks producing HTML and CSS had existed for a while before newer frameworks popularised the use of grid-based layouts. Some grid systems specify fixed-width elements with pixels, and some are ‘fluid’, meaning that they call for page element sizing to be in relative units like percentages, rather than absolute units like pixels or points.” —[Wikipedia](http://en.wikipedia.org/wiki/Grid_(graphic_design))

Grunt
:	“Built on top of Node.js, Grunt is a task-based command-line tool that speeds up workflows by reducing the effort required to prepare assets for production. It does this by wrapping up jobs into tasks that are compiled automatically as you go along. Basically, you can use Grunt on most tasks that you consider to be grunt work and would normally have to manually configure and run yourself.…

	“What kind of tasks? Well, the list is exhaustive. Suffice it to say, Grunt can handle most things you throw at it, from minifying to concatenating JavaScript. It can also be used for a range of tasks unrelated to JavaScript, such as compiling CSS from LESS and Sass.” —[Mike Cunsolo, Smashing Magazine](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)

hex values
:	“A hex triplet is a six-digit, three-byte hexadecimal number used in HTML, CSS, SVG, and other computing applications, to represent colors. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation), or 0 to 255 in decimal notation. This represents the least (0) to the most (255) intensity of each of the color components. Thus web colors specify colors in the Truecolor (24-bit RGB) color scheme. The hex triplet is formed by concatenating three bytes in hexadecimal notation, in the following order:

	* Byte 1: red value (color type red)
	* Byte 2: green value (color type green)
	* Byte 3: blue value (color type blue)

	“For example, consider the color where the red/green/blue values are decimal numbers: red=36, green=104, blue=160 (a greyish-blue color). The decimal numbers 36, 104 and 160 are equivalent to the hexadecimal numbers 24, 68 and A0 respectively. The hex triplet is obtained by concatenating the 6 hexadecimal digits together, 2468A0 in this example.

	“Note that if any one of the three color values is less than 16 (decimal) or 10 (hex), it must be represented with a leading zero so that the triplet always has exactly six digits. For example, the decimal triplet 4, 8, 16 would be represented by the hex digits 04, 08, 10, forming the hex triplet 040810.

	“The number of colors that can be represented by this system is 2563 or 224 = 16,777,216.” —[Wikipedia](http://en.wikipedia.org/wiki/Hex_value#Hex_triplet)

HTML
:	“HTML or HyperText Markup Language is the standard markup language used to create web pages.

	“HTML is written in the form of HTML elements consisting of tags enclosed in angle brackets (like `<html>`). HTML tags most commonly come in pairs like `<h1>` and `</h1>`, although some tags represent empty elements and so are unpaired, for example `<img>`. The first tag in a pair is the start tag, and the second tag is the end tag (they are also called opening tags and closing tags).

	“A web browser can read HTML files and compose them into visible or audible web pages. The browser does not display the HTML tags, but uses them to interpret the content of the page. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language rather than a programming language.

	“HTML elements form the building blocks of all websites. HTML allows images and objects to be embedded and can be used to create interactive forms. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. It can embed scripts written in languages such as JavaScript which affect the behavior of HTML web pages.” —[Wikipedia](http://en.wikipedia.org/wiki/Html)

HTTP
:	“The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web.

	“Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.” —[Wikipedia](http://en.wikipedia.org/wiki/Http)

HTTP header
:	“HTTP header fields are components of the message header of requests and responses in the Hypertext Transfer Protocol (HTTP). They define the operating parameters of an HTTP transaction.” —[Wikipedia](http://en.wikipedia.org/wiki/HTTP_header)

humans.txt file
:	“…an initiative for knowing the people behind a website. It’s a TXT file that contains information about the different people who have contributed to building the website.…

	“it’s not intrusive with the code. More often than not, the owners of the site don’t like the authors signing it; they claim that doing so may make the site less efficient. By adding a txt file, you can prove your authorship (not your property) in an external, fast, easy and accessible way.” —[humanstxt.org](http://humanstxt.org/)

Information Architecture
:	“Information architecture (IA) is the structural design of shared information environments; the art and science of organizing and labeling websites, intranets, online communities and software to support usability and findability; and an emerging community of practice focused on bringing principles of design and architecture to the digital landscape. Typically, it involves a model or concept of information which is used and applied to activities that require explicit details of complex information systems. These activities include library systems and database development.…

	“Information architecture has somewhat different meanings in different branches of IS or IT:

	1. The structural design of shared information environments.
	2. The art and science of organizing and labeling web sites, intranets, online communities, and software to support findability and usability.
	3. An emerging community of practice focused on bringing principles of design and architecture to the digital landscape.
	4. The combination of organization, labeling, search and navigation systems within websites and intranets.” —[Wikipedia](http://en.wikipedia.org/wiki/Information_architecture)

internationalization
:	“In computing, internationalization and localization (other correct spellings are internationalisation and localisation) are means of adapting computer software to different languages, regional differences and technical requirements of a target market. Internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once, or as an integral part of ongoing development).” —[Wikipedia](http://en.wikipedia.org/wiki/Internationalization_and_localization)

JavaScript
:	“JavaScript (JS) is a dynamic computer programming language. It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is displayed. It is also being used in server-side network programming (with Node.js), game development and the creation of desktop and mobile applications.…

	“JavaScript was formalized in the ECMAScript language standard and is primarily used as part of a web browser (client-side JavaScript). This enables programmatic access to objects within a host environment.” —[Wikipedia](http://en.wikipedia.org/wiki/Javascript)

JSON
:	“JSON (not pronounced like ‘J-son’, but like the common name ‘Jason’), or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML.

	“Although originally derived from the JavaScript scripting language, JSON is a language-independent data format, and code for parsing and generating JSON data is readily available in a large variety of programming languages.” —[Wikipedia](http://en.wikipedia.org/wiki/Json)

lint
:	“In computer programming, lint was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.

	“Lint as a term can also refer more broadly to syntactic discrepancies in general, especially in interpreted languages like JavaScript and Python. For example, modern lint checkers are often used to find code that doesn't correspond to certain style guidelines. They can also be used as simple debuggers for common errors, or hard to find errors such as heisenbugs.

	“This technique is formally referred to as static code analysis.” —[Wikipedia](http://en.wikipedia.org/wiki/Lint_(software))

Markdown
:	“Markdown is a plain text formatting syntax designed so that it optionally can be converted to HTML using a tool by the same name. Markdown is popularly used to format readme files, for writing messages in online discussion forums or in text editors for the quick creation of rich text documents.” —[Wikipedia](http://en.wikipedia.org/wiki/Markdown)

markup language
:	“A (document) markup language is a modern system for annotating a document in a way that is syntactically distinguishable from the text. The idea and terminology evolved from the ‘marking up’ of paper manuscripts, i.e., the revision instructions by editors, traditionally written with a blue pencil on authors' manuscripts. In digital media this ‘blue pencil instruction text’ was replaced by tags, that is, instructions are expressed directly by tags or ‘instruction text encapsulated by tags’.

	“Examples are typesetting instructions such as those found in troff, TeX and LaTeX, or structural markers such as XML tags. Markup instructs the software displaying the text to carry out appropriate actions, but is omitted from the version of the text that is displayed to users. Some markup languages, such as the widely used HTML, have pre-defined presentation semantics, meaning that their specification prescribes how the structured data are to be presented; others, such as XML, do not.

	“HyperText Markup Language (HTML), one of the document formats of the World Wide Web, is an instance of SGML (though, strictly, it does not comply with all the rules of SGML), and follows many of the markup conventions used in the publishing industry in the communication of printed work between authors, editors, and printers.” —[Wikipedia](http://en.wikipedia.org/wiki/Markup_language)

paywall
:	“A paywall is a system that prevents Internet users from accessing webpage content without a paid subscription. There are both ‘hard’ and ‘soft’ paywalls in use. ‘Hard’ paywalls allow minimal to no access to content without subscription, while ‘soft’ paywalls allow more flexibility in what users can view without subscribing, such as selective free content and/or a limited number of articles per month, or the sampling of several pages of a book or paragraphs of an article. Newspapers have been implementing paywalls on their websites to increase their revenue, which has been diminishing due to a decline in print subscriptions and advertising revenue.” —[Wikipedia](http://en.wikipedia.org/wiki/Paywall)

PHP
:	“PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. As of January 2013, PHP was installed on more than 240 million websites (39% of those sampled) and 2.1 million web servers.…

	“PHP code can be simply mixed with HTML code, or it can be used in combination with various templating engines and web frameworks. PHP code is usually processed by a PHP interpreter, which is usually implemented as a web server’s native module or a Common Gateway Interface (CGI) executable. After the PHP code is interpreted and executed, the web server sends resulting output to its client, usually in form of a part of the generated web page – for example, PHP code can generate a web page’s HTML code, an image, or some other data. PHP has also evolved to include a command-line interface (CLI) capability and can be used in standalone graphical applications.” —[Wikipedia](http://en.wikipedia.org/wiki/Php)

RDF
:	“The Resource Description Framework (RDF) is a family of World Wide Web Consortium (W3C) specifications originally designed as a metadata data model. It has come to be used as a general method for conceptual description or modeling of information that is implemented in web resources, using a variety of syntax notations and data serialization formats. It is also used in knowledge management applications.” —[Wikipedia](http://en.wikipedia.org/wiki/Resource_Description_Framework)

READMEs
:	“A readme (or read me) file contains information about other files in a directory or archive and is commonly distributed with computer software. Such a file is usually a text file called README.TXT, README.md, README.1ST, READ.ME, or simply README, although some Microsoft Windows software may occasionally include a README.WRI, README.RTF, or README.DOC. The name is chosen so that users unaware of the existence of this type of file would be drawn to read it. It is traditionally written in upper case so that on case-preserving environments using an ASCIIbetical ordering, the name will appear near the beginning of a directory listing (since upper-case letters sort before lower-case letters in ASCIIbetical ordering).” —[Wikipedia](http://en.wikipedia.org/wiki/Readme)

responsive web design
:	“Responsive web design (RWD) is a web design approach aimed at crafting sites to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from mobile phones to desktop computer monitors).

	“A site designed with RWD adapts the layout to the viewing environment by using fluid, proportion-based grids, flexible images, and CSS3 media queries, an extension of the @media rule.

	* The fluid grid concept calls for page element sizing to be in relative units like percentages, rather than absolute units like pixels or points.
	* Flexible images are also sized in relative units, so as to prevent them from displaying outside their containing element.
	* Media queries allow the page to use different CSS style rules based on characteristics of the device the site is being displayed on, most commonly the width of the browser.”

	” —[Wikipedia](http://en.wikipedia.org/wiki/Responsive_web_design)

rich snippets
:	“In 2010, Google specified three forms of structured metadata that their systems will use to find structured semantic content within webpages. Such information, when related to reviews, people profiles, business listings, and events will be used by Google to enhance the ‘snippet’, or short piece of quoted text that is shown when the page appears in search listings. Google specifies that that data may be given using microdata, microformats or RDFa. Microdata is specified inside `itemtype` and `itemprop` attributes added to existing HTML elements; microformat keywords are added inside class attributes as discussed above; and RDFa relies on `rel`, `typeof` and `property` attributes added to existing elements.” —[Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

RSS
:	“RSS (Rich Site Summary); originally RDF Site Summary; often dubbed Really Simple Syndication, uses a family of standard web feed formats to publish frequently updated information: blog entries, news headlines, audio, video. An RSS document (called ‘feed’, ‘web feed’, or ‘channel’) includes full or summarized text, and metadata, like publishing date and author's name.

	“RSS feeds enable publishers to syndicate data automatically. A standard XML file format ensures compatibility with many different machines/programs. RSS feeds also benefit users who want to receive timely updates from favourite websites or to aggregate data from many sites.

	“Subscribing to a website RSS removes the need for the user to manually check the web site for new content. Instead, their browser constantly monitors the site and informs the user of any updates. The browser can also be commanded to automatically download the new data for the user.” —[Wikipedia](http://en.wikipedia.org/wiki/Rss)

scripts
:	“A scripting language or script language is a programming language that supports scripts, programs written for a special run-time environment that can interpret (rather than compile) and automate the execution of tasks that could alternatively be executed one-by-one by a human operator. Environments that can be automated through scripting include software applications, web pages within a web browser, the shells of operating systems (OS), and embedded systems. A scripting language can be viewed as a domain-specific language for a particular environment; in the case of scripting an application, this is also known as an extension language. Scripting languages are also sometimes referred to as very high-level programming languages, as they operate at a high level of abstraction, or as control languages, particularly for job control languages on mainframes.” —[Wikipedia](http://en.wikipedia.org/wiki/Script_(computing))

search engine optimization
:	“Search engine optimization (SEO) is the process of affecting the visibility of a website or a web page in a search engine’s ‘natural’ or un-paid (‘organic’) search results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine's users. SEO may target different kinds of search, including image search, local search, video search, academic search, news search and industry-specific vertical search engines.

	“As an Internet marketing strategy, SEO considers how search engines work, what people search for, the actual search terms or keywords typed into search engines and which search engines are preferred by their targeted audience. Optimizing a website may involve editing its content, HTML and associated coding to both increase its relevance to specific keywords and to remove barriers to the indexing activities of search engines. Promoting a site to increase the number of backlinks, or inbound links, is another SEO tactic.” —[Wikipedia](http://en.wikipedia.org/wiki/Search_engine_optimization)

security certificate
:	“In cryptography, a public key certificate (also known as a digital certificate or identity certificate) is an electronic document used to prove ownership of a public key. The certificate includes information about the key, information about its owner's identity, and the digital signature of an entity that has verified the certificate’s contents are correct. If the signature is valid, and the person examining the certificate trusts the signer, then they know they can use that key to communicate with its owner.

	“In a typical public-key infrastructure (PKI) scheme, the signer is a certificate authority (CA), usually a company such as VeriSign which charges customers to issue certificates for them. In a web of trust scheme, the signer is either the key’s owner (a self-signed certificate) or other users (‘endorsements’) who the person examining the certificate might know and trust.

	Certificates are an important component of Transport Layer Security (TLS, sometimes called by its older name SSL), where they prevent an attacker from impersonating a secure website or other server. They are also used in other important applications, such as email encryption and code signing.” —[Wikipedia](http://en.wikipedia.org/wiki/Public_key_certificate)

semantic code or semantic HTML
:	“Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look. Semantic HTML is processed by regular web browsers as well as by many other user agents. CSS is used to suggest its presentation to human users.

	“As an example, recent HTML standards discourage use of the tag `<i>` (italic, a typeface) in preference of more accurate tags such as `<em>` (emphasis); the CSS stylesheet should then specify whether emphasis is denoted by an italic font, a bold font, underlining, slower or louder audible speech etc. This is because italics are used for purposes other than emphasis, such as citing a source…” —[Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

server-side
:	“Server-side (commonly referred to as SS) refers to operations that are performed by the server in a client–server relationship in computer networking.

	“Typically, a server is a computer program, such as a web server, that runs on a remote server, reachable from a user's local computer or workstation. Operations may be performed server-side because they require access to information or functionality that is not available on the client, or require typical behavior that is unreliable when it is done client-side.

	“Server-side operations also include processing and storage of data from a client to a server, which can be viewed by a group of clients.…

	“Examples of server-side processing include the creation & adaptation of a database using MySQL.” —[Wikipedia](https://en.wikipedia.org/wiki/Server-side)

sitemap
:	“A site map (or sitemap) is a list of pages of a web site accessible to crawlers or users. It can be either a document in any form used as a planning tool for Web design, or a Web page that lists the pages on a Web site, typically organized in hierarchical fashion.…

	“There are two popular versions of a site map. An XML Sitemap is a structured format that a user doesn’t need to see, but it tells the search engine about the pages in a site, their relative importance to each other, and how often they are updated. HTML sitemaps are designed for the user to help them find content on the page, and don’t need to include each and every subpage. This helps visitors and search engine bots find pages on the site.” —[Wikipedia](https://en.wikipedia.org/wiki/Sitemap)

stakeholders
:	“Project stakeholders are entities that have an interest in a given project. These stakeholders may be inside or outside an organization which:

	1. sponsor a project, or
	2. have an interest or a gain upon a successful completion of a project;
	3. may have a positive or negative influence in the project completion.

	“Examples of project stakeholders include the customer, the user group, the project manager, the development team, the testers, etc.” —[Wikipedia](https://en.wikipedia.org/wiki/Sitemap)

typeface
:	“In typography, a typeface (also known as font family) is a set of one or more fonts each composed of glyphs that share common design features. Each font of a typeface has a specific weight, style, condensation, width, slant, italicization, ornamentation, and designer or foundry (and formerly size, in metal fonts). For example, ‘ITC Garamond Bold Condensed Italic’ is a different font from ‘ITC Garamond Condensed Italic’ and ‘ITC Garamond Bold Condensed,’ but all are fonts within the same typeface, ‘ITC Garamond.’ However, ITC Garamond is a different typeface than ‘Adobe Garamond’ or ‘Monotype Garamond.’ There are thousands of different typefaces in existence, with new ones being developed constantly.” —[Wikipedia](https://en.wikipedia.org/wiki/Typeface)

version control software
:	“Revision control, also known as version control and source control (and an aspect of software configuration management), is the management of changes to documents, computer programs, large web sites, and other collections of information. Changes are usually identified by a number or letter code, termed the ‘revision number’, ‘revision level’, or simply ‘revision’. For example, an initial set of files is ‘revision 1’. When the first change is made, the resulting set is ‘revision 2’, and so on. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged.

	“The need for a logical way to organize and control revisions has existed for almost as long as writing has existed, but revision control became much more important, and complicated, when the era of computing began. The numbering of book editions and of specification revisions are examples that date back to the print-only era. Today, the most capable (as well as complex) revision control systems are those used in software development, where a team of people may change the same files.

	“Version control systems (VCS) most commonly run as stand-alone applications, but revision control is also embedded in various types of software such as word processors and spreadsheets, e.g., Google Docs and Sheets and in various content management systems, e.g., Wikipedia’s Page history. Revision control allows for the ability to revert a document to a previous revision, which is critical for allowing editors to track each other’s edits, correct mistakes, and defend against vandalism and spamming.

	“Software tools for revision control are essential for the organization of multi-developer projects.” —[Wikipedia](https://en.wikipedia.org/wiki/Version_control_software)

XML
:	“Extensible Markup Language (XML) is markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It is defined in the XML 1.0 Specification produced by the W3C, and several other related specifications, all free open standards.

	“The design goals of XML emphasize simplicity, generality, and usability over the Internet. It is a textual data format with strong support via Unicode for different human languages. Although the design of XML focuses on documents, it is widely used for the representation of arbitrary data structures, for example in web services.

	“Many application programming interfaces (APIs) have been developed to aid software developers with processing XML data, and several schema systems exist to aid in the definition of XML-based languages.” —[Wikipedia](https://en.wikipedia.org/wiki/Xml)




### 5.1 Abbreviations

2G
:	Second Generation

3G
:	Third Generation

API
:	Application Programming Interface

ASCII
:	American Standard Code for Information Interchange

ASP.NET
:	Active Server Pages .NET

AT
:	Assistive Techonology

CA
:	Certificate Authority

CGI
:	Common Gateway Interface

CLI
:	Command-Line Interface

CSS
:	Cascading Style Sheets

dept.
:	department

DNS
:	Domain Name System

eds.
:	editors

e.g.
:	*exempli gratia*, “for example”

etc.
:	*et cetera*, “and so on”

EU
:	European Union

FTP
:	File Transfer Protocol

GIF89a
:	Graphics Interchange Format version 89a

HTML
:	HyperText Markup Language

HTTP
:	HyperText Transfer Protocol

IA
:	Information Architecture

ID
:	identification

i.e.
:	*id est*, “that is”

IE
:	Internet Explorer

IP
:	Internet Protocol

IPv4
:	Internet Protocol version 4

IPv6
:	Internet Protocol version 6

IS
:	Information Systems

IT
:	Information Technology

ITC
:	International Typeface Corporation

JPEG
:	Joint Photographic Experts Group

Jr
:	Junior

JSON
:	JavaScript Object Notation

LESS
:	Leaner cascading Style Sheets

LTE
:	Long-Term Evolution

OS
:	Operating System

PDF
:	Portable Document Format

PHP
:	PHP: Hypertext Preprocessor (a recursive acronym)

PKI
:	Public-Key Infrastructure

RDF
:	Resource Description Framework

RDFa
:	Resource Description Framework in Attributes

REB
:	Research Ethics Board

repo
:	repository

RGB
:	Red—Green—Blue

RSS
:	Rich Site Summary, or RDF Site Summary, or Really Simple Syndication

RWD
:	Responsive Web Design

SASS
:	Syntactically Awesome Style Sheets

SCM
:	Source Code Management

SEO
:	Search Engine Optimization

SGML
:	Standard Generalized Markup Language

SS
:	Server-Side

SSL
:	Secure Sockets Layer

SVG
:	Scalable Vector Graphics

St.
:	Saint

TLS
:	Transport Layer Security

TXT
:	text file

URL
:	Uniform Resource Locator

U.S.
:	United States

UTF-8
:	Universal character set Transformation Format—8-bit

VCS
:	Version Control Systems

W3C
:	World Wide Web Consortium

WCAG
:	Web Content Accessibility Guidelines

WHATWG
:	Web Hypertext Application Technology Working Group

www
:	World Wide Web

XHTML
:	Extensible HyperText Markup Language

XML
:	Extensible Markup Language

XUL
:	Extensible markup language User interface Language





## 6. Notes and references

[^1]: Given the variability in how users access the web, responsive design has become an industry standard; sites need to be responsive because we cannot account for how a user will be using a site. Not designing responsively risks excluding a large number of users. According to [StatCounter](http://gs.statcounter.com/), in June 2014 mobile web usage is 26.64% (up from 15.31% in June 2013), tablet web usage is 6.4% (up from 4.65% in June 2013). Moreover, according to [OurMobilePlanet](http://think.withgoogle.com/mobileplanet/en/graph/?country=ca&category=MOBI&topic=Q09B&stat=Q09B_1&wave=2013&age=all&gender=all&chart_type=&active=stat), 74% of Canadians access the web from their mobile devices daily. However, these discrete, broad categories can also obfuscate the fact that “mobile” and “tablet” aren’t really consistent; screen resolution varies wildly. [StatCounter](http://gs.statcounter.com/) also tracks 14 separate screen resolutions that people use to access the web in signficant numbers, but the highest percentage of access for any one resolution is 20.13% (for 1366x768 pixels); far more users (27.84%) fall into the “other” category. We cannot design for individual devices, device types, or resolutions; we must instead allow our designs to *respond* to the users’ viewing context.

[^2]: “…One Web means making, as far as is reasonable, the same information and services available to users irrespective of the device they are using. However, it does not mean that exactly the same information is available in exactly the same representation across all devices. The context of mobile use, device capability variations, bandwidth issues and mobile network capabilities all affect the representation. Furthermore, some services and information are more suitable for and targeted at particular user contexts… Some services have a primarily mobile appeal (location based services, for example). Some have a primarily mobile appeal but have a complementary desktop aspect (for instance for complex configuration tasks). Still others have a primarily desktop appeal but a complementary mobile aspect (possibly for alerting). Finally there will remain some Web applications that have a primarily desktop appeal (lengthy reference material, rich images, for example). It is likely that application designers and service providers will wish to provide the best possible experience in the context in which their service has the most appeal. However, while services may be most appropriately experienced in one context or another, it is considered best practice to provide as reasonable experience as is possible given device limitations and not to exclude access from any particular class of device, except where this is necessary because of device limitations.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#d0e347. Accessed 2014-07-29.

[^3]: Not making sites accessible risks excluding a large number of users: [according to the Canadian government](http://www4.rhdcc.gc.ca/indicator.jsp?&indicatorid=40), 13.7% of the population has a disability. Furthermore, we are required by law (The [Accessibility for Ontarians with Disabilities Act, 2005](http://www.e-laws.gov.on.ca/html/statutes/english/elaws_statutes_05a11_e.htm)) to make all our websites accessible. We do this by adhering to the [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) and other industry standards.

[^4]: “Web sites should be designed to ensure that everyone, including users who have difficulty seeing, hearing, and making precise movements, can use them. Generally, this means ensuring that Web sites facilitate the use of common assistive technologies.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 3: Accessibility”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/chapters/3/introduction. Accessed 2014-07-28.

[^5]: Using progressive enhancement facilitates making responsive and accessible websites, and also helps us make websites that work with the wide variety of browsers in use. We see similar variety in browser versions as we do in screen resolution; [StatCounter](http://gs.statcounter.com/) tracks 12 popular browser versions with significant usage, the highest being “Android 0” at 6.38%. The largest segment is, again, the “Other” category, with 48.1%. Progressive enhancement with feature detection allows us to accomodate this variability and offer good experiences to users no matter what their browser and version.

[^6]: “Take reasonable steps to work around deficient implementations.… Just as it is not the intention to recommend a least common denominator approach, neither is it the intention to recommend avoiding features that exhibit problems on some class of devices. It is also not the intention to suggest that content providers should restrict their support to certain device types. Content providers should aim to support as wide a range of device types as is practical.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#DEFICIENCIES. Accessed 2014-07-29.

[^7]: “Involve Users in Establishing User Requirements: Involve users to improve the completeness and accuracy of user requirements. One of the basic principles of user-centered design is the early and continual focus on users. For this reason, user involvement has become a widely accepted principle in the development of usable systems. Involving users has the most value when trying to improve the completeness and accuracy of user requirements. It is also useful in helping to avoid unused or little-used system features. Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 4, Involve Users in Establishing User Requirements”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/4. Accessed 2014-07-28.

[^8]: Using a usability tester without a vested interest in the project avoids injecting bias. From Rubin & Chisnell, *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*, 2008, ‘Chapter 9. Conduct the Test Sessions’: “Take the attitude that you have no vested interest in the results one way or the other. Present the product neutrally (this does not mean you need to be solemn), so that the participants cannot ascertain any preference on your part. Never indicate through your speech or mannerisms that you strongly approve or disapprove of any actions or comments offered by a particular participant. React to ‘mistakes’ or ‘wrong turns’ in exactly the same way as you do to correct behavior. Never make participants feel stupid or inadequate (even inadvertently) by how you respond to their actions. If a participant is having problems, remember that it is the fault of the product. Period. Even if you say and do all the right things, participants will still blame themselves. If that happens, remind them of the value of their difficulties in understanding how the product actually works. Encourage them to freely explore areas without concern for ‘looking good.’”

[^9]: Web Accessibility Initiative. *Involving Users in Web Projects for Better, Easier Accessibility*. http://www.w3.org/WAI/users/involving. Accessed 2014-07-29.

[^10]: In software development, this is known as [Bikeshedding](https://en.wikipedia.org/wiki/Parkinson%27s_Law_of_Triviality).

[^11]: “Reduce User’s Workload: Allocate functions to take advantage of the inherent respective strengths of computers and users. Let the computer perform as many tasks as possible, so that users can concentrate on performing tasks that actually require human processing and input. Ensure that the activities performed by the human and the computer take full advantage of the strengths of each. For example, calculating body mass indexes, remembering user IDs, and mortgage payments are best performed by computers.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 4, Reduce User’s Workload”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/15. Accessed 2014-07-28.

[^12]: “Consider Many User Interface Issues: Consider as many user interface issues as possible during the design process. Consider numerous usability-related issues during the creation of a Web site. These can include: the context within which users will be visiting a Web site; the experience levels of the users; the types of tasks users will perform on the site; the types of computer and connection speeds used when visiting the site; evaluation of prototypes; and the results of usability tests.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 7, Consider Many User Interface Issues”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/7. Accessed 2014-07-28.

[^13]: “Establish User Requirements: Use all available resources to better understand users’ requirements. The greater the number of exchanges of information with potential users, the better the developers’ understanding of the users’ requirements. The more information that can be exchanged between developers and users, the higher the probability of having a successful website. These could include customer support lines, customer surveys and interviews, bulletin boards, sales people, user groups, trade show experiences, focus groups, etc. Successful projects require at least four (and average five) different sources of information. Do not rely too heavily on user intermediaries. The information gathered from exchanges with users can be used to build ‘use cases’. Use cases describe the things that users want and need the website to be able to do. In one study, when compared with traditional function-oriented analyses, use cases provided a specification that produced better user performance and higher user preferences.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 2, Establish User Requirements”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/2. Accessed 2014-07-28.

[^14]: “Set Usability Goals: Set performance goals that include success rates and the time it takes users to find specific information, or preference goals that address satisfaction and acceptance by users. Setting user performance and/or preference goals helps developers build better Web sites. It can also help make usability testing more effective. For example, some intranet Web sites have set the goal that information will be found eighty percent of the time and in less than one minute.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 9, Set Usability Goals”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/9. Accessed 2014-07-28.

[^15]: Srivastava, E. (2014). Designing in the Browser: An Efficient Route to Responsive Design. *User Experience Magazine*, 14(2). http://www.uxpamagazine.org/designing-in-the-browser/. Accessed 2014-08-05.

[^16]: Roberts, Harry. (2010). Designing in the browser leads to better quality builds. *CSS Wizardry*. http://csswizardry.com/2010/10/designing-in-the-browser-leads-to-better-quality-builds/. Accessed 2014-08-05.

[^17]: Fisher, Meagan. 2009. Make Your Mockup in Markup. *24 Ways*. http://24ways.org/2009/make-your-mockup-in-markup/. Accessed 2014-08-05.

[^18]: LeBlanc, Martin. 2014-05-14. https://twitter.com/leblancstartup/status/466638260195041280. Accessed 2014-08-05.

[^19]: Hoekman Jr, Robert. 2011. The Myth Of The Sophisticated User. *Smashing Magazine*. http://www.smashingmagazine.com/2011/12/28/myth-of-sophisticated-user/. Accessed 2014-08-05.

[^20]: “Allow Users to See Their Entered Data: Create data entry fields that are large enough to show all of the entered data without scrolling. Users should be able to see their entire entry at one time. There always will be some users who will enter more data than can be seen without scrolling; however, try to minimize the need to scroll or move the cursor to see all the data entered in a field. If there is a character limit for a particular field, state that near the entry field. Designers should be particularly aware of the length of data entry fields used for entering search terms. One study found that this entry field should be at least 35-40 characters long to accommodate ninety-five percent of search terms being used.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 13: Screen-Based Controls (Widgets); Section 8, Allow Users to See Their Entered Data”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/133. Accessed 2014-07-29.

[^21]: This is often referred to as “eating your own dogfood” or [dogfooding](http://en.wikipedia.org/wiki/Dogfooding).

[^22]: “Set and State Goals: Identify and clearly articulate the primary goals of the Web site before beginning the design process. Before starting design work, identify the primary goals of the website (educate, inform, entertain, sell, etc.). Goals determine the audience, content, function, and the site’s unique look and feel. It is also a good idea to communicate the goals to, and develop consensus for the site goals from management and those working on the website.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 5, Set and State Goals”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/5. Accessed 2014-07-28.

[^23]: “Understand and Meet User’s Expectations: Ensure that the website format meets user expectations, especially related to navigation, content, and organization. Users define ‘usability’ as their perception of how consistent, efficient, productive, organized, easy to use, intuitive, and straightforward it is to accomplish tasks within a system. It is important for designers to develop an understanding of their users expectations through task analyses and other research. Users can have expectations based on their prior knowledge and past experience. The use of familiar formatting and navigation schemes makes it easier for users to learn and remember the layout of a site. Assume that certain users will not use a website frequently enough to learn to use it efficiently. Therefore, use familiar conventions.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 3, Understand and Meet User’s Expectations”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/3. Accessed 2014-07-28.

[^24]: “Announce Changes to a Web Site: Announce major changes to a Web site on the homepage - do not surprise users. Introducing users to a redesigned Web site can require some preparation of expectations. Users may not know what to do when they are suddenly confronted with a new look or navigation structure. Therefore, you should communicate any planned changes to users ahead of time. Following completion of changes, tell users exactly what has changed and when the changes were made. Assure users that all previously available information will continue to be on the site. It may also be helpful to users if you inform them of site changes at other relevant places on the Web site. For example, if shipping policies have changed, a notification of such on the order page should be provided.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 5: The Home Page; Section 8, Announce Changes to a Web Site”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/53. Accessed 2014-07-28.

[^25]: Lewis, Makayla (2013). Cerebral palsy, online social networks and change. (Unpublished Doctoral thesis, City University London). http://openaccess.city.ac.uk/3011/. Accessed 2014-07-28. Summary available at http://www.slideshare.net/MakaylaLewis1/makayla-lewis-a11y-to-april-2014publicversion. Accessed 2014-07-28.

[^26]: “Format Common Items Consistently: Ensure that the format of common items is consistent from one page to another. The formatting convention chosen should be familiar to users. For example, telephone numbers should be consistently punctuated (800-555-1212), and time records might be consistently punctuated with colons (HH:MM:SS).”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 11: Text Appearance; Section 2, Format Common Items Consistently”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/107. Accessed 2014-07-29.

[^27]: “Structure for Easy Comparison: Structure information so that it can be easily scanned and compared. Users should be able to compare two or more items without having to remember one while going to another page or another place on the same page to view a different item.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 4, Structure for Easy Comparison”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/58. Accessed 2014-07-28.

[^28]: “Establish Level of Importance: Establish a high-to-low level of importance for information and infuse this approach throughout each page on the Web site. The page layout should help users find and use the most important information. Important information should appear higher on the page so users can locate it quickly. The least used information should appear toward the bottom of the page. Information should be presented in the order that is most useful to users. People prefer hierarchies, and tend to focus their attention on one level of the hierarchy at a time. This enables them to adopt a more systematic strategy when scanning a page, which results in fewer revisits.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 5, Establish Level of Importance”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/59. Accessed 2014-07-28.

[^29]: “Organization Information Clearly: Organize information at each level of the Web site so that it shows a clear and logical structure to typical users. Designers should present information in a structure that reflects user needs and the site’s goals. Information should be well-organized at the Web site level, page level, and paragraph or list level. Good Web site and page design enables users to understand the nature of the site’s organizational relationships and will support users in locating information efficiently. A clear, logical structure will reduce the chances of users becoming bored, disinterested, or frustrated.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 1, Organization Information Clearly”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/177. Accessed 2014-07-29.

[^30]: “Minimize the Number of Clicks or Pages: To allow users to efficiently find what they want, design so that the most common tasks can be successfully completed in the fewest number of clicks. Provide critical information as close to the homepage as possible. Important information should be available within two or three clicks - the greater the number of clicks, the greater the likelihood that users will make incorrect choices.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 5, Minimize the Number of Clicks or Pages”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/181. Accessed 2014-07-29.

[^31]: “Display Only Necessary Information: Limit page information only to that which is needed by users while on that page. Do not overload pages or interactions with extraneous information. Displaying too much information may confuse users and hinder assimilation of needed information. Allow users to remain focused on the desired task by excluding information that task analysis and usability testing indicates is not relevant to their current task. When user information requirements cannot be precisely anticipated by the designer, allow users to tailor displays online.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 7, Display Only Necessary Information”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/183. Accessed 2014-07-29.

[^32]: “Provide Useful Content: Provide content that is engaging, relevant, and appropriate to the audience. Content is the information provided on a Web site. Do not waste resources providing easy access and good usability to the wrong content. One study found that content is the most critical element of a Web site. Other studies have reported that content is more important than navigation, visual design, functionality, and interactivity.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 1, Provide Useful Content”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/1. Accessed 2014-07-28.

[^33]: “Users in a mobile context are often looking for specific pieces of information, rather than browsing. Content providers should consider the likely context of use of information and, while providing the option to access all information, should offer appropriate information first.… The general prescription to use clear language is of particular importance for mobile delivery, where brevity and directness are generally more desirable than a discursive style. Writing content in the traditional journalistic ‘front loaded’ style can assist users determining whether information is of interest to them and allow them to skip it more easily if it is not. Placing distinguishing information at the beginning of headings, paragraphs, lists, etc. can also help the user contextualize when using devices with limited screen area.… Mobile users often pay for bandwidth, so offering them content that is extraneous to their needs, especially advertising, costs them time and money and contributes to an unsatisfactory experience. In general, the user’s consent should be sought before initiating the download of content.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#cl. Accessed 2014-07-29.

[^34]: “Format Information for Reading and Printing: Prepare information with the expectation that it will either be read online or printed. Prepare documents so that they can be read online or printed. Online documents can be read anywhere and at any time. However, users prefer to print documents that are five or more pages long, can be read at a later time, support presentations or research, or contain complex information requiring notes or highlighting.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 9, Format Information for Reading and Printing”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/20. Accessed 2014-07-28.

[^35]: “Develop Pages that Will Print Properly: If users are likely to print one or more pages, develop pages with widths that print properly. It is possible to display pages that are too wide to print completely on standard 8.5 x 11 inch paper in portrait orientation. Ensure that margin to margin printing is possible.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 12, Develop Pages that Will Print Properly”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/23. Accessed 2014-07-28.

[^36]: “Provide Printing Options: Provide a link to printable and downloadable document versions. Many users prefer to read text from a paper copy of a document. Paper allows users to take notes, highlight ideas, follow presentations, and save information that may be difficult to find at a later time.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 15, Provide Printing Options”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/26. Accessed 2014-07-28.

[^37]: “Test Plug-Ins and Applets for Accessibility: To ensure accessibility, test any applets, plug-ins or other applications required to interpret page content to ensure that they can be used by assistive technologies. Applets, plug-ins and other software can create problems for people using assistive technologies, and should be thoroughly tested for accessibility.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 3: Accessibility; Section 6, Test Plug-Ins and Applets for Accessibility”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/33. Accessed 2014-07-28.

[^38]: “Do not rely on embedded objects or script.… Many mobile devices do not support embedded objects or script and in many cases it is not possible for users to load plug-ins to add support. Content must be designed with this in mind. Even where a device does support scripting, do not use it unless there is no other way of accomplishing your objectives. Scripting increases power consumption and so decreases battery life.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#OBJECTS_OR_SCRIPT. Accessed 2014-07-29.

[^39]: “Exploit device capabilities to provide an enhanced user experience. While encouraging content providers to be sensitive to the needs of the Default Delivery Context, it is not intended that this will result in a diminished experience on more capable devices. Develop sites that target the Default Delivery Context. In addition, where appropriate, use device capabilities to provide a better user experience on more capable devices.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#CAPABILITIES. Accessed 2014-07-29.

[^40]: “Standardize Task Sequences: Allow users to perform tasks in the same sequence and manner across similar conditions. Users learn certain sequences of behaviors and perform best when they can be reliably repeated. For example, users become accustomed to looking in either the left or right panels for additional information. Also, users become familiar with the steps in a search or checkout process.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 3, Standardize Task Sequences”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/14. Accessed 2014-07-28.

[^41]: “Avoid Cluttered Displays: Create pages that are not considered cluttered by users. Clutter is when excess items on a page lead to a degradation of performance when trying to find certain information. Studies have shown that users can find what they are looking for more quickly in a sparse and uncluttered display than in a dense display. On an uncluttered display, all important search targets are highly salient, i.e., clearly available. One study found that test participants tended to agree on which displays were least cluttered and those that were most cluttered.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 1, Avoid Cluttered Displays”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/55. Accessed 2014-07-28.

[^42]: “Optimize Display Density: To facilitate finding target information on a page, create pages that are not too crowded with items of information. Density can be defined as the number of items per degree of visual angle within a visually distinct group. This density either can be crowded with many items, or sparse with few items. One study found that locating a target in a crowded area took longer than when the target was in a sparse area. Also, participants searched and found items in the sparse areas faster than those in the crowded areas. Participants used fewer fixations per word in the crowded areas, but their fixations were much longer when viewing items in the crowded areas. Finally, participants tended to visit sparse areas before dense groups. To summarize, targets in sparse areas of the display (versus crowded areas) tended to be searched earlier and found faster.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 6, Optimize Display Density”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/60. Accessed 2014-07-28.

[^43]: “Use an Iterative Design Approach: Develop and test prototypes through an iterative design approach to create the most useful and usable Web site. Iterative design consists of creating paper or computer prototypes, testing the prototypes, and then making changes based on the test results. The ’test and make changes’ process is repeated until the website meets performance benchmarks (usability goals). When these goals are met, the iterative process ends. The iterative design process helps to substantially improve the usability of websites, improve task completion rates, and improve user satisfaction.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 18: Usability Testing; Section 1, Use an Iterative Design Approach”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/194. Accessed 2014-07-29.

[^44]: “Be Easily Found in the Top 30: In order to have a high probability of being accessed, ensure that a Web site is in the ‘top 30’ references presented from a major search engine. One study showed that users usually do not look at Web sites that are not in the ‘top 30’. Some of the features required to be in the ‘top 30’ include appropriate meta-content and page titles, the number of links to the Web site, as well as updated registration with the major search engines.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 8, Be Easily Found in the Top 30”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/8. Accessed 2014-07-28.

[^45]: “Use Users’ Terminology in Help Documentation: Create ‘Help’ documentation using the users’ terminology to describe elements and features. Users have a colloquial understanding of website features, names and functions (e.g., breadcrumbs). Create ‘Help’ sections that address unfamiliar terms with the right amount of context. For example, if you refer to the ‘navigation bar,’ explain or highlight what you are referring. Remember that users and designers may use different terms to identify the same web features.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 14, Use Users’ Terminology in Help Documentation”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/25. Accessed 2014-07-28.

[^46]: “Provide Assistance to Users: Provide assistance for users who need additional help with the website. Some users require special assistance. This is particularly important if the site was designed for inexperienced users or has many first time users. For example, in one website that was designed for repeat users, more than one-third of users (thirty-six percent) were first time visitors. A special link was prepared that allowed new users to access more information about the content of the site and described the best way to navigate the site.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 16, Provide Assistance to Users”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/26. Accessed 2014-07-28.

[^47]: “Carry out testing on actual devices as well as emulators. Any Web site should be tested in a range of browsers. Mobile browsers often show markedly different characteristics to desktop browsers. As well as assessing a site’s suitability for display in reduced format, content providers are encouraged to test that the features they rely on work in actual devices. Content providers should also test with specific features disabled, such as using text-only modes and with scripting disabled. Many manufacturers provide emulators for their device that can provide a convenient preliminary means of testing. However, in practice, many of the emulators behave in a different way to the devices they emulate. Consequently testing should be carried out in as wide a range of real devices and specific software versions as is practical.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#TESTING. Accessed 2014-07-29.

[^48]: “Create documents that validate to published formal grammars. If the page markup is invalid this will result in unpredictable and possibly incomplete presentation.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#VALID_MARKUP. Accessed 2014-07-29.

[^49]: “Minimize Page Download Time: Minimize the time required to download a Web site’s pages. The best way to facilitate fast page loading is to minimize the number of bytes per page.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 6, Minimize Page Download Time”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/17. Accessed 2014-07-28.

[^50]: “Ensure that Images Do Not Slow Downloads: Take steps to ensure that images do not negatively impact download speeds. Delays are frustrating to users. Strive to maintain download speeds to less than five seconds. To improve download speeds, use several small images rather than a single large image. Repeat images when possible, and save images with the ‘interlaced’ or ‘progressive’ option. Limit page sizes to less than 30,000 bytes. Minimize the number of different colors used in an image, and add pixel dimension tags (e.g., height and width) to the image reference. High Speed users may not notice anything different; however, these techniques will greatly improve download speeds for modem or hotspot users.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 14: Graphics, Images, and Multimedia; Section 3, Ensure that Images Do Not Slow Downloads”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/152. Accessed 2014-07-29.

[^51]: “Limit the Use of Images: Use images only when they are critical to the success of a Web site. Ensure that a Web site’s graphics add value and increase the clarity of the information on the site. Certain graphics can make some Web sites much more interesting for users, and users may be willing to wait a few extra seconds for them to load. Users tend to be most frustrated if they wait several seconds for a graphic to download, and then find that the image does not add any value. Some decorative graphics are acceptable when they do not distract the user.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 14: Graphics, Images, and Multimedia; Section 9, Limit the Use of Images”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/158. Accessed 2014-07-29.

[^52]: “Keep style sheets small.… Optimize style information so that only styles that are used are included.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#STYLE_SHEETS_SIZE. Accessed 2014-07-29.

[^53]: “Use terse, efficient markup.… Marking fonts, colors and other stylistic effects in-line can cause considerably larger page sizes when compared with using logical markup, and use of the HTML class attribute for application of style… While it is not intended that authors should create their content in a single line to remove white space altogether, it is suggested that authors should not contribute to page weight by introducing unnecessary white space. Note that ‘pretty printing’ (the formatting of markup with indentation) can generate large amounts of white space and hence add to page weight. If ‘pretty printing’ is an important part of the authoring process, then try to arrange that redundant white space is stripped when serving a page. Even though some network proxies strip white space that they think is redundant, not all do so, so it is not best practice to rely upon this behavior. Use of structural markup… contributes to minimizing the size of the markup on a page, as does centralizing the style descriptions using CSS.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#MINIMIZE. Accessed 2014-07-29.

[^54]: “Focus on Performance Before Preference: If user performance is important, make decisions about content, format, interaction, and navigation before deciding on colors and decorative graphics. Focus on achieving a high rate of user performance before dealing with aesthetics. Graphics issues tend to have little impact, if any, on users’ success rates or speed of performance.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 6, Focus on Performance Before Preference”. Washington: U.S. Government Printing Office. http://guidelines.usability.gov/guidelines/6. Accessed 2014-07-28.

[^55]: “Do not use frames. Many mobile devices do not support frames. In addition, frames are recognized as being generally problematic.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. http://www.w3.org/TR/mobile-bp/#NO_FRAMES. Accessed 2014-07-29.
