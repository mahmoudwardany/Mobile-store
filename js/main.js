let btn =document.getElementById('btn')
let pro =document.querySelector('.product')

function toggleclass(){
pro.classList.toggle('show')
  btn.innerHTML='hide'

}
btn.addEventListener('click', toggleclass)
