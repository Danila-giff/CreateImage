const input = document.querySelector('input');

input.addEventListener('input', ev => {
  let value = ev.target.value;
  value = value.replace(/\D/g, '');
  ev.target.value = value;
})

const main = document.querySelector('.main');



function newCanvas() {
  let inputHeight = document.getElementById('height').value;
  let inputWidth = document.getElementById('width').value;
  const canvas = document.createElement('canvas');
  canvas.height = inputHeight;
  canvas.width = inputWidth;
  canvas.style = 'background-color:white';
  main.appendChild(canvas);
  let ctx = canvas.getContext("2d");  
  ctx.font = '20px Arial';
  ctx.fillText(inputHeight + 'x' + inputWidth,5,29);
  Math.random*256
  



};
  download_img = function(el) {
    // get image URI from canvas object
    var imageURI = canvas.toDataURL("image/jpg");
    el.href = imageURI;
  };


