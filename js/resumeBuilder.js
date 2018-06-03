 var formattedName = HTMLheaderName.replace("%data%", "Adriano Ribeiro");
 var role = "Front-End";

 var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);