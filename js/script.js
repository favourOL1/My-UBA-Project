document.addEventListener("DOMContentLoaded", ()=>{
    const navbar=document.getElementById("navbar")

    document.addEventListener('scroll',()=>{

        const scrollY = window.scrollY

        if(scrollY > 50) {
            navbar.classList.add('white-nav')
        } else{
            navbar.classList.remove('white-nav')
        }

        console.log(window.scrollY)

    })


})