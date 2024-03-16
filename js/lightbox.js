const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menubar1 = document.querySelector('.menubar')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparacerImagen(imagen.getAttribute('src'))
    })
})


contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menubar1.computedStyleMap.opacity = '1'
    }
})


const aparacerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menubar1.computedStyleMap.opacity = '0'
}