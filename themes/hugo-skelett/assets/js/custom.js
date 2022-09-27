/* Umschalten zwischen Hinzufügen und Entfernen der Klasse "responsive" zu topnav, wenn der Benutzer auf das Icon/Menu klickt */
function myFunction() {
var x = document.getElementById("top--navigation");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}