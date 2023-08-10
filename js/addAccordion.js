document.addEventListener('DOMContentLoaded', function() {
  const accordionPanels = document.querySelectorAll('#card-header');
  accordionPanels.forEach(function(panel) {
    new bootstrap.Collapse(panel.nextElementSibling);
  });
});

window.onload = function () {
  const upArrow = querySelectorAll('.up-arrow');
  upArrow.onclick = accordionArrow();
}

const changeBackgroundButton = document.getElementById('changeBackgroundButton');
const contentContainer = document.getElementById('contentContainer');

changeBackgroundButton.addEventListener('click', function() {
  contentContainer.style.backgroundImage = "url('path/to/your/image.jpg')";
});

