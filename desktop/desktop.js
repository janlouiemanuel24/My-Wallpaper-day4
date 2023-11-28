// modal
var modal = document.getElementById('myModal');

// image 
var images = document.querySelectorAll('.wallpaper');
var modalImg = document.getElementById('resizableImage');
images.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

//close modal
var span = document.getElementsByClassName('close')[0];

span.addEventListener('click', function() {
  modal.style.display = 'none';
});


var modal = document.getElementById('myModal');
var canvas = document.getElementById('resizableCanvas');
var ctx = canvas.getContext('2d');
var downloadLink = document.getElementById('downloadLink');

var images = document.querySelectorAll('.wallpaper');
var modalImg = document.getElementById('resizableImage');
var closeBtn = document.getElementsByClassName('close')[0];

images.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    var imgElement = new Image();
    imgElement.src = this.src;
    imgElement.onload = function() {
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
    };
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

downloadLink.addEventListener('click', function() {
  var dataURL = canvas.toDataURL('image/jpeg', 1.0);
  downloadLink.href = dataURL;
});

// resolution resizer


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const canvas = document.getElementById('resizableCanvas');
  const ctx = canvas.getContext('2d');
  const downloadLink = document.getElementById('downloadLink');
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');
  const closeBtn = document.getElementsByClassName('close')[0];

  let imgElement;

  function updateCanvas() {
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
  }

  function resizeImage() {
      const targetWidth = parseInt(widthInput.value, 10) || imgElement.width;
      const targetHeight = parseInt(heightInput.value, 10) || imgElement.height;

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      ctx.drawImage(imgElement, 0, 0, targetWidth, targetHeight);
      downloadLink.href = canvas.toDataURL('image/jpeg', 1.0);
  }

  function openModal(src) {
      imgElement = new Image();
      imgElement.src = src;
      imgElement.onload = updateCanvas;
      modal.style.display = 'block';
  }

  

  // close modal
  closeBtn.addEventListener('click', closeModal);
  function closeModal() {
    modal.style.display = 'none';
}
  downloadLink.addEventListener('click', resizeImage);

  const images = document.querySelectorAll('.wallpaper');
  images.forEach((img) => {
      img.addEventListener('click', function () {
          openModal(this.src);
      });
  });
});



