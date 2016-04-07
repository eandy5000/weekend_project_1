var employees = [];


function formSweep (){
    
    var formData = {};
        $.each($('#employeeForm').serializeArray(), function(i, field){
            formData[field.name] = field.value;  
        });
    employees.push(formData);
    console.log(employees);
    $('#employeeForm')[0].reset();
}

function appendEmployee () {
    
}

$(document).ready(function(){
    
    $('#employeeForm').submit(function(event){
        event.preventDefault();
        formSweep();
    });
    
    
    
    
});