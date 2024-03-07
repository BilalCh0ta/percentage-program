var chem = document.querySelector(".chemMarks")
var phy = document.querySelector(".phyMarks")
var math = document.querySelector(".mathMarks")
var english = document.querySelector(".engMarks")
var islamiat = document.querySelector(".islMarks")
var total = document.querySelector(".total")
var obtained = document.querySelector(".obtained")
var per= document.querySelector(".per")
var grade= document.querySelector(".grade")




function calcper(){
    console.log(chem.value)
    console.log(phy.value)
    console.log(math.value)
    console.log(english.value)
    console.log(islamiat.value)
    
var totalMarks = 500
var obtainedMarks = +chem.value + +phy.value + +math.value + +english.value + +islamiat.value
var percentage = (obtainedMarks * 100 ) / totalMarks


total.innerHTML = totalMarks
obtained.innerHTML = obtainedMarks
per.innerHTML = percentage

if(percentage <= 100  && percentage >=80 ){
grade.innerHTML = "A+" 
}
else if(percentage <= 80 && percentage >= 70){
    grade.innerHTML = "A"
}
else if(percentage <= 70 && percentage >= 60){
    grade.innerHTML = "B"
}
else if(percentage <= 60 && percentage >= 50){
    grade.innerHTML = "C"
}
else{
    grade.innerHTML = "bhai jan rikshaw chlao"
}


}
