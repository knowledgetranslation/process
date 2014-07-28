# How to make a quality website

*David Newton  
for the Knowledge Translation Program, St. Michael’s Hospital  
With feedback and contributions from Sharon Straus and Wai-Hin Chan  
2014-07-28*

This document lives at [https://github.com/knowledgetranslation/process/](https://github.com/knowledgetranslation/process/). Please check there for the most up-to-date version.

---

This process has lots of padding and failsafes built-in. Every project always runs over-time, over-budget, and under-scope. The padding and failsafes should help mitigate the consequences of unexpected barriers.

## Principles

These principles should be examined and considered before the project starts, when the project ends, and at every step in between. At every step, every team member should consider how the principle applies to the step as a whole, and to their work in that step.

1. Every website needs to be [responsive](https://en.wikipedia.org/wiki/Responsive_web_design)[^1], every website needs to be [accessible](https://en.wikipedia.org/wiki/Web_accessibility)[^2], every website needs to use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_Enhancement)[^3].

1. Every stakeholder is a team member and every team member is a stakeholder.[^4]

	* Exception: Usability tests should, ideally, be conducted and summarized by people completely separate from the rest of the team, to avoid bias.
	
		If the team members are the ones conducting usability tests, every effort should be made to avoid bias in testing.[^5]

1. Involve all stakeholders at every step of the project, every meeting, and every decision point. Everybody should have the *opportunity* to participate.
	
	* Involvement should be discussed and agreed upon at the first meeting, and the team should make decisions about what the expectations are for every team member, and what the timelines for response are.

	* For some parts of the project, a team member’s involvement will be mandatory, for others optional; but, every team member should have the option to participate in every stage.

	* Involvement does not simply equal presence. Every team member should have the option of *participating actively*, and should be encouraged to do so.

	* e.g. designers should be involved during content creation, developers should be involved while creating timelines, users should be involved while planning scope, etc.

1. Trust the expertise of your experts, *in their area of expertise*. Being an expert in one area doesn’t make somebody an expert in another area.

	* e.g. a content expert is not a designer; a developer is not a scientist

1. Don’t give disproportionate or inappropriate weight to trivial issues.[^6]

1. Remember the [Priority of Constituencies](http://www.w3.org/TR/html-design-principles/#priority-of-constituencies), a founding web design principle encoded by the World Wide Web Consortium and Web Hypertext Application Technology Working Group (the organizations responsible for web standards):

	> In case of conflict, consider users over authors over implementors over specifiers over theoretical purity. In other words costs or difficulties to the user should be given more weight than costs to authors; which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone. Of course, it is preferred to make things better for multiple constituencies at once.
	
	* The original principle defines “authors” as web authors, i.e. web developers and designers who are building a site; “implementors” as browser implementors, i.e. software developers who build web browsers; and “specifiers” as those writing web standards specifications.
	
	* For our projects, we can alter these definitions while still retaining the spirit of the principle. “Specifiers” would be those team members who are responsible for planning, and “implementors” would be those responsible for content; the definitions for “users”, “authors”, and “theoretical purity” can remain unchanged.
	
	* With these new definitions, we can resolve conflicts by giving more weight to costs/difficulties affecting users over developers/designers over content creators over planners over theoretical purity. But, as always, solutions should ideally improve things for multiple/all constituencies.
	
	* Note that this principle does not mean we should always defer to what each constituency wants or says they want; it means that in cases of conflict we should look at evidence and use that evidence to prioritize benefits to users over authors, etc. We always prioritize evidence over expert opinion.

1. No single user is more important than another user.[^7] 

	* e.g. mobile users need the same access to the same content as desktop users, disabled users need the same access to the same content as able users, etc.

1. Usability tests are for identifying problems, not for generating suggestions.

	* Users might think they know how to solve these problems, but they may be wrong. They aren’t the experts in tool development, you are. *However*, they may be knowledge experts in the context of the tool usage.

	* Usability test summaries focus on identifying 	problems rather than solutions. While user-suggested solutions should be considered, final decisions on solutions should be decided by experts on your team.
	
	* “Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”[^8]

1. Usability testing should only ever focus on one area at a time, e.g. either content, look-and-feel, or functionality. If you want to test multiple areas, conduct separate usability tests.

	* Usability tests should have specific performance and success goals.[^11]

1. You’re building for the web, so use web-compatible technologies.

	* Create content using plain text, [Markdown](https://en.wikipedia.org/wiki/Markdown), or HTML; not in Microsoft Word (and especially not PDFs or PowerPoint).

	* If possible, design *in the browser* using CSS, not in software designed for print, like Photoshop, Illustrator, or InDesign (and especially not in non-design software like PowerPoint, Word, etc).
	
	* Define design in terms of web units, e.g. colours as hex values, sizes and distances in pixels and ems, etc.

	* Collaborate using version control software and services like GitHub, not by emailing and turning on Track Changes in Microsoft Word.

1. Make sure all designs account for and define all interactions and states (clicks, hovers, transitions, etc.).

1. Build everything (content, design, development) modularly: you’ll probably be on another project where you can re-use components.

1. Avoid social components (e.g. forums, chat, blogs, social media) when possible.

1. Avoid requiring users to log in with a username and password.

1. Document everything you do at every step and use version control software for every piece.

1. Everybody should track their hours. Ideally hours should be tracked according to specific tasks. One good way to do this is to make every task a GitHub issue, and associate all hours with specific issues.

1. Publish what you publish. Knowledge translation depends on dissemination; we need share what we’re creating[^9].

	* Make all website content public, not password protected or behind a paywall.
	
	* If it can’t be made public, then it probably shouldn’t be on the website. Use other services, like intranets, Basecamp, Canvas, etc.
	
	* Open source all the developed designs, code, documentation, etc.
	
	* Find out what your rights are when you publish papers about the project. If possible make the papers available as widely as possible, for free, even if it costs extra money.

1. Research as much as possible. Learn as much as possible. Collect as much data as possible. We should always strive to do evidence-based web development.

1. Work in the open. Avoid decision-making over email or in private conversations.

	* All meetings should have a secretary, and that secretary should take notes *visibly*, e.g. on a whiteboard, so other attendees can contribute and update notes where they see fit. Ideally, meetings should also be audio recorded and made available to members who weren’t able to attend. Ideally, any sketches should be photographed/scanned and be included with the minutes.
	
	* All decision-making between meetings should be done in an open forum, such as GitHub or Basecamp.

1. Give credit where it’s due. In steps 1–3 you’ll clearly define roles and responsibilities for each team member. With all the documentation you develop, including git logs and timesheets, you’ll be able to verify who did what. Give appropriate credit to *everyone* in *all* the following places:

	* on the website (e.g. in a humans.txt file, in page metadata)
	* in the website’s documentation (e.g. CONTRIBUTORS.MD on GitHub)
	* in papers about the project (e.g. authorship for anybody that had decision-making responsibility, acknowledgements for every other team member)
	* in presentations (e.g. on an acknowledgements slide)

## Steps

1. Determine who the stakeholders and team members are.

1. For each of the following areas, determine which team member is the most responsible person: planning, content, design, development, and science. The most responsible person should be an expert in their area.

	* The most responsible person will have the final decision on matters related to their area(s).
	
	* All other team members are still welcome to provide *feedback* on all other areas.

1. For every team member that’s not a most responsible person, determine which area (planning, content, design, development, and science) they will focus on.

	* All other team members are still welcome to provide *feedback* on all other areas, but they should have a specific focus.

1. Determine the maximum budget that is available, and divide by two. This is your operating budget.

	* Remember: extra money is a good problem to have.

1. Using your operating budget and timelines as guides, determine the ideal project scope[^10], then reduce it by half. This is your scope for *this phase*.

	* A focused project is more likely to be successful, and there will always be time for more phases later.
	
	* Remember to consider *all* the steps in this document when considering timelines, including multiple rounds of usability and testing.

1. Plan exactly what data you’d like collected for research, testing, and development/planning purposes, and define why you need it. Then, for each of these, plan to collect more data than you think you’ll need.

	* If possible, try to collect as much data as possible anonymously. Identifiable data should be avoided whenever possible.
	
	* If you’re collecting data, write a privacy policy and submit it to REB/legal, and make sure to include it in the publicly-available content you develop in the **Content** steps.

1. Research

	* Study the data collected from other projects and earlier versions of this project, and interview stakeholders (especially users). Determine what content and features are important to whom and why, how they will be used, and where they will be accessed from.[^8],[^12]
	
	* Every team member should spend at least one full day reading about their area of focus (and especially about how it applies to the web), and another full day about an area on which they aren’t focusing and/or aren’t an expert. This helps insure that everybody’s knowledge is current and continues to grow.
	
1. Create user personas based on your research, that reflect different types of typical and atypical users.

	* Remember that these form a useful but incomplete subset of your users; real users will never behave as you expect, nor should they.

1. Do the **Content** steps.

1. Do the **Design** steps.

1. Do the **Development** steps.

1. Create a launch plan.

	* If this is an update to an existing site, develop a plan for how users will transition to the new version. Give them options to opt-in to the new version early, and opt-out for a set period after launch. Plan specific changeover dates and stick to them. Create and make available change documentation explaining what has changed and why. 
	
	* Provide communication and feedback channels, and plan how these will be monitored.
	
	* Plan how data will be monitored during the launch/transition period, and how to react/make adjustments based on this data.

1. Create a post-launch plan.

	* Decide what actions will be required for maintaining and updating the site, who will be responsible for this, and where the funds will come from.
	
	* Plan for how to monitor and react to usage and other data post-launch.
	
	* Plan for who will monitor and respond to the communications channels that were defined in your launch plan.

1. Implement your launch plan.

1. Once the final phase of your launch plan is complete, implement your post-launch plan.

1. Once you are in the post-launch phase, have all the stakeholders go over the built-up documentation (minutes, git logs, documentation, style guides, READMEs, help files, timesheets, papers written, etc.) and compile a “bible” for the project.

	* This should include take-aways that can be used in future projects.
	
	* Contribute relevant pieces to any department documents (process docs, pattern libraries, etc.)
	
	* Make sure to document, in as much detail as possible, any failures or barriers.

### Content

1. Develop or choose an existing style guide for content, *before* you actually start creating any of the content.

	* Making already-created content conform to your style guide is much more work than developing content with a style guide already in-place.
	
1. Information Architecture: create a plan for how your content will be structured, both at a high-level (e.g. site navigation), and a low-level (e.g. sections within documents/pages). Then, reduce the complexity of your Information Architecture by half.

	* Content should be structured as simply as possible to help users find what they’re looking for.
	
1. Create your content, in compliance with your style guide and Information Architecture, and keeping in mind your user personas. Then, delete half the content.

	* Your users usually have very specific goals when visiting a web site. Don’t clutter their experience, and don’t give them what they don’t need.[^12],[^13]

1. Conduct usability testing on the content. Can users understand it and get the info they need?[^8]

	* Try to test with users that closely match each of your personas.
	
1. Revise the content based on the usability test feedback.

1. Update the project’s style guide with any content and IA details that weren’t previously accounted for.

### Design

1. Create basic, works-for-everybody design templates that account for all the content and works well for all users, regardless of:

	* Device, e.g. phone, tablet, desktop, laptop, etc.
	* Browser, e.g. modern IE, obsolete IE, Firefox, Chrome, Safari, Opera, etc.
	* Connection speed, e.g. high-speed/broadband, LTE, 3G, 2G, etc.
	* Ability, e.g. using a mouse, using a keyboard, without assistive technology, with a screenreader, etc.
	* Javascript support/availability
	* Language, e.g. with machine-translation support
	
	This isn’t the “showcase” design, this is the fallback, lowest-common-denominator design.[^7]
	
1. Cut the number of templates in half, and for each remaining template, cut the number of user interace elements in half. Double the font size, and double the white space.

1. Conduct usability testing on this design, using paper prototypes.[^7],[^12]

	* Try to test with users that closely match each of your personas.
	
	* Test both previous and new testers if possible.
	
1. Revise the design based on usability feedback.

1. Based on this design, update the project’s style guide with relevant design details, e.g. typefaces, colours, grid definitions, sizes, interactions, etc.

1. Create “showcase” design templates for how everything should look in a mobile browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.

1. Cut the number of templates in half, and for each remaining template, cut the number of user interace elements in half. Double the font size, and double the white space.

1. Conduct usability testing on this design, using paper prototypes.

	* Try to test with users that closely match each of your personas.
	
	* Test both previous and new testers if possible.
	
1. Revise the design based on usability feedback.

1. Based on this design, update the project’s style guide with relevant design details, e.g. typefaces, colours, grid definitions, sizes, interactions, etc.

1. Create “showcase” design templates for how everything should look in a desktop browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.

1. Cut the number of templates in half, and for each remaining template, cut the number of user interace elements in half. Double the font size, and double the white space.

1. Conduct usability testing on this design, using paper prototypes.

	* Try to test with users that closely match each of your personas.
	
	* Test both previous and new testers if possible.
	
1. Revise the design based on usability feedback.

1. Based on this design, update the project’s style guide with relevant design details, e.g. typefaces, colours, grid definitions, sizes, interactions, etc.

1. Document in detail how each element of each template progressively enhances from the fallback design to the mobile design to the desktop design. Make sure there is complete content- and functionality-parity between all three designs, and that it’s clear how each element adjusts in changing circumstances.

	* This process will probably require creating a few extra alternate design templates at different “breakpoints”, i.e. an adjustment when something breaks or looks bad at a certain size or when a certain feature is/isn’t supported. Always create these alternate templates based on breakpoints and not specific devices.
	
1. Update the style guide with any design information not previously entered.

### Development

These steps focus on front-end development. Back-end development may need to take place in parallel with these steps.

1. Develop HTML and CSS versions of each fallback template, using real content.

	* This should involve *no JavaScript*, but may involve creating some backend functionality.
	
	* These need to be fully functional. If something doesn’t or can’t work at this stage, go back to whatever previous step created the barrier, fix it, and redo everything from that point forward.

1. Perform the **Testing** steps.
	
1. Conduct usability testing on these templates, using real browsers/devices *of the users’ choice*.

	* Conduct separate usability sessions geared at how it looks and how it works.

	* Try to test with users that closely match each of your personas.
	
	* Test both previous and new testers if possible.

1. Revise based on usability testing.

1. Perform the **Testing** steps.
	
1. Update the style guide with any new information that hasn’t previously been included.

1. Progressively enhance your design to get to the showcase mobile design, and any breakpoints between it and the fallback.

	* Always use real content.
	
	* Use feature checking and appropriate fallbacks.
	
	* Remember that not every user needs the showcase design; that’s why the fallback and breakpoint templates are there, and why there are feature fallbacks. Everybody will get a good experience *appropriate* to their browsing context.

1. Perform the **Testing** steps.

1. Conduct usability testing on these templates, using real browsers/devices *of the users’ choice*.

	* Conduct separate usability sessions geared at how it looks and how it works.

	* Try to test with users that closely match each of your personas.
	
	* Test both previous and new testers if possible.

1. Revise based on usability testing.

1. Perform the **Testing** steps.
	
1. Update the style guide with any new information that hasn’t previously been included.

1. Progressively enhance your design to get to the showcase desktop design, and any remaining breakpoints.

	* Always use real content.
	
	* Use feature checking and appropriate fallbacks.
	
	* Remember that not every user needs the showcase design; that’s why the fallback and breakpoint templates are there, and why there are feature fallbacks. Everybody will get a good experience *appropriate* to their browsing context.

1. Perform the **Testing** steps.

1. Perform Search Engine Optimization by ensuring proper meta-information and titles have been used for all pages, including the use of structured data (e.g. [schema.org](http://schema.org/)).[^14]

	* Also consider using search engine submission tools, such as [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en).

	* The best ways to achieve high-ranking search results are to have high quality content; semantic, validated code; and high performance. All of these should have been handled before this point in the process.
	
1. Perform the **Testing** steps.

### Testing

1. Test the templates in as many browsers as possible, on as many devices as possible, with as many assistive technologies as possible. Make sure everything functions as it should and looks ok (though not necessarily pixel perfect!).

	* Prioritize testing with real browsers and devices, and only use simulators if the real thing is unavailable.
	
	* While testing, take screenshots of every template in every browser/device combination. Save these.
	
	* Make sure multiple team members test. Fresh eyes are crucial.

1. Fix any problems that arose during browser testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated markup and accessibility validation.

1. Fix any problems that arose during validity testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated performance testing.

1. Fix any problems that arose during performance testing.

	* Good performance should take priority over good aesthetics. Ideally you can achieve both, but in cases of conflict, optimize for performance.[^15]

	* If there were problems to fix, return to step 1.

### Notes

[^1]: Given the variability in how users access the web, responsive design has become an industry standard; sites need to be responsive because we cannot account for how a user will be using a site. No designing responsively risks excluding a large number of users. According to [StatCounter](http://gs.statcounter.com/), in June 2014 mobile web usage is 26.64% (up from 15.31% in June 2013), tablet web usage is 6.4% (up from 4.65% in June 2013). Moreover, according to [OurMobilePlanet](http://think.withgoogle.com/mobileplanet/en/graph/?country=ca&category=MOBI&topic=Q09B&stat=Q09B_1&wave=2013&age=all&gender=all&chart_type=&active=stat), 74% of Canadians access the web from their mobile devices daily. However, these discrete, broad categories can also obfuscate the fact that “mobile” and “tablet” aren’t really consistent; screen resolution varies wildly. [StatCounter](http://gs.statcounter.com/) also tracks 14 separate screen resolutions that people use to access the web in signficant numbers, but the highest percentage of access for any one resolution is 20.13% (for 1366x768 pixels); far more users (27.84%) fall into the “other” category. We cannot design for individual devices, device types, or resolutions; we must instead allow our designs to *respond* to the users’ viewing context.

[^2]: Not making sites accessible risks excluding a large number of users: [according to the Canadian government](http://www4.rhdcc.gc.ca/indicator.jsp?&indicatorid=40), 13.7% of the population has a disability. Furthermore, we are required by law (The [Accessibility for Ontarians with Disabilities Act, 2005](http://www.e-laws.gov.on.ca/html/statutes/english/elaws_statutes_05a11_e.htm)) to make all our websites accessible. We do this by adhering to the [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) and other industry standards.

[^3]: Using progressive enhancement facilitates making responsive and accessible websites, and also helps us make websites that work with the wide variety of browsers in use. We see similar variety in browser versions as we do in screen resolution; [StatCounter](http://gs.statcounter.com/) tracks 12 popular browser versions with significant usage, the highest being “Android 0” at 6.38%. The largest segment is, again, the “Other” category, with 48.1%. Progressive enhancement with feature detection allows us to accomodate this variability and offer good experiences to users no matter what their browser and version.

[^4]: “Involve Users in Establishing User Requirements: Involve users to improve the completeness and accuracy of user requirements. One of the basic principles of user-centered design is the early and continual focus on users. For this reason, user involvement has become a widely accepted principle in the development of usable systems. Involving users has the most value when trying to improve the completeness and accuracy of user requirements. It is also useful in helping to avoid unused or little-used system features. Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 4, Involve Users in Establishing User Requirements”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/4](http://guidelines.usability.gov/guidelines/4). Accessed 2014-07-28.

[^5]: Using a usability tester without a vested interest in the project avoids injecting bias. From Rubin & Chisnell, *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*, 2008, ‘Chapter 9. Conduct the Test Sessions’: “Take the attitude that you have no vested interest in the results one way or the other. Present the product neutrally (this does not mean you need to be solemn), so that the participants cannot ascertain any preference on your part. Never indicate through your speech or mannerisms that you strongly approve or disapprove of any actions or comments offered by a particular participant. React to ‘mistakes’ or ‘wrong turns’ in exactly the same way as you do to correct behavior. Never make participants feel stupid or inadequate (even inadvertently) by how you respond to their actions. If a participant is having problems, remember that it is the fault of the product. Period. Even if you say and do all the right things, participants will still blame themselves. If that happens, remind them of the value of their difficulties in understanding how the product actually works. Encourage them to freely explore areas without concern for ‘looking good.’”

[^6]: In software development, this is known as [Bikeshedding](https://en.wikipedia.org/wiki/Parkinson%27s_Law_of_Triviality).

[^7]: “Consider Many User Interface Issues: Consider as many user interface issues as possible during the design process. Consider numerous usability-related issues during the creation of a Web site. These can include: the context within which users will be visiting a Web site; the experience levels of the users; the types of tasks users will perform on the site; the types of computer and connection speeds used when visiting the site; evaluation of prototypes; and the results of usability tests.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 7, Consider Many User Interface Issues”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/7](http://guidelines.usability.gov/guidelines/7). Accessed 2014-07-28.

[^8]: “Establish User Requirements: Use all available resources to better understand users’ requirements. The greater the number of exchanges of information with potential users, the better the developers' understanding of the users' requirements. The more information that can be exchanged between developers and users, the higher the probability of having a successful website. These could include customer support lines, customer surveys and interviews, bulletin boards, sales people, user groups, trade show experiences, focus groups, etc. Successful projects require at least four (and average five) different sources of information. Do not rely too heavily on user intermediaries. The information gathered from exchanges with users can be used to build 'use cases'. Use cases describe the things that users want and need the website to be able to do. In one study, when compared with traditional function-oriented analyses, use cases provided a specification that produced better user performance and higher user preferences.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 2, Establish User Requirements”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/2](http://guidelines.usability.gov/guidelines/2). Accessed 2014-07-28.

[^9]: This is often referred to as “eating your own dogfood” or [dogfooding](http://en.wikipedia.org/wiki/Dogfooding).

[^10]: “Set and State Goals: Identify and clearly articulate the primary goals of the Web site before beginning the design process. Before starting design work, identify the primary goals of the website (educate, inform, entertain, sell, etc.). Goals determine the audience, content, function, and the site’s unique look and feel. It is also a good idea to communicate the goals to, and develop consensus for the site goals from management and those working on the website.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 5, Set and State Goals”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/5](http://guidelines.usability.gov/guidelines/5). Accessed 2014-07-28.

[^11]: “Set Usability Goals: Set performance goals that include success rates and the time it takes users to find specific information, or preference goals that address satisfaction and acceptance by users. Setting user performance and/or preference goals helps developers build better Web sites. It can also help make usability testing more effective. For example, some intranet Web sites have set the goal that information will be found eighty percent of the time and in less than one minute.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 9, Set Usability Goals”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/9](http://guidelines.usability.gov/guidelines/9). Accessed 2014-07-28.

[^12]: “Understand and Meet User’s Expectations: Ensure that the website format meets user expectations, especially related to navigation, content, and organization. Users define ‘usability’ as their perception of how consistent, efficient, productive, organized, easy to use, intuitive, and straightforward it is to accomplish tasks within a system. It is important for designers to develop an understanding of their users expectations through task analyses and other research. Users can have expectations based on their prior knowledge and past experience. The use of familiar formatting and navigation schemes makes it easier for users to learn and remember the layout of a site. Assume that certain users will not use a website frequently enough to learn to use it efficiently. Therefore, use familiar conventions.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 3, Understand and Meet User’s Expectations”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/3](http://guidelines.usability.gov/guidelines/3). Accessed 2014-07-28.

[^13]: “Provide Useful Content: Provide content that is engaging, relevant, and appropriate to the audience. Content is the information provided on a Web site. Do not waste resources providing easy access and good usability to the wrong content. One study found that content is the most critical element of a Web site. Other studies have reported that content is more important than navigation, visual design, functionality, and interactivity.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 1, Provide Useful Content”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/1](http://guidelines.usability.gov/guidelines/1). Accessed 2014-07-28.

[^14]: “Be Easily Found in the Top 30: In order to have a high probability of being accessed, ensure that a Web site is in the 'top 30' references presented from a major search engine. One study showed that users usually do not look at Web sites that are not in the 'top 30'. Some of the features required to be in the 'top 30' include appropriate meta-content and page titles, the number of links to the Web site, as well as updated registration with the major search engines.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 8, Be Easily Found in the Top 30”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/8](http://guidelines.usability.gov/guidelines/8). Accessed 2014-07-28.

[^15]: “Focus on Performance Before Preference: If user performance is important, make decisions about content, format, interaction, and navigation before deciding on colors and decorative graphics. Focus on achieving a high rate of user performance before dealing with aesthetics. Graphics issues tend to have little impact, if any, on users' success rates or speed of performance.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 6, Focus on Performance Before Preference”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/6](http://guidelines.usability.gov/guidelines/6). Accessed 2014-07-28.
