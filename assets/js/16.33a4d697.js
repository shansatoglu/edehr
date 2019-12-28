(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{251:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("p",[e._v("Moodle and the EdEHR must be installed and running prior to configuration.")]),e._v(" "),r("ul",[r("li",[e._v("Contact your LMS admin for help with Moodle.")]),e._v(" "),r("li",[e._v("Contact your IT admin for help with the EdEHR, or see the "),r("router-link",{attrs:{to:"/developer/"}},[e._v("developer guide")]),e._v(" for details on how to do this yourself.")],1)]),e._v(" "),r("h2",{attrs:{id:"tips-before-you-get-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tips-before-you-get-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Tips before you get started")]),e._v(" "),r("ul",[r("li",[e._v("When creating names, descriptions, IDs or any other kind of data, try to follow a convention will make this data easy to understand and maintain.")]),e._v(" "),r("li",[e._v("Some of the following steps may have already been completed or you may not want to configure for your assignment. Those items are marked "),r("em",[e._v("OPTIONAL")]),e._v(" .")])]),e._v(" "),r("h2",{attrs:{id:"connect-moodle-to-the-edehr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-moodle-to-the-edehr","aria-hidden":"true"}},[e._v("#")]),e._v(" Connect Moodle to the EdEHR")]),e._v(" "),r("h3",{attrs:{id:"edehr-admin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#edehr-admin","aria-hidden":"true"}},[e._v("#")]),e._v(" EdEHR admin")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Create a "),r("router-link",{attrs:{to:"/shared/definitions.html#consumer-key-and-secret"}},[e._v("consumer key and secret")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Get the "),r("router-link",{attrs:{to:"/shared/definitions.html#api-url"}},[e._v("API url")]),e._v(" from the host server.")],1)]),e._v(" "),r("li",[r("p",[e._v("Share the consumer key, secret and API url with with your LMS admin.")])])]),e._v(" "),r("blockquote",[r("p",[e._v("The EdEHR admin's work is complete.")])]),e._v(" "),r("h3",{attrs:{id:"lms-admin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lms-admin","aria-hidden":"true"}},[e._v("#")]),e._v(" LMS admin")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Create an external "),r("router-link",{attrs:{to:"/shared/definitions.html#tool"}},[e._v("tool")]),e._v(" to connect Moodle to the EdEHR. This will give the course designer a connection for the EdEHR assignment.")],1)]),e._v(" "),r("p",[e._v("** Note that an external tool can be used multiple times within multiple courses and assignments.")]),e._v(" "),r("p",[r("strong",[e._v("SITE ADMINISTRATION > Activity modules > External tools > MANAGE TOOLS > CONFIGURE A TOOL MANUALLY")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Add a tool name, API url, and tool description that will be shared between Moodle and the EdEHR.")])]),e._v(" "),r("li",[r("p",[e._v("Add the consumer key and secret (given to you by the EdEHR admin).")])]),e._v(" "),r("li",[r("p",[e._v("In the "),r("code",[e._v("custom parameters")]),e._v(" text box, type "),r("code",[e._v("assignment=localSampleAssignment")])])]),e._v(" "),r("li",[r("p",[e._v("Set "),r("code",[e._v("default launch container")]),e._v(" to "),r("code",[e._v("new window")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("Save changes")])])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.moodle.org/19/en/Adding_resources_and_activities",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"create-the-lms-structure-for-your-course"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-the-lms-structure-for-your-course","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the LMS structure for your course")]),e._v(" "),r("h3",{attrs:{id:"lms-admin-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lms-admin-2","aria-hidden":"true"}},[e._v("#")]),e._v(" LMS admin")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Create a new "),r("router-link",{attrs:{to:"/shared/definitions.html#course"}},[e._v("course")]),e._v(" that will be linked to your EdEHR assignment. "),r("em",[e._v("OPTIONAL")])],1)]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.moodle.org/38/en/Adding_a_new_course",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("Add the list of students that will be participating in the respective course. "),r("em",[e._v("OPTIONAL")])])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.moodle.org/38/en/Course_enrolment",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])]),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v("Share the external tool name with your course designer.")])]),e._v(" "),r("blockquote",[r("p",[e._v("The LMS admin's work is complete.")])]),e._v(" "),r("h2",{attrs:{id:"fill-in-assignment-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fill-in-assignment-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Fill in assignment details")]),e._v(" "),r("h3",{attrs:{id:"course-designer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#course-designer","aria-hidden":"true"}},[e._v("#")]),e._v(" Course designer")]),e._v(" "),r("blockquote",[r("p",[e._v("For more detailed instructions, see the "),r("a",{attrs:{href:"../course-designer/cd-configuration-details"}},[e._v("configuration-details")]),e._v(" section of the course designer documentation.")])]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Create a new course section that will hold the EdEHR assignment and relevant "),r("router-link",{attrs:{to:"/shared/definitions.html#resources"}},[e._v("resources")]),e._v(". "),r("em",[e._v("OPTIONAL")])],1)]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.moodle.org/38/en/Course_homepage#Parts_of_a_course_homepage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Add resources for students such as assignment instructions, case studies and marking criterion. "),r("em",[e._v("OPTIONAL")])])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.moodle.org/19/en/Adding_resources_and_activities",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])]),e._v(" "),r("ol",{attrs:{start:"10"}},[r("li",[e._v("Add the external tool (given to you by the LMS admin) to the course.")])]),e._v(" "),r("p",[r("strong",[e._v("[COURSE NAME] > GEAR ICON > TURN EDITING ON > ADD ACTIVITY OR RESOURCE > EXTERNAL TOOL > ADD")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Add an activity name")])]),e._v(" "),r("li",[r("p",[e._v("Click "),r("code",[e._v("show more")]),e._v(" and add an activity description")])]),e._v(" "),r("li",[r("p",[e._v("Select the tool your LMS admin set up in the preconfigured tool dropdown")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("Save and return to course")])])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.moodle.org/38/en/External_tool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moodle documentation"),r("OutboundLink")],1)])])]),e._v(" "),r("ol",{attrs:{start:"11"}},[r("li",[r("p",[e._v("Click on the assignment activity in Moodle to make the connection (via "),r("router-link",{attrs:{to:"/shared/definitions.html#lti"}},[e._v("LTI")]),e._v(") to the EdEHR. The assignment activity now exists in the EdEHR, and is known simply as an assignment. (This MUST happen before instructors and students can see the assignment in the EdEHR.)")],1)]),e._v(" "),r("li",[r("p",[e._v("In the EdEHR, review the assignment name and description added by the LMS admin and make changes if needed.")])])]),e._v(" "),r("h2",{attrs:{id:"connect-the-seed-to-your-assignment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-seed-to-your-assignment","aria-hidden":"true"}},[e._v("#")]),e._v(" Connect the seed to your assignment")]),e._v(" "),r("h3",{attrs:{id:"course-designer-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#course-designer-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Course designer")]),e._v(" "),r("ol",{attrs:{start:"13"}},[r("li",[e._v("Create the "),r("router-link",{attrs:{to:"/shared/definitions.html#seed"}},[e._v("seed")]),e._v(" that will be used by the assignment. "),r("em",[e._v("OPTIONAL")])],1)]),e._v(" "),r("p",[e._v("** EdEHR > ASSIGNMENTS **")]),e._v(" "),r("ul",[r("li",[e._v("Check the "),r("code",[e._v("Course designer functionality")]),e._v(" checkbox at the bottom of the page")])]),e._v(" "),r("p",[e._v("** MANAGE SEED DATA > CREATE NEW SEED **")]),e._v(" "),r("ul",[r("li",[e._v("Add a name and description")]),e._v(" "),r("li",[r("code",[e._v("Save")])]),e._v(" "),r("li",[e._v("In the same row as your new seed, "),r("code",[e._v("View/edit seed")])]),e._v(" "),r("li",[e._v("Navigate through EHR to add seed data")]),e._v(" "),r("li",[r("code",[e._v("Save")]),e._v(" on each page or modal")])]),e._v(" "),r("ol",{attrs:{start:"14"}},[r("li",[e._v("Link the seed to the respective assignment.")])]),e._v(" "),r("p",[e._v("** EdEHR > dashboard > [ASSIGNMENT NAME] > EDIT ICON in highlighted row **")]),e._v(" "),r("ul",[r("li",[e._v("Select seed data from "),r("code",[e._v("Seed data")]),e._v(" dropdown")]),e._v(" "),r("li",[e._v("Save")])]),e._v(" "),r("blockquote",[r("p",[e._v("The course designer's work is complete.")])]),e._v(" "),r("blockquote",[r("p",[e._v("The configuration process is complete! Instructors and students can now access the assignment from Moodle.")])]),e._v(" "),r("blockquote",[r("p",[e._v("Student lists are created in the EdEHR as each student accesses their respective assignments in the EdEHR for the first time. It is normal to not see any students in the EdEHR dashboard after setting up an assignment.")])]),e._v(" "),r("h2",{attrs:{id:"videos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#videos","aria-hidden":"true"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.dropbox.com/s/j1ycyvb91ef7hcf/tutorial-part1.mp4?dl=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration in video format"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.dropbox.com/s/duznqu7rz930v1p/tutorial-part2.mp4?dl=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Student completing an assignment and instructor evaluation"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);