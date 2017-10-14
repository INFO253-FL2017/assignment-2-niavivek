/* Checks for missing values in the form and displays error message */ 
function checkform() {

	var name = document.getElementById('name').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
	var errorArea = document.getElementById('errorarea');

	
	var errormsg = "Please enter ";
	if (name == ""){
		errormsg += "name";
	}
	if (subject == ""){
		if ((name == "") && ( email != "" && message != "")){
            errormsg += " and ";
        }
        else if((name == "") && ( email == "" || message == "")){
			errormsg += ", ";}
        
		errormsg += "subject";
	}
    if (email == ""){
        if ((name == "" || subject == "") && message != ""){
            errormsg += " and ";
        }
        else if((name == "" ||  subject == "") && message == ""){
            errormsg += ", ";}
        
        errormsg += "email";
    }
	if (message == ""){
		if(name == "" || subject == "" || email == ""){
			errormsg += " and ";}
		errormsg += "message";
	}
	if (name != "" && subject != "" && message != "" && email != "")
	{
		errorArea.innerHTML = "";
		/*document.getElementById('name').value = "";
		document.getElementById('subject').value = "";
		document.getElementById('message').value = "";*/
        document.getElementById('show_noti').style.display = "block";
        return true;
	}
	else
	{
		errorArea.innerHTML = errormsg;
        document.getElementById('show_noti').style.display = "none";
        return false;
	}	
}
function remove_var(){
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
}
function loadcomment_1(){
    var msgArea1 = document.getElementById('comment_page_1');
    values = JSON.parse(localStorage.getItem("allComments_1"));
    if (values != null){
        document.getElementById('show_comment_1').style.display = "block";
    for (i=0;i<values.length;i++)
    {

        if(i == 0){
            msgArea1.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br /> "
        }
        msgArea1.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
        msgArea1.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else {
    document.getElementById('show_comment_1').style.display = "none";
}
    document.getElementById('name_1').value = "";
    document.getElementById('message_1').value = "";
    return false;

}

function comment_1(){
	
    var existingComments = JSON.parse(localStorage.getItem("allComments_1"));
    if(existingComments == null) {
        existingComments = [];}
    var name_1 = document.getElementById("name_1").value;
    var message_1 = document.getElementById("message_1").value;
    var errorArea = document.getElementById('errorarea_1');
    var comment = {
        "name": name_1,
        "message": message_1
    };
    
    var errormsg = "Please enter ";
    if (name_1 == ""){
        errormsg += "name";
    }
    
    if (message_1 == ""){
        if(name_1 == ""){
            errormsg += " and ";}
        errormsg += "message";
    }
    if (name_1 != "" && message_1 != "")
    {
        errorArea.innerHTML = "";
        document.getElementById('name_1').value = "";
        document.getElementById('message_1').value = "";
    }
    else
    {
        errorArea.innerHTML = errormsg;
        return false;
    }


    existingComments.push(comment);
    localStorage.setItem("allComments_1", JSON.stringify(existingComments));
    var msgArea1 = document.getElementById('comment_page_1');

   	values = existingComments;
    if (values !=null){
        document.getElementById('show_comment_1').style.display = "block";
    for ( var i=0;i<values.length;i++)
    {
        
    	if(i == 0){
    		msgArea1.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
    	}
    	msgArea1.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
    	msgArea1.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
    document.getElementById('show_comment_1').style.display = "none";
}
    document.getElementById('name_1').value = "";
	document.getElementById('message_1').value = "";
    return false;

}

function loadcomment_2(){
    var msgArea2 = document.getElementById('comment_page_2');
    values = JSON.parse(localStorage.getItem("allComments_2"));
    if (values !=null){
        document.getElementById('show_comment_2').style.display = "block";
    for (i=0;i<values.length;i++)
    {
        if(i == 0){
            msgArea2.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
        }
        msgArea2.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
        msgArea2.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_2').style.display = "none";
}
    document.getElementById('name_2').value = "";
    document.getElementById('message_2').value = "";

    return false;

}
function comment_2(){
	
    var existingComments = JSON.parse(localStorage.getItem("allComments_2"));
    if(existingComments == null) {
        existingComments = [];}
    var name_2 = document.getElementById("name_2").value;
    var message_2 = document.getElementById("message_2").value;
   
    
    var errorArea = document.getElementById('errorarea_2');
    var comment = {
        "name": name_2,
        "message": message_2
    };
    
    var errormsg = "Please enter ";
    if (name_2 == ""){
        errormsg += "name";
    }
    
    if (message_2 == ""){
        if(name_2 == ""){
            errormsg += " and ";}
        errormsg += "message";
    }
    if (name_2 != "" && message_2 != "")
    {
        errorArea.innerHTML = "";
        document.getElementById('name_2').value = "";
        document.getElementById('message_2').value = "";
    }
    else
    {
        errorArea.innerHTML = errormsg;
        return false;
    }
    existingComments.push(comment);
    localStorage.setItem("allComments_2", JSON.stringify(existingComments));
    var msgArea2 = document.getElementById('comment_page_2');
   	values = existingComments;
   	if (values !=null){
        document.getElementById('show_comment_2').style.display = "block";
    for (i=0;i<values.length;i++)
    {
    	if(i == 0){
    		msgArea2.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
    	}
    	msgArea2.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
    	msgArea2.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_2').style.display = "none";
}
    document.getElementById('name_2').value = "";
	document.getElementById('message_2').value = "";
    return false;

}
function loadcomment_3(){
    var msgArea3 = document.getElementById('comment_page_3');
    values = JSON.parse(localStorage.getItem("allComments_3"));
    if (values !=null){
        document.getElementById('show_comment_3').style.display = "block";
    for (i=0;i<values.length;i++)
    {
        if(i == 0){
            msgArea3.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
        }
        msgArea3.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
        msgArea3.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_3').style.display = "none";
}
    document.getElementById('name_3').value = "";
    document.getElementById('message_3').value = "";
    return false;
}
function comment_3(){
	
    var existingComments = JSON.parse(localStorage.getItem("allComments_3"));
    if(existingComments == null) {
        existingComments = [];}
    var name_3 = document.getElementById("name_3").value;
    var message_3= document.getElementById("message_3").value;
    var errorArea = document.getElementById('errorarea_3');
    var comment = {
        "name": name_3,
        "message": message_3
    };
    
    var errormsg = "Please enter ";
    if (name_3 == ""){
        errormsg += "name";
    }
    
    if (message_3 == ""){
        if(name_3 == ""){
            errormsg += " and ";}
        errormsg += "message";
    }
    if (name_3 != "" && message_3 != "")
    {
        errorArea.innerHTML = "";
        document.getElementById('name_3').value = "";
        document.getElementById('message_3').value = "";
    }
    else
    {
        errorArea.innerHTML = errormsg;
        return false;
    }
  
    existingComments.push(comment);
    localStorage.setItem("allComments_3", JSON.stringify(existingComments));
    var msgArea3 = document.getElementById('comment_page_3');
   	values = existingComments;
   	if (values !=null){
        document.getElementById('show_comment_3').style.display = "block";
    for (i=0;i<values.length;i++)
    {
    	if(i == 0){
    		msgArea3.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
    	}
    	msgArea3.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
    	msgArea3.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_3').style.display = "none";
}
    document.getElementById('name_3').value = "";
	document.getElementById('message_3').value = "";
    return false;

}
function loadcomment_4(){
    var msgArea4 = document.getElementById('comment_page_4');
    values = JSON.parse(localStorage.getItem("allComments_4"));
    if (values !=null){
        document.getElementById('show_comment_4').style.display = "block";
    for (i=0;i<values.length;i++)
    {
        if(i == 0){
            msgArea4.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
        }
        msgArea4.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
        msgArea4.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_4').style.display = "none";
}
    document.getElementById('name_4').value = "";
    document.getElementById('message_4').value = "";
    return false;
}
function comment_4(){
	
    var existingComments = JSON.parse(localStorage.getItem("allComments_4"));
    if(existingComments == null) {
        existingComments = [];}
    var name_4 = document.getElementById("name_4").value;
    var message_4 = document.getElementById("message_4").value;
    var errorArea = document.getElementById('errorarea_4');
    var comment = {
        "name": name_4,
        "message": message_4
    };
    
    var errormsg = "Please enter ";
    if (name_4 == ""){
        errormsg += "name";
    }
    
    if (message_4 == ""){
        if(name_4 == ""){
            errormsg += " and ";}
        errormsg += "message";
    }
    if (name_4 != "" && message_4 != "")
    {
        errorArea.innerHTML = "";
        document.getElementById('name_4').value = "";
        document.getElementById('message_4').value = "";
    }
    else
    {
        errorArea.innerHTML = errormsg;
        return false;
    }
    
    existingComments.push(comment);
    localStorage.setItem("allComments_4", JSON.stringify(existingComments));
    var msgArea4 = document.getElementById('comment_page_4');
   	values = existingComments;
   	if (values !=null){
        document.getElementById('show_comment_4').style.display = "block";
    for (i=0;i<values.length;i++)
    {
    	if(i == 0){
    		msgArea4.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
    	}
    	msgArea4.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
    	msgArea4.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_4').style.display = "none";
}
    document.getElementById('name_4').value = "";
	document.getElementById('message_4').value = "";
    return false;

}
function loadcomment_5(){
    var msgArea5 = document.getElementById('comment_page_5');
    values = JSON.parse(localStorage.getItem("allComments_5"));
    if (values !=null){
        document.getElementById('show_comment_5').style.display = "block";
    for (i=0;i<values.length;i++)
    {
        if(i == 0){
            msgArea5.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
        }
        msgArea5.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
        msgArea5.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_5').style.display = "none";
}
    document.getElementById('name_5').value = "";
    document.getElementById('message_5').value = "";
    return false;
}
function comment_5(){
	
    var existingComments = JSON.parse(localStorage.getItem("allComments_5"));
    if(existingComments == null) {
        existingComments = [];}
    var name_5 = document.getElementById("name_5").value;
    var message_5 = document.getElementById("message_5").value;
    var errorArea = document.getElementById('errorarea_5');
    var comment = {
        "name": name_5,
        "message": message_5
    };
    
    var errormsg = "Please enter ";
    if (name_5 == ""){
        errormsg += "name";
    }
    
    if (message_5 == ""){
        if(name_5 == ""){
            errormsg += " and ";}
        errormsg += "message";
    }
    if (name_5 != "" && message_5 != "")
    {
        errorArea.innerHTML = "";
        document.getElementById('name_5').value = "";
        document.getElementById('message_5').value = "";
    }
    else
    {
        errorArea.innerHTML = errormsg;
        return false;
    }
   
    existingComments.push(comment);
    localStorage.setItem("allComments_5", JSON.stringify(existingComments));
    var msgArea5 = document.getElementById('comment_page_5');
   	values = existingComments;
    if (values !=null){
        document.getElementById('show_comment_5').style.display = "block";
    for (i=0;i<values.length;i++)
    {
    	if(i == 0){
    		msgArea5.innerHTML = "<h1>" + "Previous Comments" + "</h1>"+"<br />"
    	}
    	msgArea5.innerHTML += "<b>Name: </b>" + values[i]['name'] + "<br />";
    	msgArea5.innerHTML += "<b>Comment: </b>" + values[i]['message'] + "<br /> <hr>";
    }
}
else{
        document.getElementById('show_comment_5').style.display = "none";
}
    document.getElementById('name_5').value = "";
	document.getElementById('message_5').value = "";
    return false;

}
/*Reference https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196*/
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ':' + min + ':' + sec ;
  return time;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var openWeatherAppId = "8c0393fe97f11754238691017264d5cd";
  var cityName = "Berkeley,US";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(this.responseText)
      sunrise_time = timeConverter(resp['sys']['sunrise']);
      sunset_time = timeConverter(resp['sys']['sunset']);
      full_resp = "<table><tr><td>Description: " +resp['weather'][0]['description'] + "</td>"
      +"<td>Temperature: "+ resp['main']['temp'] + " &deg;F</td>"
      +"<td>Pressure: "+ resp['main']['pressure']+ " hPa</td></tr><tr><td>"
      +"Humidity: "+ resp['main']['humidity']+ " &#37;</td>"
      +"<td>Min Temp.: "+ resp['main']['temp_min']+ " &deg;F</td>"
      +"<td>Max Temp.: "+ resp['main']['temp_max']+ " &deg;F</td></tr><tr><td>"
      +"Wind Speed: "+ resp['wind']['speed']+ " miles/hour<br />"
      +"<td>Sunrise: "+ sunrise_time + "</td>"
      +"<td>Sunset: "+ sunset_time + "</td></tr></table>"
      document.getElementById("weather").innerHTML =full_resp;
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherAppId +"&units=imperial", true);
  xhttp.send();
}

