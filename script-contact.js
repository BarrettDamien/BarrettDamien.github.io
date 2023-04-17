/*Keeping it simple and using a browser alert to notify the visitor to any input errors and to acknowledge valid submission too*/
function myAlert(){
	/*Grabbing values from text fields on the contact page*/
	var nameField=document.getElementById('name').value;
	var emailField=document.getElementById('email').value;
	var selectField=document.getElementById('query').options[document.getElementById('query').selectedIndex].value;
	var textField=document.getElementById('subject').value;
	/*invalid submission alert checking for any blank fields and asking the user to fill everything*/
	if (nameField=="" || emailField=="" || textField=="")
		{
		   alert ("Please fill out the form fully. Thank you!");
		}
	/*once everything has text values, then acknowledge the submission and pull the values from the form to demonstrate that we can utilise the text field values*/
	else{
		alert("Thanks for reaching out "+nameField+". We'll be back in touch about your "+selectField+" query via "+emailField+" shortly.");
	}
};
/*This function powers the showing/hiding of the "setlists" for the performances to demonstrate that we can do reactive modification of the page based on user interaction*/
function setList(){
	/*Getting the divs for each text entry from the page, as well as the selectioon from the dropdowns*/
	var weddings=document.getElementById("setListW");
	var festivals=document.getElementById("setListF");
	var selection=document.getElementById("query").value;
	/*Simple if statement to show/hide each div based on the option selected in the form itself*/
	if(selection=="wedding"){
		/*If wedding, hide festivals, show wedding*/
		weddings.style.display = "block";
		festivals.style.display = "none";
	}
	else if(selection=="festival"){
		/*if festival, show festival, hide wedding*/
		weddings.style.display = "none";
		festivals.style.display = "block";
	}
	else{
		/*if anything else, i.e. "Other", then hide both*/
		weddings.style.display = "none";
		festivals.style.display = "none";		
	}
}