var bio = {
    "name" : "Adriano Ribeiro",
    "role" : "Front End Developer",
    "contacts" : {
        "email" : "adrianofrontend@gmail.com",
        "github" : "adrianofrontend",
        "linkedin" : "https://www.linkedin.com/in/adriano-santos-ribeiro",
        "location" : "São Paulo, SP"
    },
    "picture": "images/frontend.jpg",
    "welcomeMessage": "Olá! Eu sou um desenvolvedor de front-end de São Paulo, SP!",
    "skills": ["HTML", "CSS", "JS", "Photoshop", "Web Development", "Responsive Web Design"]
};

var works = {
    "jobs": [
        {
            "employer": "Freelance",
            "title": "Web Developer and Designer",
            "location": "Izmir,Turkiye",
            "workDate": "July 2014 - current",
            "description": "As of 2014, I continue to develop myself by continuously working on web development and web design, using various big resources, blogs and communities, supporting small businesses, and working on projects I have designed. I am still continuing my career as freelance web frontend developer and designer."
        },
        {
            "employer": "Hogarth WW",
            "title": "Editor",
            "location": "Istanbul,Turkiye",
            "workDate": "March 2015 - March 2016",
            "description": "I worked for UK-based agency, which working on creative marketing and media projects and adapting these works for different countries around the world, as a freelance content editor on a worldwide music project"
        }
    ]
};

var projects = {
	"projects": [
		{
			"title": "IZMovie",
			"datesWorked": "May 2016",
			"description": "Created a movie database website desing and frontend development for my portfolio.",
			"images": ["images/proj1.jpg"],
			"url": "http://erenguldas.com/portfolyo/izmovie/"
		},
		{
			"title": "CWC",
			"datesWorked": "January 2016",
			"description": "Created a digital content agency website.",
			"images": ["images/proj2.jpg"],
			"url": "http://www.coffeewritingcontent.com/"
		}
	]
};

var education = {
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Frontend Web Development Nanodegree",
            "dates": "January 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "school": "FreeCodeCamp",
            "title": "Frontend Web Development",
            "dates": "October 2016",
            "url": "https://www.freecodecamp.com/"
        }
    ]
};



var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
formattedContactInfo.push(HTMLlinkedin.replace('%data%', bio.contacts.linkedin));
formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);

for (var i = 0; i < formattedContactInfo.length; i++) {
    $('#topContacts').append(formattedContactInfo[i]);
    $('#footerContacts').append(formattedContactInfo[i]);
}

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkills);
    }
}

works.display = function() {
    if (works.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);

        for (var job in works.jobs ) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', works.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', works.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', works.jobs[job].location);
            var formattedWorkDate = HTMLworkDates.replace('%data%', works.jobs[job].workDate);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', works.jobs[job].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkDate);
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        $('#projects').append(HTMLprojectStart);


        for (var i in projects.projects) {
            var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[i].datesWorked);
            var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);


            $('.project-entry:last').append(formattedProjTitle);
            $('.project-entry:last').append(formattedProjDates);
            $('.project-entry:last').append(formattedProjDescription);


            if (projects.projects[i].images.length > 0) {
                for(var img in projects.projects[i].images) {
    				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
    				$(".project-entry:last").append(formattedProjectImage);
    			}
            }

        }
    }
};

education.display = function() {
    if(education.onlineCourses.length > 0) {
        $('#education').append(HTMLschoolStart);

        if(education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title );
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school );
                var formattedComplated = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates );
                var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url );
                // var formattedProjImg = HTMLprojectImage.replace('%data%', projects.projects[i].images);
                $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                $('.education-entry:last').append(formattedComplated);
                $('.education-entry:last').append(formattedURL);

            }
        }
    }
};

$('#mapDiv').append(googleMap);
works.display();
projects.display();
education.display();
