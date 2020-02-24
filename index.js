const input = document.querySelector('input');

input.addEventListener('input', ev => {
  let value = ev.target.value;
  value = value.replace(/\D/g, '');
  ev.target.value = value;
})

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");  
const main = document.querySelector('.main');



// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();    

function newCanvas() {
  let inputHeight = document.getElementById('height').value;
  let inputWidth = document.getElementById('width').value;
  const canvas = document.createElement('canvas');
  canvas.height = inputHeight;
  canvas.width = inputWidth;
  canvas.style = 'background-color:white';
  main.appendChild(canvas);
  ctx.font = '30px Arial';
  ctx.fillText("Helo World",10,50);

};

download_img = function(el) {
  // get image URI from canvas object
  var imageURI = canvas.toDataURL("image/jpg");
  el.href = imageURI;
};

