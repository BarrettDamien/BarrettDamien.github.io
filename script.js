//Create an application that asks a user to enter how many subjects they have. The application should then ask the user to enter the results for each subject. Store these results in an array and print them back to the user along with their overall average and grade for each module.
let results=[];
let average=0;
let grades=[];
let total=0;

function compute(){
	subjects=parseInt(prompt("Please enter how many subjects you are inputting results for"));
	for(var i=0;i<subjects;i++){
		results[i]=parseInt(prompt("Please enter score for subject #"+(i+1)));
	}
	for(i=0;i<subjects;i++){
		if((results[i]>=70) && (results[i]<=100)){
			 grades[i]="1.1";
		}
		else if((results[i]>=60) && (results[i]<70)){
			 grades[i]="2.1";
		}
		else if((results[i]>=50) && (results[i]<60)){
			 grades[i]="2.2";
		}
		else if((results[i]>=40) && (results[i]<50)){
			 grades[i]="Pass";
		}
		else if((results[i]>=0) && (results[i]<40)){
			 grades[i]="Fail";
		}
		else{
			 grades[i]="Invalid result";
		}
	}
	for(var i=0;i<subjects;i++){
			total+=results[i];
		}
	average=total/subjects;
	
	document.getElementById("avg").innerHTML="Your average is "+parseInt(average);
	for(i=0;i<subjects;i++){
		document.getElementById("result-list").innerHTML+="Your result for module "+(i+1)+" was " +results[i]+". This means your grade was "+(grades[i])+"</br>";
	}
}