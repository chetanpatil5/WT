
function validateForm() {
var x = document.forms["myform"]["lname"].value;
if (x == "") {
 alert("Last Name must be filled out");
  return false;
}

var y=document.forms["myform"]["fname"].value;
if(y==""){
	
	alert("First Name must be filled out");
	return false;
}

var z=document.forms["myform"]["mname"].value;
if(z==""){
	
	alert("Middle Name must be filled out");
	return false;
}
var iage=document.getElementById("ag").value;


if(iage==""|| isNaN(iage)){
alert("Enter the valid age between 0 to 100");
return false;
}

//var regemail=/^[a-zA-Z0-9]+@gmail.com/;
var mailid = document.forms["myform"]["email"].value;
var atposition=mailid.indexOf("@");  
var dotposition=mailid.lastIndexOf(".");  
if (mailid == "") {
 alert("Email not entered");
  return false;
}
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mailid.length)
{  
	  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
	  return false;  
	  }  


var mob = document.forms["myform"]["mobile"].value;
if (mob == "") {
 alert("Contact no. not entered");
  return false;
}


}
