
function drawChart(canvasName, name) {
	var myChart =document.getElementById(canvasName);
	var H = document.body.clientHeight;
	var W = document.body.clientWidth;
	H*=0.80;
	W*=0.89;
	myChart.setAttribute("height", H);
	myChart.setAttribute("width", W);
	var nameIn = ["","","","","","","Latest"];
	var dataIn = [];
	var num = parseInt(localStorage.getItem("count" + name));
	//window.alert(num);
	/*for( var i = num-1 ; i > num - 8 ; i--)
	{
		if(localStorage.getItem(name+(i)) == null )
		{
			dataIn.unshift(0); 
		} else {
			dataIn.unshift(localStorage.getItem(name+(i+1)))
		}
	};*/
	for( var i = num-1 ; i > num - 8 ; i--)
	{
		if(localStorage.getItem(name+(i)) == null )
		{
			dataIn.unshift(0); 
		} else {
			dataIn.unshift(localStorage.getItem(name+(i)))
		}
	};
	/*for(var i = 0;i<6;i++)
	{
		//if(localStorage.getItem(name+(num-i)) == null )
		//{
		//	dataIn.unshift(0); 
		//} else {
			dataIn(i).unshift(localStorage.getItem(name+(num-i)));
		//}
	}*/
	console.log(dataIn);
	var data = {
		labels : [],
		datasets : [
		
			{
				fillColor : "rgba(241,196,15,1)",
				strokeColor : "rgba(2,0,0,0.5)",
				pointColor : "rgba(179,0,15,1)",
				pointStrokeColor : "#fff",
				data : []
			}
		]
	}
	for(var i=0;i<nameIn.length;i++)
	{
		data.labels[i] = nameIn[i];
		data.datasets[0].data[i] = dataIn[i];
	}
	var ctx = myChart.getContext("2d");
	var largest = Math.max.apply(Math,dataIn);
	var step = Math.ceil(largest/20);
	var options = {
		scaleOverride : true,
		scaleSteps : 20,
		scaleStepWidth : step,
		scaleStartValue : 0,
		scaleLineColor : "rgba(0,0,0,.1)",
		//scaleLineWidth : 1,
	};
	//window.alert(dataIn);
	//window.alert(largest);
	var myNewChart = new Chart(ctx).Line(data,options);
}