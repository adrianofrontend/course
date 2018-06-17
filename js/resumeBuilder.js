 var formattedName = HTMLheaderName.replace("%data%", "Adriano Ribeiro");
 var role = "Front-End";

 var formattedRole = HTMLheaderRole.replace("%data%", role);

 var bio = {
    "name" : "Adriano Ribeiro",
    "role" : "Desenvolvedor",
    "contacts" : {
        "mobile" : "11 98736-0129",
        "email" : "adrianofrontend@gmail.com",
        "github" : "adrianofrontend",
        "location" : "Brazil"
    },

    "welcomeMesage" : "Aprendendo JS",
    "skills" : ["HTML5", "PROGRAMMING", "CSS3","JS","SEMANTIC", "RESPONSIVE DESIGN"],
    "bioPic" : "https://adribeiro.com.br/wp-content/uploads/2015/11/banner_programador_preto_2.jpg"
    
};

 if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);
 

    // var skills = ["awesomeness", "programming", "CSS3","JS","Semantic", "Design Responsive"]

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);

 }

 var work = {
    "jobs" : [
        {
            "employer": "Tesla Tecnologia",
            "title": "Programming HTML JR",
            "dates" : 2014,
            "description" : "Development Landing Pages, Emails, WebSites"
        },

        {
           "employer": "Soul Digital",
           "title": "Programming Web",
           "dates" : 2015,
           "description" : "Development Landing Pages, Emails, WebSites"
        }

    ]
}

 function displayWork(){
    for (job in work.jobs){

        $("#workExperience").append(HTMLworkStart);
    
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
        $(".work-entry:last").append(formattedEmployerTitle);
    
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
    
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    
         
    }
    
 }

/*   function inName(name){
    name = name.trim().split(" ");
    console.log(name);

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];
 }

    $("#main").append(internationalizeButton); */

/*  displayWork();

 $(document).click(function(loc) { 
     var x = loc.pageX;
     var y = loc.pageY;

     logClicks(x,y);
});
 */











/*  var adriano = {};

 adriano.job = "course dev";

 var makeCourse = function(){
     console.log("Made a Course");
 }

 var courses = 0;
 while(adriano.job === "course dev"){
     makeCourse();
     courses = courses + 1;
     if(courses === 10){
         adriano.job = "learning specialist";

     }
 
 }

 console.log(adriano.job);
 */



 var education = {
     "schools": [
         {
             "name" : "Eckerd College",
             "city" : "Saint Petersburg, FL, US",
             "degree" : "BA",
             "majors" : ["CS"],
             "dates" : 2018,
             "url" : "http://example.com"
         },

         {
             "name" : "Nova Southeastern University",
             "city" : "Fort Lauderdale, FL, US",
             "degree" : "Masters",
             "majors" : ["CS"],
             "dates" : 2018,
             "url" : "http://example.com"
         }
     ],

     "onlineCourses" : [
         {
             "title": "JavaScript",
             "school" : "Udacity",
             "dates" : 2018
         }
     ]
 }






//  var work = {};
//  work.position = "Course Developer",
//  work.employer = "Udacity",
//  work.years = 0.3,
 

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//  $("#main").append(work.position);