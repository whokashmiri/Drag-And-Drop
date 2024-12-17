const notesCon = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector("notes")

function showNotes(){
    notesCon.innerHTML = localStorage.getItem("notes")
}
showNotes()


function updateStorage(){
    localStorage.setItem("notes" , notesCon.innerHTML)
}

createBtn.addEventListener("click", () => 
    { 
    let inputBox = document.createElement("p"); 
    inputBox.className="inp";
    let img = document.createElement("img");
    inputBox.className="inp"
    inputBox.setAttribute("contenteditable" , "true")
    img.src ="delete.png"
    notesCon.appendChild(inputBox)
    inputBox.appendChild(img)
   
    });



notesCon.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
    notes.document.querySelector(".inp")
    notes.forEach(nt=>{
    nt.onkeyup= function(){
        updateStorage();
    }
})
    }
})

document.addEventListener("keydown" , event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }

})