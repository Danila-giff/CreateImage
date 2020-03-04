const input = document.querySelector('input');
const randCol = prompt('Цвет:');
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
  canvas.style = 'background-color:red;
  main.appendChild(canvas);
  let ctx = canvas.getContext("2d");  
  ctx.fillStyle = '#89E604';
  ctx.font = '20px Arial';
  ctx.fillText(inputHeight + 'x' + inputWidth,5,29);
  //let dataURL = canvas.toDataURL("image/jpeg");

};
function c() {
  var dataURL = canvas.toDataURL("image/jpeg");
  var link = document.createElement("a");
  document.body.appendChild(link); // Firefox requires the link to be in the body :(
  link.href = dataURL;
  link.download = "my-image-name.jpg";
  link.click();
  document.body.removeChild(link);
};

 /* function  
     // get image URI from canvas object
    var imageURI = canvas.toDataURL("image/jpg");
    el.href = imageURI;
  };*/


  function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}