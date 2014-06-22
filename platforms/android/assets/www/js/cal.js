alert("hello");
// var butC = document.querySelector('#get');

// butC.addEventListener('click',function(){alert('gg')},false);
$(document).ready(function () {
	$("button").click(function(){
		var str=$("input[name=input1]").val()
		var startDate = new Date(2014,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
var endDate = new Date(2014,2,15,19,30,0,0,0);
var titleC = "My nice event";
var locationC = "Home";
var notesC = "Some notes about this event.";
var successC = function(message) { alert("Success: " + JSON.stringify(message)); };
var errorC = function(message) { alert("Error: " + message); };
try{
 window.plugins.calendar.createEvent(titleC,locationC,notesC,startDate,endDate,successC,errorC);
	}
	catch(e){
		alert(e);
	}alert("hello");

	});
});