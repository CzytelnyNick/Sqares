// p = document.querySelector("p")
body = document.querySelector("body")

window.addEventListener("click", e => {
    div = document.createElement("div")
    let d = e.x;
    let a = e.y;
    red = Math.floor(Math.random() * 256)
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() *256)
    div.style.backgroundColor = `rgb(${red},${green},${blue})`
    div.style.position = "absolute"
    div.style.left = `${d}px`
    div.style.top = `${a}px`
    body.appendChild(div)
    div.innerHTML = `${e.x}, ${e.y}`
    div.classList.add("square")
    // div.addEventListener("ondrag", () =>{
    //     div.style.draggable = "true"
    //     div.style.left = d
    //     div.style.top = a
    //     div.innerHTML = `${e.x}, ${e.y}`
    // })
    // p = document.createElement("p")
    // p.classList(square)
    div.addEventListener("contextmenu", e => {
        
        div.style.animation = "anim2 0.2s linear forwards"
        
            window.stop()
        
        body.removeChild(e.currentTarget)

    
        
        
        
    })
  
})
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
 }, true);


