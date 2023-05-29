// // Get the element
// const devopsTitleBorder = document.querySelector('.devops-title-border');

// // Add click event listener to devopsTitleBorder element
// devopsTitleBorder.addEventListener('click', function() {
//   // Toggle the 'animate' class to activate or deactivate the animation
//   devopsTitleBorder.classList.toggle('animate');
// });


const clickBooks = () => {
 
  const book1 = document.querySelector('.book-1');
  const book2 = document.querySelector('.book-2');
  console.log(book1);

  book1.addEventListener('click', function () {
    let title = document.querySelector('.devops-title-border');
    localStorage.setItem("courseClicked", title.innerHTML)
    window.location.href = "/source/html/pages/courses-finised/courses-finished.html"
  })

  book2.addEventListener('click', function () {
    let title = document.querySelector('.agile-title-border');
    localStorage.setItem("courseClicked", title.innerHTML)
    window.location.href = "/source/html/pages/courses-finised/courses-finished.html"
  })
}

document.addEventListener('DOMContentLoaded', clickBooks, false);
