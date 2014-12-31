// 1.) bio
var bio = {
    "name": "Paul Ireifej",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "973-610-3686",
        "email": "pireifej@gmail.com",
        "github": "pireifej",
        "twitter": "pireifej",
        "location": "Holmdel, NJ"
    },
    "welcomeMessage": "Learn about Paul!",
    "skills": ["development", "leadership", "frisbee", "speaking", "typing", "algorithms", "data structures", "sense of humor", "HTML", "smiling", "waving", "pointing"],
    "bioPic": "images/me.jpg"
}

bio.display = function() {
    $("#header").prepend(format_HTML(HTMLheaderRole, this.role));
    $("#header").prepend(format_HTML(HTMLheaderName, this.name));
    $("#header").append(format_HTML(HTMLbioPic, this.bioPic));
    $("#topContacts").append(format_HTML(HTMLmobile, this.contacts.mobile));
    $("#topContacts").append(format_HTML(HTMLemail, this.contacts.email));
    $("#topContacts").append(format_HTML(HTMLgithub, this.contacts.github));
    $("#topContacts").append(format_HTML(HTMLlocation, this.contacts.location));

    $("#footerContacts").append(format_HTML(HTMLmobile, this.contacts.mobile));
    $("#footerContacts").append(format_HTML(HTMLemail, this.contacts.email));
    $("#footerContacts").append(format_HTML(HTMLgithub, this.contacts.github));
    $("#footerContacts").append(format_HTML(HTMLlocation, this.contacts.location));

    var planes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    var i = 0;
    if (this.skills) {
        for (skill_index in bio.skills) {
            var skill = this.skills[skill_index];
            $("#shape").append("<div class='plane " + planes[i] + "'>" + skill + "</div>");
            i++;
        }
    }
}

// 2.) education
var education = {
    "schools": [
        {
            "name": "Rensselaer Polyechnic Institute",
            "location": "Troy, NY",
            "degree": "BS",
            "majors": ["Computer & Systems Engineering", "Computer Science"],
            "dates": 2007,
            "url": "http://www.rpi.edu"
        },
        {
            "name": "Rensselaer Polyechnic Institute",
            "location": "Troy, NY",
            "degree": "MS",
            "majors": ["Information Technology", "Computer Science"],
            "dates": 2009,
            "url": "http://www.rpi.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.udacity.com/course/ud804"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.udacity.com/course/ud245"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.udacity.com/course/ud304"
        }
    ]
}

education.display = function() {
    // display schools
    for (var school_index in this.schools) {
        var school = this.schools[school_index];

        $("#education").append(HTMLschoolStart);
        var school_name = HTMLschoolName.replace("%url%", school.url).replace("%data%", school.name);
        var school_heading = school_name + format_HTML(HTMLschoolDegree, school.degree);
        $(".education-entry:last").append(school_heading);
        $(".education-entry:last").append(format_HTML(HTMLschoolLocation, school.location));
        $(".education-entry:last").append(format_HTML(HTMLschoolDates, school.dates));
        for (var major_index in school.majors) {
            var major = school.majors[major_index];
            $(".education-entry:last").append(format_HTML(HTMLschoolMajor, major));
        }
    }

    // display online courses
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var online_course_index in this.onlineCourses) {
        var online_course = this.onlineCourses[online_course_index];
        var online_course_heading = format_HTML(HTMLonlineTitle, online_course.title) + format_HTML(HTMLonlineSchool, online_course.school);
        $(".education-entry:last").append(online_course_heading);
        $(".education-entry:last").append(format_HTML(HTMLonlineDates, online_course.dates));
        $(".education-entry:last").append(format_HTML(HTMLonlineURL, online_course.url));
    }
}

var work = {
    "jobs": [
        {
            "employer": "AMD",
            "title": "Software Engineer I",
            "location": "Austin, TX",
            "dates": "January 2008 - 2009",
            "description": "Software for hardware chipset"
        },
        {
            "employer": "AT&T",
            "title": "Senior Member of Technical Staff",
            "location": "Middletown, NJ",
            "dates": "January 2009 - present",
            "description": "Speech-to-text, Fraud & Compliance"
        }
    ]
}

