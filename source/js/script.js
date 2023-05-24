

document.addEventListener('DOMContentLoaded', function() {
   const scheduleBook = document.getElementById('scheduleBook');
    const learningBook = document.getElementById('learningBook');
  
    scheduleBook.addEventListener('click', function() {
      scheduleBook.classList.add('selected');

      setTimeout(() => {
        window.location.href= '/scheduleBook.html';
      }, "2000");
    });
  
    learningBook.addEventListener('click', function() {
      window.location.href ='/learning.html';
      learningBook.classList.add('selected');

    });
  });
  