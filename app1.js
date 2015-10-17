var employeeArray=[];
var totalMonthlySalary=0;
var monthlySalary=0;

var test={
			answer:monthlySalary,
			name:"bill"
		};



$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();

		var values = {};
		

		console.log("test out of function ",test);

		console.log($("#employeeInfo").serializeArray());
		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		
		console.log("these are values ",values);
		employeeArray.push(values);
		appendDom(values, test);
	
		

			//test logic
			varmonthlySalary = (parseInt(values.annualSalary))/12;
			totalMonthlySalary = totalMonthlySalary + monthlySalary;
			console.log("this is values values.annualSalary ", values.annualSalary)
			console.log("this is values monthlySalary ", monthlySalary);
			console.log("total ",totalMonthlySalary);


	});
});

function appendDom(employee, x){
	console.log("this is employee ",employee);
	console.log("this is test in function ",test);
	console.log("total in function",totalMonthlySalary);
	

	$("#employeeContainer").append("<div class='employee'></div>");
	$("#outputContainer").append("<div class='output'></div>");
	
	var $el = $("#employeeContainer").children().last();
	var $el1 = $("#outputContainer").children().last();



	$el.append("<p>" + employee.employeeName + "</p>");
	$el.append("<p>" + employee.employeeId + "</p>");
	$el.append("<p>" + employee.jobTitle + "</p>");
	$el.append("<p>" + employee.annualSalary + "</p>");
	$el1.append("<p>" + "Total " + test.name +"</p>");



}


