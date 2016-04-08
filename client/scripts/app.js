var employees = [];


function formSweep (){
    
    var formData = {};
        $.each($('#employeeForm').serializeArray(), function(i, field){
            formData[field.name] = field.value;  
        });
    employees.push(formData);
    appendEmployee();
    calcSalary();
    $('#employeeForm')[0].reset();
    return;
}

function appendEmployee () {
        var el2 =   '<tr>'+
                        '<th>Employee Name</th>'+
                        '<th>Salary</th>'+
                        '<th>Remove</th>'+
                    '</tr>';   
                     
   $('#employeeDisplay').empty();
    $('#employeeDisplay').append(el2);
     
    for (var i = 0; i < employees.length; i++) {
     var el = '<tr data-id="'+i+'">'+
                '<td>'+employees[i].fName+'</td>'+
                '<td>$'+employees[i].salary+'</td>'+
                '<td><button class="btn btn-danger">Remove</button></td>'+
            +'</tr>';
        $('#employeeDisplay').append(el);     
    }
            

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
       employees.splice($(el).attr('data-id'), 1);
       console.log($(el).attr('data-id'));
       $(el).remove();
       calcSalary();
    });
    
    
    
    
});