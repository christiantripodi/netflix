let row = document.getElementsByTagName('section')

document.addEventListener('scroll', (event) => {
    for (let i of row) {
        if (i.getBoundingClientRect().top >= window.innerHeight) {
            i.classList.add('section-invisible')
        }
        else {
            i.style.opacity="1"
            i.style.transition="opacity 2s"
        }   
    }
    
})




