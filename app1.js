var employeeArray=[];
var totalMonthlySalary=0;

$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();

		var values = {};

		console.log($("#employeeInfo").serializeArray());
		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		console.log("these are values ",values);
		employeeArray.push(values);
		appendDom(values);
	
		

			//test logic
			var monthlySalary = (parseInt(values.annualSalary))/12;
			totalMonthlySalary = totalMonthlySalary + monthlySalary;
			console.log("this is values values.annualSalary ", values.annualSalary)
			console.log("this is values monthlySalary ", monthlySalary);
			console.log("total ",totalMonthlySalary);

	});
});

function appendDom(employee){
	console.log("this is employee ",employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();



	$el.append("<p>" + employee.employeeName + "</p>");
	$el.append("<p>" + employee.employeeId + "</p>");
	$el.append("<p>" + employee.jobTitle + "</p>");
	$el.append("<p>" + employee.annualSalary + "</p>");
	$el.append("<p>" +totalMonthlySalary + "</p>");

}


