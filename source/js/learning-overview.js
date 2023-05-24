// Get the element
const devopsTitleBorder = document.querySelector('.devops-title-border');

// Add click event listener to devopsTitleBorder element
devopsTitleBorder.addEventListener('click', function() {
  // Toggle the 'animate' class to activate or deactivate the animation
  devopsTitleBorder.classList.toggle('animate');
});
