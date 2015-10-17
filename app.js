console.log("hello");



var employeeArray=[];


$(document).ready(function(){
	
	$("#employeeInfo").submit(function(event){
     event.preventDefault();


	var values = {};

	console.log($("#employeeInfo").serializeArray());
	// line 16 creates an array of objects from the employee info submission
	$.each ($("#employeeInfo").serializeArray(), function(i,field){
 		values[field.name] = field.value;	
	// end employeeInfo serializeArray
	})

	
	

	

	//no semicolon end function event
	}) 
//end jQuery
});