$(document).ready(function(){


var a="";
var h = parseInt(0);
var m = parseInt(0);
var s = parseInt(70);
function time(){
	return h*3600+m*60+s;
}
function countdown(){
	if(s==0 && m == 0 && h == 0){

	}
	if(s>0 && m == 0 && h == 0 ){
		s--;
	}
	if(s==-1 && m != 0 && h != 0){
	  m--;
	  s=59;
	}
	if(m==-1){
	  h--;
	  m=59;
	}
	if(h<0){
	  h=0;
	}
	if(h<10||m<10||s<10){
		if(h<10){
			a="0"+h+":";
		}
		else{
			a=h+":";
		}
		if(m<10){
			a+="0"+m+":";
		}
		else{
			a+=m+":";
		}
		if(s<10){
			a+="0"+s;
		}
		else{
			a+=s;
		}
	}
	else{
		a=h+":"+m+":"+s;
	}
}


var second =0;
setInterval(function()

	{

		//second+=1;
		countdown();
		$("#second").text(a);
		console.log(second);


},1000)

var count=0;
/*var tt = document.querySelector("#text");
tt.addEventListener('click',function(){
	count++;
	var counter = document.querySelector("#count");
	counter.innerHTML = '<p id="count">'+count+'</p>';
},false);*/







$("#clicker").on('touchstart',function(){
	
	count+=1;
	//$("#count").text(count);
	var counter = document.querySelector("#count");
	counter.innerHTML = '<div id="count">'+count+'</div>';
	return false;

})
})

