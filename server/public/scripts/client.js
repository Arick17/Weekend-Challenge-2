console.log('sourced client.js');
equation = {
    x = 0,
    y = 0,
    operator = ''
}
$(document).ready(function(){
    console.log('jquery works');

    $('#add').on('click',add)
    $('#subtract').on('click',subtract)
    $('#multiply').on('click',multiply)
    $('#divide').on('click',divide)
    $('#equals').on('click',equals)
    



});//end doc ready

function mathStuff(){
    equation.x = $('#inputOne').val()
    equation.x = $('#inputTwo').val()
}

function add(){
    equation.operator = '+'
}
function subtract(){
    equation.operator = '-'
}
function multiply(){
    equation.operator = '*'
}
function divide(){
    equation.operator = '/'
}
function equals(){
    mathStuff();
    $.ajax({
        method: 'POST',
        url:'/calculate',
        data: {equation_set: equation},
        success: function (response){
            console.log(response);
        }
    })
}