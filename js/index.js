let counters = [0, 0, 0];
let targetValues = [];
function incrementCounter(index, counterElement) {
  if (counters[index] < targetValues[index]) {
    counters[index] += 3;
    counterElement.textContent = counters[index];
    requestAnimationFrame(() => incrementCounter(index, counterElement));
  }
}

function checkScroll() {
  let counterSections = document.querySelectorAll('.counterSection');
  let counterElements = document.querySelectorAll('.counter');
    counterElements.forEach((element) => {
        targetValues.push(parseInt(element.textContent));
    });
  counterSections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();
    let counterElement = section.querySelector('.counter');
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {

      incrementCounter(index, counterElement);
      window.removeEventListener('scroll', checkScroll);
    }
  });
}

window.addEventListener('scroll', checkScroll);