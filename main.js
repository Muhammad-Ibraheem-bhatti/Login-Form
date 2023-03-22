
function toast(msg) {
    Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();
}

function login() {
	var pass= "123456";
	var mail1= "admin@user.com";
	var username = document.getElementById('user').value;

	var passward = document.getElementById('password').value;
	var email1 = document.getElementById('mail').value;
    
    if (username.length<= 2) 
    {
    
 alert("username is too short...");
 return false;
    }

	if (passward == pass && email1 == mail1) {
         var msgs = "Acount are created.";
       
         
       window.location.href="newpage.html";
      
        localStorage.setItem("username",username);
        
       
		
	}
	else
	{
		if (passward != pass) 
		{
			// alert("passward are wrong");
			
			return;
		}
		else
		{
          alert("Email are wrong");
          return;
		}
		
	}


}
 
 function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}