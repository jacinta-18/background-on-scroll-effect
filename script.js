bgImgEl = document.getElementById("bg-img")


window.addEventListener("scroll", ()=>{
    updateImage()
})


function updateImage(){
    bgImgEl.style.opacity = 1 - window.scrollY / 900;
    bgImgEl.style.backgroundSize = 160 - window.scrollY / 12 + "%"

   
}
