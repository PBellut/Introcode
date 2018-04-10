$(document).ready(function() {
   welcome();
 });
function getUsername() {
    var  user = prompt("Veuillez rentrez votre nom:", "");
    return user
};
 function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis ! </h4>');
};
