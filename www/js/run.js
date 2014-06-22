
$(document).ready(function(){
	var final= parseInt(localStorage.getItem("lap"));
	$('#count').text(final);
	var a="";
	var hour = 0;
	var min = 0;
	var sec = 0;
	var type = 0;
	function countup(){
		if( final == 0 ){
			$("#score").text(a);
			$("#popup").show();
			type = 3;
			sec--;
		}
		sec++
		if( sec == 60 ){
			sec = 0;
			min++;
		}
		if( min == 60 ){
			min = 0;
			hour++;
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
			countup();
			$("#second").text(a);
		},1000)
		if( type == 0 ){
		$('body').on('touchstart', function(){
				if( final > 0 ){
					final--;
					var counter = document.querySelector("#count");
					counter.innerHTML = '<div id="count">'+final+'</div>';
					return false;
				}
		})
	}


		var num = localStorage.getItem("countr");
				num ++;
				localStorage.setItem("countr" , num)

	$("#save").click(function(){
		localStorage.setItem("r"+(num-1),hour*3600+min*60+sec);
	})
		
	
})
