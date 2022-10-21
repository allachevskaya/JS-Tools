const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
  slide.addEventListener('click',()=>{
    clearActiveClass()
    slide.classList.add('active')
  })
})


function clearActiveClass() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}