const cities = [" Fasalabad"," Lahore"," Karachi"," Islamabad"," Burewal"," Sheikhupura"," Kashmir"];

document.getElementById("header").innerHTML= "<h1>Welcome To:</h1>" + localStorage.getItem("username");
document.getElementById("orgString").innerHTML=cities;
// Add City
function AddCity(){
  let newCity = document.getElementById("input").value;
    cities.push(newCity);
    if (newCity) 
    {
    document.getElementById("orgString").innerHTML=cities;
    document.getElementById("output").innerHTML=cities;
    return false;
    }
    else
    {
    	alert("first Enter city in input Field ");
    	window.location.href="newpage.html";

    }
    if (newCity==cities) 
    {
    	alert("Already exist ");
    }
}
//PrintCity()
function PrintCity()
{ 
	 document.getElementById("orgString").innerHTML="";
     document.getElementById("Output").innerHTML="";
	for (var index = 0; index<=cities.length-1; index++) 
		{
         let indexNumber = index;
         document.getElementById("orgString").innerHTML += "(" + indexNumber + ")"+ cities[index] + "<br>"  ;
         document.getElementById("Output").innerHTML += "(" + indexNumber + ")"+ cities[index] + "<br>";


	    }
}

	document.getElementById("clear").onclick=function(){
		 document.getElementById("Output").innerHTML="";
		 
	}
