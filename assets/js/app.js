/*Recipe*/

// Find alle cirkler/tjekbokse
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('checked');
    circle.nextElementSibling.classList.toggle('checked');
  });
});

