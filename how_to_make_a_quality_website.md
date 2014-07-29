# How to make a quality website

*David Newton  
for the Knowledge Translation Program, St. Michael’s Hospital  
With feedback and contributions from Sharon Straus, Wai-Hin Chan, and Nikolas LeBlanc  
2014-07-29*

This document lives at [https://github.com/knowledgetranslation/process/](https://github.com/knowledgetranslation/process/). Please check there for the most up-to-date version.

---

This process has lots of padding and failsafes built-in. Every project always runs over-time, over-budget, and under-scope. The padding and failsafes should help mitigate the consequences of unexpected barriers.

Many of the references in this document cite [usability.gov](http://usability.gov), a secondary source for evidence-based web development. The [usability.gov](http://usability.gov) pages cited here contain examples and references to primary research sources, as well as indicators of relative importance and strength of evidence.

[usability.gov](http://usability.gov) also contains many guidelines, templates, and methods not covered here, that may be useful to review as part of your research steps. Note, though, that some of their recommendations are out of date and are no longer considered best practice, especially:

* [Chapter 4: Hardware and Software](http://guidelines.usability.gov/chapters/4/introduction)

* [5:7 Limit Homepage Length](http://guidelines.usability.gov/guidelines/52)

* [6:13 Use Frames when Functions Must Remain Accessible](http://guidelines.usability.gov/guidelines/66)[^1]

* [13:19 Place Cursor in First Data Entry Field](http://guidelines.usability.gov/guidelines/144)

* [14:7 Limit Large Images Above the Fold](http://guidelines.usability.gov/guidelines/156)

Another oft-cited and useful resource is [The W3C Recommendation on Mobile Web Best Practices](http://www.w3.org/TR/mobile-bp/), an evidence-based guideline that also includes references to other secondary and primary sources.




## Principles

These principles should be examined and considered before the project starts, when the project ends, and at every step in between. At every step, every team member should consider how the principle applies to the step as a whole, and to their work in that step.

1. Every website needs to be [responsive](https://en.wikipedia.org/wiki/Responsive_web_design)[^2],[^3], every website needs to be [accessible](https://en.wikipedia.org/wiki/Web_accessibility)[^4],[^5], every website needs to use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_Enhancement)[^6],[^7].

1. Every stakeholder is a team member and every team member is a stakeholder.[^8]

	* Exception: Usability tests should, ideally, be conducted and summarized by people completely separate from the rest of the team, to avoid bias.
	
		If the team members are the ones conducting usability tests, every effort should be made to avoid bias in testing.[^9]

1. Involve all stakeholders at every step of the project, every meeting, and every decision point. Everybody should have the *opportunity* to participate.
	
	* Involvement should be discussed and agreed upon at the first meeting, and the team should make decisions about what the expectations are for every team member, and what the timelines for response are.

	* For some parts of the project, a team member’s involvement will be mandatory, for others optional; but, every team member should have the option to participate in every stage.

	* Involvement does not simply equal presence. Every team member should have the option of *participating actively*, and should be encouraged to do so.

	* e.g. designers should be involved during content creation, developers should be involved while creating timelines, users should be involved while planning scope[^10], etc.

1. Trust the expertise of your experts, *in their area of expertise*. Being an expert in one area doesn’t make somebody an expert in another area.

	* e.g. a content expert is not a designer; a developer is not a scientist

1. Don’t give disproportionate or inappropriate weight to trivial issues.[^11]

	* As an example, holding a meeting to discuss a typeface or the colour of a design element is probably not the best use of the team’s time. Instead, focus on content, functionality, and usability.
	
1. Remember the [Priority of Constituencies](http://www.w3.org/TR/html-design-principles/#priority-of-constituencies), a founding web design principle encoded by the World Wide Web Consortium and Web Hypertext Application Technology Working Group (the organizations responsible for web standards):

	> In case of conflict, consider users over authors over implementors over specifiers over theoretical purity. In other words costs or difficulties to the user should be given more weight than costs to authors; which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone. Of course, it is preferred to make things better for multiple constituencies at once.
	
	* The original principle defines “authors” as web authors, i.e. web developers and designers who are building a site; “implementors” as browser implementors, i.e. software developers who build web browsers; and “specifiers” as those writing web standards specifications.
	
	* For our projects, we can alter these definitions while still retaining the spirit of the principle. “Specifiers” would be those team members who are responsible for planning, and “implementors” would be those responsible for content; the definitions for “users”, “authors”, and “theoretical purity” can remain unchanged.
	
	* With these new definitions, we can resolve conflicts by giving more weight to costs/difficulties affecting users over developers/designers over content creators over planners over theoretical purity. But, as always, solutions should ideally improve things for multiple/all constituencies.
	
	* Note that this principle does not mean we should always defer to what each constituency wants or says they want; it means that in cases of conflict we should look at evidence and use that evidence to prioritize benefits to users over authors, etc.[^12] We always prioritize evidence over expert opinion.

1. No single user is more important than another user.[^13] 

	* e.g. mobile users need the same access to the same content as desktop users, disabled users need the same access to the same content as able users, etc.

1. Usability tests are for identifying problems, not for generating suggestions.

	* Users might think they know how to solve these problems, but they may be wrong. They aren’t the experts in tool development, you are. *However*, they may be knowledge experts in the context of the tool usage.

	* Usability test summaries focus on identifying 	problems rather than solutions. While user-suggested solutions should be considered, final decisions on solutions should be decided by experts on your team.
	
	* “Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”[^14]

1. Usability testing should only ever focus on one area at a time, e.g. either content, look-and-feel, or functionality. If you want to test multiple areas, conduct separate usability tests.

	* Usability tests should have specific performance and success goals.[^15]

1. You’re building for the web, so use web-compatible technologies.

	* Create content using plain text, [Markdown](https://en.wikipedia.org/wiki/Markdown), or HTML; not in Microsoft Word (and especially not PDFs or PowerPoint).

	* If possible, design *in the browser* using CSS, not in software designed for print, like Photoshop, Illustrator, or InDesign (and especially not in non-design software like PowerPoint, Word, etc).
	
	* Define design in terms of web units, e.g. colours as hex values, sizes and distances in pixels and ems, etc.

	* Collaborate using version control software and services like GitHub, not by emailing and turning on Track Changes in Microsoft Word.

1. Make sure all designs account for and define all interactions and states (clicks, hovers, transitions, etc.).

1. Build everything (content, design, development) modularly: you’ll probably be on another project where you can re-use components.

1. Avoid social components (e.g. forums, chat, blogs, social media) when possible.

1. Avoid requiring users to log in with a username and password.

	* If a password cannot be avoided, show it in plain text with an option to obscure it[^16] and provide an automated way for users to reset their own passwords.

1. Document everything you do at every step and use version control software for every piece.

1. Everybody should track their hours. Ideally hours should be tracked according to specific tasks. One good way to do this is to make every task a GitHub issue, and associate all hours with specific issues.

	* Tracking the time it takes to create each feature can help with scoping and budgeting future projects.

1. Publish what you publish. Knowledge translation depends on dissemination; we need share what we’re creating[^17].

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

1. Using your operating budget and timelines as guides, determine the ideal project scope[^18], then reduce it by half. This is your scope for *this phase*.

	* A focused project is more likely to be successful, and there will always be time for more phases later.
	
	* It may be best to think of each phase as a collection of specific features. E.g., Phase 1 might be a collection of static content pages, Phase 2 might add videos or other interactive content, etc.
	
	* Remember to consider *all* the steps in this document when considering timelines, including multiple rounds of usability and testing.

1. Plan exactly what data you’d like collected for research, testing, and development/planning purposes, and define why you need it. Then, for each of these, plan to collect more data than you think you’ll need.

	* If possible, try to collect as much data as possible anonymously. Identifiable data should be avoided whenever possible.
	
	* If you’re collecting data, write a privacy policy and submit it to REB/legal, and make sure to include it in the publicly-available content you develop in the **Content** steps.

1. Research

	* Study the data collected from other projects and earlier versions of this project, and interview stakeholders (especially users). Determine what content and features are important to whom and why, how they will be used, and where they will be accessed from.[^14],[^19]
	
	* Every team member should spend at least one full day reading about their area of focus (and especially about how it applies to the web), and another full day about an area on which they aren’t focusing and/or aren’t an expert. This helps ensure that everybody’s knowledge is current and continues to grow.
	
1. Create user personas based on your research, that reflect different types of typical and atypical users.

	* Remember that these form a useful but incomplete subset of your users; real users will never behave as you expect, nor should they.

1. Do the **Content** steps.

1. Do the **Design** steps.

1. Do the **Development** steps.

1. Create a launch plan.

	* If this is an update to an existing site, develop a plan for how users will transition to the new version. Give them options to opt-in to the new version early, and opt-out for a set period after launch. Plan specific changeover dates and stick to them. Create and make available change documentation explaining what has changed and why.[^20],[^21]
	
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



### Content

1. Develop or choose an existing style guide for content, *before* you actually start creating any of the content.[^22]

	* Making already-created content conform to your style guide is much more work than developing content with a style guide already in-place.
	
1. Information Architecture: create a plan for how your content will be structured, both at a high-level (e.g. site navigation), and a low-level (e.g. sections within documents/pages). Then, reduce the complexity of your Information Architecture by half.[^23],[^24],[^25],[^26]

	* Content should be structured as simply as possible to help users find what they’re looking for.[^25],[^26]
	
1. Create your content, in compliance with your style guide and Information Architecture, and keeping in mind your user personas. Then, delete half the content.[^27]

	* Your users usually have very specific goals when visiting a web site. Don’t clutter their experience, and don’t give them what they don’t need.[^19],[^28],[^27],[^29]

1. Conduct usability testing on the content. Can users understand it and get the info they need?[^14]

	* Try to test with *real* users, and/or users that closely match each of your personas.[^10]
	
1. Revise the content based on the usability test feedback.

1. Update the project’s style guide with any content and IA details that weren’t previously accounted for.



### Design

1. Create basic, works-for-everybody design templates that account for all the content and work well for all users, regardless of:

	* Printed vs. on-screen[^30],[^31],[^32]
	* Device, e.g. phone, tablet, desktop, laptop, etc.[^7]
	* Browser, e.g. modern IE, obsolete IE, Firefox, Chrome, Safari, Opera, etc.
	* Connection speed, e.g. high-speed/broadband, LTE, 3G, 2G, etc.
	* Ability, e.g. using a mouse, using a keyboard, without assistive technology, with a screenreader, etc.
	* Javascript and plugin support/availability[^33],[^34]
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
	
	This isn’t the “showcase” design, this is the fallback, lowest-common-denominator design.[^13]

1. Perform the **Design validation substeps**

1. Create “showcase” design templates for how everything should look in a mobile browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.[^39]

1. Perform the **Design validation substeps**

1. Create “showcase” design templates for how everything should look in a desktop browser in the best possible case: modern device, modern browser, fast connection, available JavaScript.

1. Perform the **Design validation substeps**

1. Design “showcase” design templates for how everything should look when printed in the best possible case: modern device, modern browser, available JavaScript.[^30],[^31],[^32]

1. Perform the **Design validation substeps**

1. Document in detail how each element of each template progressively enhances from the fallback design to the mobile design to the desktop design. Make sure there is complete content- and functionality-parity between all three designs, and that it’s clear how each element adjusts in changing circumstances.

	* This process will probably require creating a few extra alternate design templates at different “breakpoints”, i.e. an adjustment when something breaks or looks bad at a certain size or when a certain feature is/isn’t supported. Always create these alternate templates based on breakpoints and not specific devices.
	
1. Update the style guide with any design information not previously entered.


#### Design validation substeps

1. Cut the number of templates in half, and for each remaining template, cut the number of user interace elements in half[^35]. Double the font size, and double the white space.[^36],[^37]

1. Conduct usability testing on this design, using paper prototypes.[^13],[^19],[^38]

	* Try to test with *real* users, and/or users that closely match each of your personas.[^10]
	
	* Test both previous and new testers if possible.
	
1. Revise the design based on usability feedback.

1. Based on this design, update the project’s style guide with relevant design details, e.g. typefaces, colours, grid definitions, sizes, interactions, etc.



### Development

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

	* Ensuring proper meta-information and titles have been used for all pages, including the use of structured data (e.g. [schema.org](http://schema.org/)).[^40]

	* Creating a sitemap.

	* Using search engine submission tools, such as [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en).

	Note that the best ways to achieve high-ranking search results are to have high quality content; semantic, validated code; and high performance. All of these should have been handled before this point in the process.
	
1. Create a “help” section.[^41],[^42]

	* If any parts of your “help” section get very complex, consider simplifying the design/functionality to require less explanation. This may require returning to an earlier step.
	
1. Perform the **Testing** steps.


#### Development validation substeps

1. Perform the **Testing** steps.
	
1. Conduct usability testing on these templates, using real browsers/devices *of the users’ choice*.

	* Conduct separate usability sessions geared at how it looks and how it works.

	* Try to test with *real* users, and/or users that closely match each of your personas.[^10]
	
	* Test both previous and new testers if possible.

1. Revise based on usability testing.

1. Perform the **Testing** steps.
	
1. Update the style guide with any new information that hasn’t previously been included.



### Testing

1. Test the templates in as many browsers as possible[^20], on as many devices as possible, with as many assistive technologies as possible. Make sure everything functions as it should and looks ok (though not necessarily pixel perfect!).

	* Prioritize testing with real browsers and devices, and only use emulators/simulators if the real thing is unavailable.[^43]
	
	* While testing, take screenshots of every template in every browser/device combination. Save these.
	
	* Make sure multiple team members test. Fresh eyes are crucial.

1. Fix any problems that arose during browser testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated markup[^44] and accessibility[^5] validation.

1. Fix any problems that arose during validity testing.

	* If there were problems to fix, return to step 1.

1. Conduct automated performance testing[^45],[^46],[^47],[^48],[^49].

1. Fix any problems that arose during performance testing.

	* Good performance should take priority over good aesthetics. Ideally you can achieve both, but in cases of conflict, optimize for performance.[^50]

	* If there were problems to fix, return to step 1.




## Notes

[^1]: “Do not use frames. Many mobile devices do not support frames. In addition, frames are recognized as being generally problematic.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#NO_FRAMES](http://www.w3.org/TR/mobile-bp/#NO_FRAMES). Accessed 2014-07-29.

[^2]: Given the variability in how users access the web, responsive design has become an industry standard; sites need to be responsive because we cannot account for how a user will be using a site. Not designing responsively risks excluding a large number of users. According to [StatCounter](http://gs.statcounter.com/), in June 2014 mobile web usage is 26.64% (up from 15.31% in June 2013), tablet web usage is 6.4% (up from 4.65% in June 2013). Moreover, according to [OurMobilePlanet](http://think.withgoogle.com/mobileplanet/en/graph/?country=ca&category=MOBI&topic=Q09B&stat=Q09B_1&wave=2013&age=all&gender=all&chart_type=&active=stat), 74% of Canadians access the web from their mobile devices daily. However, these discrete, broad categories can also obfuscate the fact that “mobile” and “tablet” aren’t really consistent; screen resolution varies wildly. [StatCounter](http://gs.statcounter.com/) also tracks 14 separate screen resolutions that people use to access the web in signficant numbers, but the highest percentage of access for any one resolution is 20.13% (for 1366x768 pixels); far more users (27.84%) fall into the “other” category. We cannot design for individual devices, device types, or resolutions; we must instead allow our designs to *respond* to the users’ viewing context.

[^3]: “…One Web means making, as far as is reasonable, the same information and services available to users irrespective of the device they are using. However, it does not mean that exactly the same information is available in exactly the same representation across all devices. The context of mobile use, device capability variations, bandwidth issues and mobile network capabilities all affect the representation. Furthermore, some services and information are more suitable for and targeted at particular user contexts… Some services have a primarily mobile appeal (location based services, for example). Some have a primarily mobile appeal but have a complementary desktop aspect (for instance for complex configuration tasks). Still others have a primarily desktop appeal but a complementary mobile aspect (possibly for alerting). Finally there will remain some Web applications that have a primarily desktop appeal (lengthy reference material, rich images, for example). It is likely that application designers and service providers will wish to provide the best possible experience in the context in which their service has the most appeal. However, while services may be most appropriately experienced in one context or another, it is considered best practice to provide as reasonable experience as is possible given device limitations and not to exclude access from any particular class of device, except where this is necessary because of device limitations.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#d0e347](http://www.w3.org/TR/mobile-bp/#d0e347). Accessed 2014-07-29.

[^4]: Not making sites accessible risks excluding a large number of users: [according to the Canadian government](http://www4.rhdcc.gc.ca/indicator.jsp?&indicatorid=40), 13.7% of the population has a disability. Furthermore, we are required by law (The [Accessibility for Ontarians with Disabilities Act, 2005](http://www.e-laws.gov.on.ca/html/statutes/english/elaws_statutes_05a11_e.htm)) to make all our websites accessible. We do this by adhering to the [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) and other industry standards.

[^5]: “Web sites should be designed to ensure that everyone, including users who have difficulty seeing, hearing, and making precise movements, can use them. Generally, this means ensuring that Web sites facilitate the use of common assistive technologies.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 3: Accessibility”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/chapters/3/introduction](http://guidelines.usability.gov/chapters/3/introduction). Accessed 2014-07-28.

[^6]: Using progressive enhancement facilitates making responsive and accessible websites, and also helps us make websites that work with the wide variety of browsers in use. We see similar variety in browser versions as we do in screen resolution; [StatCounter](http://gs.statcounter.com/) tracks 12 popular browser versions with significant usage, the highest being “Android 0” at 6.38%. The largest segment is, again, the “Other” category, with 48.1%. Progressive enhancement with feature detection allows us to accomodate this variability and offer good experiences to users no matter what their browser and version.

[^7]: “Take reasonable steps to work around deficient implementations.… Just as it is not the intention to recommend a least common denominator approach, neither is it the intention to recommend avoiding features that exhibit problems on some class of devices. It is also not the intention to suggest that content providers should restrict their support to certain device types. Content providers should aim to support as wide a range of device types as is practical.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#DEFICIENCIES](http://www.w3.org/TR/mobile-bp/#DEFICIENCIES). Accessed 2014-07-29.

[^8]: “Involve Users in Establishing User Requirements: Involve users to improve the completeness and accuracy of user requirements. One of the basic principles of user-centered design is the early and continual focus on users. For this reason, user involvement has become a widely accepted principle in the development of usable systems. Involving users has the most value when trying to improve the completeness and accuracy of user requirements. It is also useful in helping to avoid unused or little-used system features. Users are most valuable in helping designers know what a system should do, but not in helping designers determine how best to have the system do it.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 4, Involve Users in Establishing User Requirements”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/4](http://guidelines.usability.gov/guidelines/4). Accessed 2014-07-28.

[^9]: Using a usability tester without a vested interest in the project avoids injecting bias. From Rubin & Chisnell, *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*, 2008, ‘Chapter 9. Conduct the Test Sessions’: “Take the attitude that you have no vested interest in the results one way or the other. Present the product neutrally (this does not mean you need to be solemn), so that the participants cannot ascertain any preference on your part. Never indicate through your speech or mannerisms that you strongly approve or disapprove of any actions or comments offered by a particular participant. React to ‘mistakes’ or ‘wrong turns’ in exactly the same way as you do to correct behavior. Never make participants feel stupid or inadequate (even inadvertently) by how you respond to their actions. If a participant is having problems, remember that it is the fault of the product. Period. Even if you say and do all the right things, participants will still blame themselves. If that happens, remind them of the value of their difficulties in understanding how the product actually works. Encourage them to freely explore areas without concern for ‘looking good.’”

[^10]: Web Accessibility Initiative. *Involving Users in Web Projects for Better, Easier Accessibility*. [http://www.w3.org/WAI/users/involving](http://www.w3.org/WAI/users/involving). Accessed 2014-07-29.

[^11]: In software development, this is known as [Bikeshedding](https://en.wikipedia.org/wiki/Parkinson%27s_Law_of_Triviality).

[^12]: “Reduce User’s Workload: Allocate functions to take advantage of the inherent respective strengths of computers and users. Let the computer perform as many tasks as possible, so that users can concentrate on performing tasks that actually require human processing and input. Ensure that the activities performed by the human and the computer take full advantage of the strengths of each. For example, calculating body mass indexes, remembering user IDs, and mortgage payments are best performed by computers.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 4, Reduce User’s Workload”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/15](http://guidelines.usability.gov/guidelines/15). Accessed 2014-07-28.

[^13]: “Consider Many User Interface Issues: Consider as many user interface issues as possible during the design process. Consider numerous usability-related issues during the creation of a Web site. These can include: the context within which users will be visiting a Web site; the experience levels of the users; the types of tasks users will perform on the site; the types of computer and connection speeds used when visiting the site; evaluation of prototypes; and the results of usability tests.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 7, Consider Many User Interface Issues”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/7](http://guidelines.usability.gov/guidelines/7). Accessed 2014-07-28.

[^14]: “Establish User Requirements: Use all available resources to better understand users’ requirements. The greater the number of exchanges of information with potential users, the better the developers’ understanding of the users’ requirements. The more information that can be exchanged between developers and users, the higher the probability of having a successful website. These could include customer support lines, customer surveys and interviews, bulletin boards, sales people, user groups, trade show experiences, focus groups, etc. Successful projects require at least four (and average five) different sources of information. Do not rely too heavily on user intermediaries. The information gathered from exchanges with users can be used to build ‘use cases’. Use cases describe the things that users want and need the website to be able to do. In one study, when compared with traditional function-oriented analyses, use cases provided a specification that produced better user performance and higher user preferences.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 2, Establish User Requirements”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/2](http://guidelines.usability.gov/guidelines/2). Accessed 2014-07-28.

[^15]: “Set Usability Goals: Set performance goals that include success rates and the time it takes users to find specific information, or preference goals that address satisfaction and acceptance by users. Setting user performance and/or preference goals helps developers build better Web sites. It can also help make usability testing more effective. For example, some intranet Web sites have set the goal that information will be found eighty percent of the time and in less than one minute.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 9, Set Usability Goals”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/9](http://guidelines.usability.gov/guidelines/9). Accessed 2014-07-28.

[^16]: “Allow Users to See Their Entered Data: Create data entry fields that are large enough to show all of the entered data without scrolling. Users should be able to see their entire entry at one time. There always will be some users who will enter more data than can be seen without scrolling; however, try to minimize the need to scroll or move the cursor to see all the data entered in a field. If there is a character limit for a particular field, state that near the entry field. Designers should be particularly aware of the length of data entry fields used for entering search terms. One study found that this entry field should be at least 35-40 characters long to accommodate ninety-five percent of search terms being used.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 13: Screen-Based Controls (Widgets); Section 8, Allow Users to See Their Entered Data”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/133](http://guidelines.usability.gov/guidelines/133). Accessed 2014-07-29.

[^17]: This is often referred to as “eating your own dogfood” or [dogfooding](http://en.wikipedia.org/wiki/Dogfooding).

[^18]: “Set and State Goals: Identify and clearly articulate the primary goals of the Web site before beginning the design process. Before starting design work, identify the primary goals of the website (educate, inform, entertain, sell, etc.). Goals determine the audience, content, function, and the site’s unique look and feel. It is also a good idea to communicate the goals to, and develop consensus for the site goals from management and those working on the website.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 5, Set and State Goals”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/5](http://guidelines.usability.gov/guidelines/5). Accessed 2014-07-28.

[^19]: “Understand and Meet User’s Expectations: Ensure that the website format meets user expectations, especially related to navigation, content, and organization. Users define ‘usability’ as their perception of how consistent, efficient, productive, organized, easy to use, intuitive, and straightforward it is to accomplish tasks within a system. It is important for designers to develop an understanding of their users expectations through task analyses and other research. Users can have expectations based on their prior knowledge and past experience. The use of familiar formatting and navigation schemes makes it easier for users to learn and remember the layout of a site. Assume that certain users will not use a website frequently enough to learn to use it efficiently. Therefore, use familiar conventions.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 3, Understand and Meet User’s Expectations”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/3](http://guidelines.usability.gov/guidelines/3). Accessed 2014-07-28.

[^20]: “Announce Changes to a Web Site: Announce major changes to a Web site on the homepage - do not surprise users. Introducing users to a redesigned Web site can require some preparation of expectations. Users may not know what to do when they are suddenly confronted with a new look or navigation structure. Therefore, you should communicate any planned changes to users ahead of time. Following completion of changes, tell users exactly what has changed and when the changes were made. Assure users that all previously available information will continue to be on the site. It may also be helpful to users if you inform them of site changes at other relevant places on the Web site. For example, if shipping policies have changed, a notification of such on the order page should be provided.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 5: The Home Page; Section 8, Announce Changes to a Web Site”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/53](http://guidelines.usability.gov/guidelines/53). Accessed 2014-07-28.

[^21]: Lewis, Makayla (2013). Cerebral palsy, online social networks and change. (Unpublished Doctoral thesis, City University London). http://openaccess.city.ac.uk/3011/. Accessed 2014-07-28. Summary available at [http://www.slideshare.net/MakaylaLewis1/makayla-lewis-a11y-to-april-2014publicversion](http://www.slideshare.net/MakaylaLewis1/makayla-lewis-a11y-to-april-2014publicversion). Accessed 2014-07-28.

[^22]: “Format Common Items Consistently: Ensure that the format of common items is consistent from one page to another. The formatting convention chosen should be familiar to users. For example, telephone numbers should be consistently punctuated (800-555-1212), and time records might be consistently punctuated with colons (HH:MM:SS).”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 11: Text Appearance; Section 2, Format Common Items Consistently”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/107](http://guidelines.usability.gov/guidelines/107). Accessed 2014-07-29.

[^23]: “Structure for Easy Comparison: Structure information so that it can be easily scanned and compared. Users should be able to compare two or more items without having to remember one while going to another page or another place on the same page to view a different item.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 4, Structure for Easy Comparison”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/58](http://guidelines.usability.gov/guidelines/58). Accessed 2014-07-28.

[^24]: “Establish Level of Importance: Establish a high-to-low level of importance for information and infuse this approach throughout each page on the Web site. The page layout should help users find and use the most important information. Important information should appear higher on the page so users can locate it quickly. The least used information should appear toward the bottom of the page. Information should be presented in the order that is most useful to users. People prefer hierarchies, and tend to focus their attention on one level of the hierarchy at a time. This enables them to adopt a more systematic strategy when scanning a page, which results in fewer revisits.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 5, Establish Level of Importance”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/59](http://guidelines.usability.gov/guidelines/59). Accessed 2014-07-28.

[^25]: “Organization Information Clearly: Organize information at each level of the Web site so that it shows a clear and logical structure to typical users. Designers should present information in a structure that reflects user needs and the site’s goals. Information should be well-organized at the Web site level, page level, and paragraph or list level. Good Web site and page design enables users to understand the nature of the site’s organizational relationships and will support users in locating information efficiently. A clear, logical structure will reduce the chances of users becoming bored, disinterested, or frustrated.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 1, Organization Information Clearly”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/177](http://guidelines.usability.gov/guidelines/177). Accessed 2014-07-29.

[^26]: “Minimize the Number of Clicks or Pages: To allow users to efficiently find what they want, design so that the most common tasks can be successfully completed in the fewest number of clicks. Provide critical information as close to the homepage as possible. Important information should be available within two or three clicks - the greater the number of clicks, the greater the likelihood that users will make incorrect choices.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 5, Minimize the Number of Clicks or Pages”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/181](http://guidelines.usability.gov/guidelines/181). Accessed 2014-07-29.

[^27]: “Display Only Necessary Information: Limit page information only to that which is needed by users while on that page. Do not overload pages or interactions with extraneous information. Displaying too much information may confuse users and hinder assimilation of needed information. Allow users to remain focused on the desired task by excluding information that task analysis and usability testing indicates is not relevant to their current task. When user information requirements cannot be precisely anticipated by the designer, allow users to tailor displays online.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 16: Content Organization; Section 7, Display Only Necessary Information”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/183](http://guidelines.usability.gov/guidelines/183). Accessed 2014-07-29.

[^28]: “Provide Useful Content: Provide content that is engaging, relevant, and appropriate to the audience. Content is the information provided on a Web site. Do not waste resources providing easy access and good usability to the wrong content. One study found that content is the most critical element of a Web site. Other studies have reported that content is more important than navigation, visual design, functionality, and interactivity.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 1, Provide Useful Content”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/1](http://guidelines.usability.gov/guidelines/1). Accessed 2014-07-28.

[^29]: “Users in a mobile context are often looking for specific pieces of information, rather than browsing. Content providers should consider the likely context of use of information and, while providing the option to access all information, should offer appropriate information first.… The general prescription to use clear language is of particular importance for mobile delivery, where brevity and directness are generally more desirable than a discursive style. Writing content in the traditional journalistic ‘front loaded’ style can assist users determining whether information is of interest to them and allow them to skip it more easily if it is not. Placing distinguishing information at the beginning of headings, paragraphs, lists, etc. can also help the user contextualize when using devices with limited screen area.… Mobile users often pay for bandwidth, so offering them content that is extraneous to their needs, especially advertising, costs them time and money and contributes to an unsatisfactory experience. In general, the user’s consent should be sought before initiating the download of content.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#cl](http://www.w3.org/TR/mobile-bp/#TESTING). Accessed 2014-07-29.

[^30]: “Format Information for Reading and Printing: Prepare information with the expectation that it will either be read online or printed. Prepare documents so that they can be read online or printed. Online documents can be read anywhere and at any time. However, users prefer to print documents that are five or more pages long, can be read at a later time, support presentations or research, or contain complex information requiring notes or highlighting.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 9, Format Information for Reading and Printing”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/20](http://guidelines.usability.gov/guidelines/20). Accessed 2014-07-28.

[^31]: “Develop Pages that Will Print Properly: If users are likely to print one or more pages, develop pages with widths that print properly. It is possible to display pages that are too wide to print completely on standard 8.5 x 11 inch paper in portrait orientation. Ensure that margin to margin printing is possible.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 12, Develop Pages that Will Print Properly”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/23](http://guidelines.usability.gov/guidelines/23). Accessed 2014-07-28.

[^32]: “Provide Printing Options: Provide a link to printable and downloadable document versions. Many users prefer to read text from a paper copy of a document. Paper allows users to take notes, highlight ideas, follow presentations, and save information that may be difficult to find at a later time.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 15, Provide Printing Options”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/26](http://guidelines.usability.gov/guidelines/26). Accessed 2014-07-28.

[^33]: “Test Plug-Ins and Applets for Accessibility: To ensure accessibility, test any applets, plug-ins or other applications required to interpret page content to ensure that they can be used by assistive technologies. Applets, plug-ins and other software can create problems for people using assistive technologies, and should be thoroughly tested for accessibility.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 3: Accessibility; Section 6, Test Plug-Ins and Applets for Accessibility”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/33](http://guidelines.usability.gov/guidelines/33). Accessed 2014-07-28.

[^34]: “Do not rely on embedded objects or script.… Many mobile devices do not support embedded objects or script and in many cases it is not possible for users to load plug-ins to add support. Content must be designed with this in mind. Even where a device does support scripting, do not use it unless there is no other way of accomplishing your objectives. Scripting increases power consumption and so decreases battery life.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#OBJECTS_OR_SCRIPT](http://www.w3.org/TR/mobile-bp/#OBJECTS_OR_SCRIPT). Accessed 2014-07-29.

[^35]: “Standardize Task Sequences: Allow users to perform tasks in the same sequence and manner across similar conditions. Users learn certain sequences of behaviors and perform best when they can be reliably repeated. For example, users become accustomed to looking in either the left or right panels for additional information. Also, users become familiar with the steps in a search or checkout process.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 3, Standardize Task Sequences”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/14](http://guidelines.usability.gov/guidelines/14). Accessed 2014-07-28.

[^36]: “Avoid Cluttered Displays: Create pages that are not considered cluttered by users. Clutter is when excess items on a page lead to a degradation of performance when trying to find certain information. Studies have shown that users can find what they are looking for more quickly in a sparse and uncluttered display than in a dense display. On an uncluttered display, all important search targets are highly salient, i.e., clearly available. One study found that test participants tended to agree on which displays were least cluttered and those that were most cluttered.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 1, Avoid Cluttered Displays”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/55](http://guidelines.usability.gov/guidelines/55). Accessed 2014-07-28.

[^37]: “Optimize Display Density: To facilitate finding target information on a page, create pages that are not too crowded with items of information. Density can be defined as the number of items per degree of visual angle within a visually distinct group. This density either can be crowded with many items, or sparse with few items. One study found that locating a target in a crowded area took longer than when the target was in a sparse area. Also, participants searched and found items in the sparse areas faster than those in the crowded areas. Participants used fewer fixations per word in the crowded areas, but their fixations were much longer when viewing items in the crowded areas. Finally, participants tended to visit sparse areas before dense groups. To summarize, targets in sparse areas of the display (versus crowded areas) tended to be searched earlier and found faster.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 6: Page Layout; Section 6, Optimize Display Density”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/60](http://guidelines.usability.gov/guidelines/60). Accessed 2014-07-28.

[^38]: “Use an Iterative Design Approach: Develop and test prototypes through an iterative design approach to create the most useful and usable Web site. Iterative design consists of creating paper or computer prototypes, testing the prototypes, and then making changes based on the test results. The ’test and make changes’ process is repeated until the website meets performance benchmarks (usability goals). When these goals are met, the iterative process ends. The iterative design process helps to substantially improve the usability of websites, improve task completion rates, and improve user satisfaction.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 18: Usability Testing; Section 1, Use an Iterative Design Approach”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/194](http://guidelines.usability.gov/guidelines/194). Accessed 2014-07-29.

[^39]: “Exploit device capabilities to provide an enhanced user experience. While encouraging content providers to be sensitive to the needs of the Default Delivery Context, it is not intended that this will result in a diminished experience on more capable devices. Develop sites that target the Default Delivery Context. In addition, where appropriate, use device capabilities to provide a better user experience on more capable devices.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#CAPABILITIES](http://www.w3.org/TR/mobile-bp/#CAPABILITIES). Accessed 2014-07-29.

[^40]: “Be Easily Found in the Top 30: In order to have a high probability of being accessed, ensure that a Web site is in the ‘top 30’ references presented from a major search engine. One study showed that users usually do not look at Web sites that are not in the ‘top 30’. Some of the features required to be in the ‘top 30’ include appropriate meta-content and page titles, the number of links to the Web site, as well as updated registration with the major search engines.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 8, Be Easily Found in the Top 30”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/8](http://guidelines.usability.gov/guidelines/8). Accessed 2014-07-28.

[^41]: “Use Users’ Terminology in Help Documentation: Create ‘Help’ documentation using the users’ terminology to describe elements and features. Users have a colloquial understanding of website features, names and functions (e.g., breadcrumbs). Create ‘Help’ sections that address unfamiliar terms with the right amount of context. For example, if you refer to the ‘navigation bar,’ explain or highlight what you are referring. Remember that users and designers may use different terms to identify the same web features.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 14, Use Users’ Terminology in Help Documentation”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/25](http://guidelines.usability.gov/guidelines/25). Accessed 2014-07-28.

[^42]: “Provide Assistance to Users: Provide assistance for users who need additional help with the website. Some users require special assistance. This is particularly important if the site was designed for inexperienced users or has many first time users. For example, in one website that was designed for repeat users, more than one-third of users (thirty-six percent) were first time visitors. A special link was prepared that allowed new users to access more information about the content of the site and described the best way to navigate the site.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 16, Provide Assistance to Users”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/26](http://guidelines.usability.gov/guidelines/26). Accessed 2014-07-28.

[^43]: “Carry out testing on actual devices as well as emulators. Any Web site should be tested in a range of browsers. Mobile browsers often show markedly different characteristics to desktop browsers. As well as assessing a site’s suitability for display in reduced format, content providers are encouraged to test that the features they rely on work in actual devices. Content providers should also test with specific features disabled, such as using text-only modes and with scripting disabled. Many manufacturers provide emulators for their device that can provide a convenient preliminary means of testing. However, in practice, many of the emulators behave in a different way to the devices they emulate. Consequently testing should be carried out in as wide a range of real devices and specific software versions as is practical.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#TESTING](http://www.w3.org/TR/mobile-bp/#TESTING). Accessed 2014-07-29.

[^44]: “Create documents that validate to published formal grammars. If the page markup is invalid this will result in unpredictable and possibly incomplete presentation.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#VALID_MARKUP](http://www.w3.org/TR/mobile-bp/#VALID_MARKUP). Accessed 2014-07-29.

[^45]: “Minimize Page Download Time: Minimize the time required to download a Web site’s pages. The best way to facilitate fast page loading is to minimize the number of bytes per page.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 2: Optimizing the User Experience; Section 6, Minimize Page Download Time”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/17](http://guidelines.usability.gov/guidelines/17). Accessed 2014-07-28.

[^46]: “Ensure that Images Do Not Slow Downloads: Take steps to ensure that images do not negatively impact download speeds. Delays are frustrating to users. Strive to maintain download speeds to less than five seconds. To improve download speeds, use several small images rather than a single large image. Repeat images when possible, and save images with the ‘interlaced’ or ‘progressive’ option. Limit page sizes to less than 30,000 bytes. Minimize the number of different colors used in an image, and add pixel dimension tags (e.g., height and width) to the image reference. High Speed users may not notice anything different; however, these techniques will greatly improve download speeds for modem or hotspot users.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 14: Graphics, Images, and Multimedia; Section 3, Ensure that Images Do Not Slow Downloads”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/152](http://guidelines.usability.gov/guidelines/152). Accessed 2014-07-29.

[^47]: “Limit the Use of Images: Use images only when they are critical to the success of a Web site. Ensure that a Web site’s graphics add value and increase the clarity of the information on the site. Certain graphics can make some Web sites much more interesting for users, and users may be willing to wait a few extra seconds for them to load. Users tend to be most frustrated if they wait several seconds for a graphic to download, and then find that the image does not add any value. Some decorative graphics are acceptable when they do not distract the user.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 14: Graphics, Images, and Multimedia; Section 9, Limit the Use of Images”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/158](http://guidelines.usability.gov/guidelines/158). Accessed 2014-07-29.

[^48]: “Keep style sheets small.… Optimize style information so that only styles that are used are included.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#STYLE_SHEETS_SIZE](http://www.w3.org/TR/mobile-bp/#STYLE_SHEETS_SIZE). Accessed 2014-07-29.

[^49]: “Use terse, efficient markup.… Marking fonts, colors and other stylistic effects in-line can cause considerably larger page sizes when compared with using logical markup, and use of the HTML class attribute for application of style… While it is not intended that authors should create their content in a single line to remove white space altogether, it is suggested that authors should not contribute to page weight by introducing unnecessary white space. Note that ‘pretty printing’ (the formatting of markup with indentation) can generate large amounts of white space and hence add to page weight. If ‘pretty printing’ is an important part of the authoring process, then try to arrange that redundant white space is stripped when serving a page. Even though some network proxies strip white space that they think is redundant, not all do so, so it is not best practice to rely upon this behavior. Use of structural markup… contributes to minimizing the size of the markup on a page, as does centralizing the style descriptions using CSS.” –Rabin Jo, McCathie Nevile Charles (eds.), 2008. *Mobile Web Best Practices 1.0 Basic Guidelines*. W3C Recommendation 29 July 2008. [http://www.w3.org/TR/mobile-bp/#MINIMIZE](http://www.w3.org/TR/mobile-bp/#MINIMIZE). Accessed 2014-07-29.

[^50]: “Focus on Performance Before Preference: If user performance is important, make decisions about content, format, interaction, and navigation before deciding on colors and decorative graphics. Focus on achieving a high rate of user performance before dealing with aesthetics. Graphics issues tend to have little impact, if any, on users’ success rates or speed of performance.”  —U.S. Dept. of Health and Human Services. *The Research-Based Web Design & Usability Guidelines, Enlarged/Expanded edition*. “Chapter 1: Design Process and Evaluation; Section 6, Focus on Performance Before Preference”. Washington: U.S. Government Printing Office. [http://guidelines.usability.gov/guidelines/6](http://guidelines.usability.gov/guidelines/6). Accessed 2014-07-28.
