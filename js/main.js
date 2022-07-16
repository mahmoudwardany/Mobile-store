let btn =document.getElementById('btn')
let pro =document.querySelector('.product')

function toggleclass(){
if(btn.innerHTML=='Show More'){
pro.classList.toggle('show')
btn.innerHTML='Hide'
}else{
    btn.innerHTML='Show More'
}

}
btn.addEventListener('click', toggleclass)
