const pop = document.getElementById("pop");
const close = document.getElementById("x");
const container = document.getElementById("container");

pop.addEventListener("click",()=>{
    container.classList.add("open");
    pop.classList.add("close");
});
close.addEventListener("click",()=>{
    pop.classList.remove("close");
    container.classList.remove("open");
});