let msg= document.querySelector(".message");
let form= document.querySelector("#form");
let cancelBtn= document.querySelector(".closebtn")
let btn= document.getElementById("btn");
btn.addEventListener("click", validateForm)
var selectedAnswers= [];


function validateForm(){

// VALIDATE RADIO BUTTONS
    let radios= document.getElementsByName("date") ;
    radio=0

    for (i=0; i<radios.length; i++){
        if (radios[i].checked){
            radio=1
          let selectedRadio=radios[i].value;
          selectedAnswers.push(selectedRadio)
        }
    }


// VALIDATE SELECT
let select= document.getElementById("select");
  if (select.value){
     let selectedSelect=select.value;
        selectedAnswers.push(selectedSelect);

}


//VALIDATE TEXT AREA 
let textarea=document.getElementById("textarea");
if(!textarea.value ==""){
    let written=textarea.value
    selectedAnswers.push(written);
}
else{
    alert("ALL ANSWERS ARE REQUIRED");
    
}



// VALIDATE CHECKBOXES

var selectedChecksArray=[];
    let checkBoxes= document.getElementsByName("wine") ;
    check=0
    for (i=0; i<checkBoxes.length; i++){
        if (checkBoxes[i].checked){
            check= check + 1;
            let selectedchecks=checkBoxes[i].value;
            console.log(selectedchecks)
            selectedChecksArray.push(selectedchecks)
        }
    }
    selectedAnswers.push(selectedChecksArray);
   
if (check >0){
form.style.display="none"
 msg.style.zIndex= "3"
 msg.style.opacity= "1"
     
}
else {
    alert("ALL ANSWERS ARE REQUIRED");
    return
}






}
cancelBtn.addEventListener("click", ()=>{




var questions =[
    {
"question":"1. What year was Velvety wine initially launched",
"selected": `${selectedAnswers[0]}`
    },
    {
        "question":"2. Where is the manufacturing company of Velvety Located?",
        "selected": `${selectedAnswers[1]}`
            },
            {
                "question":"3. What type of wine do you like? - Multiple choice",
                "selected": `${selectedAnswers[3]}`
                    },
                    {
                        "question":"4. Leave a Comment to help improve Velvety",
                        "selected": `${selectedAnswers[2]}`
                            }
];

for(var i=0; i<4; i++){
    document.write("")
document.write(questions[i].question + "<br>");
document.write(`Your Selected answer is :<strong>${questions[i].selected}</strong>  <hr>`);
}

})
