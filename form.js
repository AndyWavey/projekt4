/*jshint esversion: 6 */
const form = document.getElementById('form');
const begivenhed = document.getElementById('begivenhed');
const lokation = document.getElementById('lokation');
const dato = document.getElementById('dato');
const tid = document.getElementById('tid');
const beskrivelse= document.getElementById('beskrivelse');

form.addEventListener('submit', (event) => {



  validateForm();

if(isFormValid()==true){
  form.submit();
}else{
  event.preventDefault();
}

});

function isFormValid(){
  const inputContainers = form.querySelectorAll('.form-control');
let result=true;
  inputContainers.forEach((container) => {
    if(container.classList.contains('error')){
      result = false;
    }
  });
return result;
}

function validateForm(){
  // get the values from the checkInputs
  const begivenhedValue = begivenhed.value.trim();
  const lokationValue = lokation.value.trim();
  const datoValue = dato.value.trim();
  const tidValue = tid.value.trim();
  const beskrivelseValue = beskrivelse.value.trim();

  if(begivenhedValue === '') {
    // show error
    // add error class
    setErrorFor(begivenhed, 'Navnet skal udfyldes');
  }
  else{
    // add success class
    setSuccessFor(begivenhed);
  }

  if(lokationValue === '') {
    setErrorFor(lokation, 'Lokation skal udfyldes');
}
else{
  // add success class
  setSuccessFor(lokation);
}

  if(datoValue === '') {
    setErrorFor(dato, 'Datoen skal udfyldes');
}
else{
  // add success class
  setSuccessFor(dato);
}


  if(tidValue === '') {
    setErrorFor(tid, 'Tiden skal udfyldes');
}
else{
  // add success class
  setSuccessFor(tid);
}

  if(beskrivelseValue === '') {
    setErrorFor(beskrivelse, 'Skriv en kort beskrivelse');
}
else{
  // add success class
  setSuccessFor(beskrivelse);
}


}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-Control
  const small = formControl.querySelector('small');

  // add error messgae inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

const collection = document.getElementById('btn1');

let index= 1;

const colors = ['#cae4e3', '#f2cac1'];

collection.addEventListener('click', function onClik(){
  collection.style.backgroundColor = colors [index];
  collection.style.color = 'black';


  index = index >=colors.length - 1 ? 0 : index + 1;
});

const btn = document.getElementById('btn1');

btn.addEventListener('click', ()=>{

  if(btn.innerText === "Tilmeld"){
    btn.innerText = "Afmeld";
  }else {
    btn.innerText = "Tilmeld";
  }
});

for (var color of colors){
  console.log(color);
}


function checker(){
  let result = confirm('Er du sikker på dine oplysninger skal gå tabt?');
  if (result == false){
    event.preventDefault();
  }
}
