$(document).ready(function(){
		var a="";
		var hour = parseInt(localStorage.getItem("hour"));
		var min = parseInt(localStorage.getItem("min"));
		var sec = parseInt(localStorage.getItem("sec"));
		var count=0;
		var type =0;//0=black, 1=green, 2=red
		
		$('body').on('touchstart', function(){
					if( type == 1 ){
						count++;
						var counter = document.querySelector("#count");
						counter.innerHTML = '<div id="count">'+count+'</div>';
						type == 2;
						changeColor();
						return false;
					}
				})


		function countdown(){
			if( sec+min*60+hour*3600 > 0){
				sec--;
				if( sec == -1 && min > 0 ){
					sec += 60;
					min--;
				}
				else if( sec == -1 && min >= 0 && hour > 0 ){
					sec += 60;
					min += 59;
					hour--; 
				}
			}
			else {
				$("#score").text(count);
				$("#popup").show();
				type = 3;

			}

			if( hour<10||min<10||sec<10){
				if(hour<10){
					a="0"+hour+":";
				}
				else{
					a=hour+":";
				}
				if(min<10){
					a+="0"+min+":";
				}
				else{
					a+=min+":";
				}
				if(sec<10){
					a+="0"+sec;
				}
				else{
					a+=sec;
				}
			}
			else{
				a=hour+":"+min+":"+sec;
			}
		}

		var second =0;
		setInterval(function()

			{
				countdown();
				$("#second").text(a);


		},1000)

		
		function changeColor(){
			if( type == 0 || type == 2){
				$('body').css('background-color', 'green');	
				type = 1;
			}
			else if( type == 1 ){
				$('body').css('background-color', 'green');
				type = 2; 
			}
		}
		if( type == 1 ){
			changeColor();
		}
		setInterval( function(){
				if( type == 0 || type == 2 ){
					changeColor();
				}
		},500)
		
		var num = localStorage.getItem("countrf");
				num ++;
				localStorage.setItem("countrf" , num)

			$("#save").click(function(){
				localStorage.setItem("rf"+(num-1),count);
			})

	
})

