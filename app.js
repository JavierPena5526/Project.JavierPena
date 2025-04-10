const happyMan = document.querySelector(".closed")
const wareWolf = document.querySelector(".open")

//add event listener

happyMan.addEventListener("click", () => {
    if(wareWolf.classList.contains("open")) {
        wareWolf.classList.add("active");
        happyMan.classList.remove("active");
    }
})

wareWolf.addEventListener("click", () => {
    if(happyMan.classList.contains("closed")) {
        happyMan.classList.add("active");
        wareWolf.classList.remove("active");
    }
})