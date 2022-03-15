
const collection1 = document.getElementById('myBtn');

let index= 1;

const colors = ['#00454E', '#f2cac1'];

collection1.addEventListener('click', function onClik(){
  collection1.style.backgroundColor = colors [index];
  collection1.style.color = 'white';


  index = index >=colors.length - 1 ? 0 : index + 1;
});

const knap = document.getElementById('myBtn');

knap.addEventListener('click', ()=>{

  if(knap.innerText === "Tilmeld"){
    knap.innerText = "Afmeld";
    knap.style.color = '#00454E';
  }else {
    knap.innerText = "Tilmeld";
  }
});

for ( color of colors){
  console.log(color);
}
