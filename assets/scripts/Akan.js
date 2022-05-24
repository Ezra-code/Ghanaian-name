let dateEl = document.querySelector("#date")
let gender = document.querySelector("#gender")
let btn = document.querySelector("#btn")
let mName = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let fName = ["Akosua","Aduwoa","Abena","Akuwa","Yaa","Afua","Ama"]
let dd;
let message = document.getElementById("message");
let err = document.getElementById("error");
function dayOfWeek() {
    let d = dateEl.value
    let CC = parseInt(d.substring(0,2))
    let YY = parseInt(d.substring(2,4))
    let MM = parseInt(d.substring(5,7))
    let DD = parseInt(d.substring(8,10))
    
    let D = (((CC/4) - 2 * CC - 1) + ((5 * YY) / 4) + 26*(MM + 1)/10 + DD) % 7
    dd = Math.floor(Math.abs(D))
}
function akanName(){
    if(gender.value == "female"){
       message.innerHTML = `Your Akan name is ${fName[dd]}`
    }else if(gender.value == "male"){
        message.innerHTML = `Your Akan name is ${mName[dd]}`
    }
}

btn.addEventListener("click", () =>{
    if(dateEl.value == "" || gender.value == ""){
        err.style.display = "block";
    }else{
        dayOfWeek()
        akanName()
        dateEl.value = ""
        gender.value = ""
    }
    
   
})
