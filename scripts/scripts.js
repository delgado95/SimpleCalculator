var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var result = document.querySelector('span')

function add(){
  result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}


function subtract(){
  result.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}


function multiply(){
  result.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}


function divide(){
  result.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}