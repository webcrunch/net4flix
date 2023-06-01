

document.addEventListener('DOMContentLoaded', function () {
  const scheduleBook = document.getElementById('scheduleBook');
  const learningBook = document.getElementById('learningBook');

  scheduleBook.addEventListener('click', function () {
    scheduleBook.classList.add('selected');

    setTimeout(() => {
      window.location.href = '/';
    }, "2000");
  });

  learningBook.addEventListener('click', function () {
    window.location.href = '/source/html/pages/learning-overview/learning-overview.html';
    learningBook.classList.add('selected');

  });
});
