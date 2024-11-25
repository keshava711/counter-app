let countvalue=document.getElementById("count")
let inc=document.getElementById("increase")
let dec=document.getElementById("decrease")
let Reset=document.getElementById("clear")
let count=0
function display(){
    countvalue.textContent=count
}
 
inc.addEventListener("click",()=>{
    count++
    display()
})

dec.addEventListener("click",()=>{
    countvalue.textContent=count--
    display()
})


Reset.addEventListener("click",()=>{
    count=0
    display()
})