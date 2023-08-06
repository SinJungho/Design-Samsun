var elements = document.querySelectorAll(".element");
var currentIndex = 0;

function showNextElement() {
  if (currentIndex < elements.length) {
    elements[currentIndex].classList.remove("hidden");
    currentIndex++;
  }
}

// 요소 삭제 메서드
// function deleteElement(params) {
//   if (currentIndex > 0) {
//     currentIndex--;
//     elements[currentIndex].classList.add("hidden");
//   }
// }

function handleMouseWheel(event) {
  var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
  if (delta < 0) {
    // Scroll down
    showNextElement();
  } else {
    deleteElement();
  }
  // Prevent the default scroll behavior
  event.preventDefault();
}

// Add the mouse wheel event listener to the document
if (document.addEventListener) {
  document.addEventListener("mousewheel", handleMouseWheel, false); // For modern browsers
  document.addEventListener("DOMMouseScroll", handleMouseWheel, false); // For Firefox
} else {
  document.attachEvent("onmousewheel", handleMouseWheel); // For older IE versions
}