work.display = function() {
    for (jobs_index in work.jobs) {
        var job = work.jobs[jobs_index];

        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        // append HTML to work experience section
        var work_heading = format_HTML(HTMLworkEmployer, job.employer) + format_HTML(HTMLworkTitle, job.title);
        $(".work-entry:last").append(work_heading);
        $(".work-entry:last").append(format_HTML(HTMLworkLocation, job.location));
        $(".work-entry:last").append(format_HTML(HTMLworkDates, job.dates));
        $(".work-entry:last").append(format_HTML(HTMLworkDescription, job.description));
    }
}

var projects = {
    "projects": [
        {
            "title": "Zones Method",
            "dates": "2005",
            "description": "Developed C++ code based on 'Zones method' that incorporates shortest-path algorithms to determine the best route for exploration through a graphic representation of system complexity. Designed novel data structure and operations in C++ to represent the difference bound matrix.",
            "images": ["images/zones.jpg"]
        },
        {
            "title": "MCOI",
            "dates": "2010",
            "description": "Development of Mobility Community of Interest (MCOI) Visualization, an online application that helps fraud analysts identify telephone numbers most often called by suspected fraudsters. Utilizes internal AT&T Research technology to generate an infograph representing the suspect.s COI. Uses Perl CGI and jQuery for data presentation and graphical zooming.",
            "images": ["images/MCOI.jpg"]
        },
        {
            "title": "CCS",
            "dates": "2012",
            "description": "Led the client-side development of a release for the Consolidated Compliance System (CCS). Worked closely with project management, technical team lead and clients to architect business requirements and engineer a process work flow. Also led the development and deployment of a subsequent CCS release. This deployment included a completely new technology base (from a Java Web Start framework to a purely web-based solution using HTML and PHP) and re-designed database schema. Led weekly status meetings with developers to discuss current requirement gaps and technical hurdles. Trained new developers and testers. Presented new interface and functionality to end users in the National Compliance Center (NCC) via technical demos.",
            "images": ["images/CCS.jpg"]
        },
        {
            "title": "ELEAT",
            "dates": "2013 - 2014",
            "description": "Augmenting the Electronic Law Enforcement Activity Tracker (ELEAT) application with surveillance intercept automation. Developed 4 new interfaces in Perl and a web interface for direct node access. Took BVoIP development over from previous developer after his abrupt leave and was still able to deliver top quality code ahead of expected completion deadline. Undergone several initiates to improve ELEAT code infrastructure: Effort to re-design dated ELEAT web interface using HTML, JavaScript and jQuery for faster response time, enhanced usability and ease-of-use. jVectorMap API was used to generate an interactive SVG map based on node longitude/latitude information. Markers on map are updated in real-time using Ajax.",
            "images": ["images/ELEAT.jpg"]
        }
    ]
}

projects.display = function() {
    for (var project_index in this.projects) {
        var project = this.projects[project_index];
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(format_HTML(HTMLprojectTitle, project.title));
        $(".project-entry:last").append(format_HTML(HTMLprojectDates, project.dates));
        $(".project-entry:last").append(format_HTML(HTMLprojectDescription, project.description));
        for (var image_index in project.images) {
            var image = project.images[image_index];
            $(".project-entry:last").append(format_HTML(HTMLprojectImage, image));
        }
    }
}

// format HTML by replacing the %data% keyword with the content you want
function format_HTML(var_name, content) {
    return var_name.replace("%data%", content);
}

function locationizer(my_work) {
    var work_array = [];
    for (var work_index in my_work.jobs) {
        work_array.push(my_work.jobs[work_index].location);
    }
    return work_array;
}

function inName(full_name) {
    var first_name = full_name.split(" ")[0];
    var last_name = full_name.split(" ")[1];
    first_name = first_name[0].toUpperCase() + first_name.slice(1).toLowerCase();
    last_name = last_name.toUpperCase();
    return first_name + " " + last_name;
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

bio.display();
projects.display();
work.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
