// Elementos DOM
const boxes = document.querySelectorAll(".box")
const lines = document.querySelectorAll('.line')
const toggle = document.querySelector("#container")
const toggleContent = document.querySelector(".toggle-content")
const body = document.querySelector("body")

const toggleDarkLight = () => {
  toggle.classList.toggle("active")
  if (body.classList.contains = "dark"){
    body.classList.toggle("light")
  } else {
    body.classList.toggle("dark")
  }
}

const animationBoxes = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento es visible
    if (entry.isIntersecting) {
      // Agrega una clase para animar el elemento
      entry.target.classList.add('animate-boxes');
    } else {
      // Si el elemento ya no es visible, remueve la clase de animación
      entry.target.classList.remove('animate-boxes');
    }
  });
});



// Crea una nueva instancia de IntersectionObserver
const animationLines = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento es visible
    if (entry.isIntersecting) {
      // Agrega una clase para animar el elemento
      entry.target.classList.add('line-animate');
    } else {
      // Si el elemento ya no es visible, remueve la clase de animación
      entry.target.classList.remove('line-animate');
    }
  });
});



const init = () => {
  // Clicks
  toggle.addEventListener('click', toggleDarkLight)
  // ForEachs
  // Observar cada linea a animar
  boxes.forEach((box) => animationBoxes.observe(box))
  lines.forEach((line) => animationLines.observe(line));

}

init()