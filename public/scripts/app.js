function formSweep(){var e={};$.each($("#employeeForm").serializeArray(),function(a,t){e[t.name]=t.value}),employees.push(e),appendEmployee(e),calcSalary(),$("#employeeForm")[0].reset()}function appendEmployee(e){var a="<tr><td>"+e.fName+"</td><td>$"+e.salary+'</td><td><button class="btn btn-danger">Remove</button></td>NaN';$("#employeeDisplay").append(a)}function calcSalary(){for(var e=0,a=0;a<employees.length;a++)e+=parseInt(employees[a].salary);$("#salary").empty(),$("#salary").append("<h4>Total Salary</h4><p>$"+e+"</p>")}var employees=[];$(document).ready(function(){$("#employeeForm").submit(function(e){e.preventDefault(),formSweep()}),$("#employeeDisplay").on("click","button",function(){var e=$(this).parent().parent();$(e).remove()})});