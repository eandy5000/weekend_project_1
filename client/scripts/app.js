var employees = [];


function formSweep (){
    
    var formData = {};
        $.each($('#employeeForm').serializeArray(), function(i, field){
            formData[field.name] = field.value;  
        });
    employees.push(formData);
    appendEmployee(formData);
    calcSalary();
    $('#employeeForm')[0].reset();
    return;
}

function appendEmployee (formData) {
    
     var el = '<tr>'+
                '<td>'+formData.fName+'</td>'+
                '<td>$'+formData.salary+'</td>'+
                '<td><button class="btn btn-danger">Remove</button></td>'+
            +'</tr>';
    
    $('#employeeDisplay').append(el);
    return;
   
}

function calcSalary (){
    
     var total = 0;
    for (var i = 0; i < employees.length; i++){
        total = total + parseInt(employees[i].salary);
    }
   
            $('#salary').empty();
            $('#salary').append('<h4>Total Salary</h4>'+
            '<p>$'+total+'</p>');
       
    
    return;
}

$(document).ready(function(){
    
    $('#employeeForm').submit(function(event){
        event.preventDefault();
        formSweep();
        
        
    });
    
    $('#employeeDisplay').on('click', 'button', function(){
       var el = $(this).parent().parent();
       $(el).remove();
    });
    
    
    
    
});