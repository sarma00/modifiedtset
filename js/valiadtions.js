function validateform(){
//alert("he");
	var errorflag			= true;
	var email				= "";
	var name				= "";
	var message				= "";
	var namereg				= /^[a-zA-Z]+$/;	
	var emailreg			= /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	 name=document.getElementById('txtname').value;
	 //alert(name);
	 email=document.getElementById('txtemail').value;
	 //alert(email);
	 message=document.getElementById('comment').value;	
	 if(name==""){
		//alert("name??");
		document.getElementById('errorname').innerHTML="Please enter your name";
		errorflag=false;
	}	
	 else if(name!=""){
	 //alert("no namew");
		if(!namereg.test(name)){
			//alert("no name");
			document.getElementById('errorname').innerHTML="Name must have only alphabets";
			errorflag= false;
		}
	}
	 if(email==""){
		document.getElementById('erroremail').innerHTML="Please enter your email";
		errorflag=false;
	}
	if(email!=""){
		if(!emailreg.test(email)){
			document.getElementById('erroremail').innerHTML="Please enter a valid email";
			errorflag= false;
		}
	 }
	if(message==""){
		document.getElementById('errormsg').innerHTML="Please enter a message";
		errorflag=false;
	}	
	if(email !="" && name!="" && message !="" && errorflag!=false){
		document.getElementById('success').innerHTML="Your message has been sent";
	}	
	return errorflag;
}
