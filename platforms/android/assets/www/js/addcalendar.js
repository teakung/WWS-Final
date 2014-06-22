$(document).ready(function() {
	var events="";
	var time="";
	$("#summit").click(function(){
		events=$('#events').val();
		time=$('#starttime').val();
		console.log(events,time);


	

		
		var old = eval(localStorage.getItem('events'));
		console.log(typeof old , old)
		if(old === null){
			old = [{title:events,start:time}];
			console.log('old is undefined 77');
		}
		else{
			old.push({title:events,start:time});
		}
		console.log(old)
		var g = JSON.stringify(old);
		localStorage.setItem('events',g);
		})



		
	});