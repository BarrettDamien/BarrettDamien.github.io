function toggleImages() {
  var images = document.getElementById('images');
  var videos = document.getElementById('videos');
  
  images.classList.remove('hidden');
  videos.classList.add('hidden');
}

function toggleVideos() {
  var images = document.getElementById('images');
  var videos = document.getElementById('videos');
  
  videos.classList.remove('hidden');
  images.classList.add('hidden');
}