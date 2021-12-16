function time(){
	const date = new Date();
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let year = date.getUTCFullYear();
	let month = months[date.getUTCMonth()];
	let day = days[date.getUTCDay()];
    //putting the format of Hours and Minutes,Seconds when the value < 10
	let heures = (date.getHours() < 10 ) ? "0"+date.getHours():date.getHours();
	let minutes =  (date.getMinutes() < 10 ) ? "0"+date.getMinutes():date.getMinutes();
	let secondes = (date.getSeconds() < 10 ) ? "0"+date.getSeconds():date.getSeconds();
	document.getElementById("time").innerHTML = heures+" : "+minutes +" : "+secondes;
	document.getElementById("date").innerHTML = day+" "+(date.getUTCDay()+1)+", "+month+" "+year;
	//Check what a time period
    if(heures >= 5 && heures < 12){
		change("Good Morning","#FAF611","#FAF611","black","#F6F32B","url('../Time/photos/morning.jpg') ");
	}
	else if(heures >= 12 && heures < 17){
		change("Good Afternoon","#F5983A","#F7C93A","black","#F5983A","url('../Time/photos/afternoon.jpg') ");
	}
	else  {
		change("Good Evening","#393552","#393552","white","black","url('../Time/photos/evening.jfif') ");
	}

    display();
}
function change(welcome,WelcomeColor,CBGColor,CircleColoe,CircleBorder,url){
	document.getElementById("welcome").innerHTML = welcome;
	document.getElementById("welcome").style.color = WelcomeColor;
	document.getElementById("circle").style.backgroundColor = CBGColor;
	document.getElementById("circle").style.color = CircleColoe;
	document.getElementById("circle").style.borderColor = CircleBorder;
	document.getElementById("circle").style.backgroundImage = url;
	document.getElementById("circle").style.backgroundRepeat = "no-repeat";
	document.getElementById("circle").style.backgroundSize = "400px 400px";
}
function display(){
	let refresh = 1000;
	mytime = setTimeout("time()",refresh);
}
time();