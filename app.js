const startBtn = document.querySelector(".start-btn button");
const infoBox=  document.querySelector(".info-box");
const exitBtn =  document.querySelector(".quit");
const continueBtn =  document.querySelector(".re-start");
const quizBox=  document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const timeCount =  quizBox.querySelector(".timer-sec");
const timeLine = quizBox.querySelector(".timer-line");
const resultBox = document.querySelector(".result-box")
const restartQuiz = resultBox.querySelector(".re-start")
const quitQuiz = resultBox.querySelector(".quit")
console.log(restartQuiz)
// =======IF START BUTTON CLICKED =========
startBtn.onclick = ()=> {
    infoBox.classList.add("activeInfo");

};
// =======IF EXIT BUTTON CLICKED =========

exitBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");

};
function reload(){
    window.location.reload()
}
// =======IF CONTINUE BUTTON CLICKED =========
continueBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQues(0)
    quesCounter(1)
    startTimer(15)
    startTimerLine(0)
};
let Counter;
let timeValue=15;
let quesCount = 0;
let quesNum = 1;
let widthValue = 0;
let userScore= 0;
const nxtBtn = document.querySelector(".next-btn")
nxtBtn.onclick=()=>{
 if(quesCount < questions.length -1){
    quesCount++
    quesNum++
    showQues(quesCount)
    quesCounter(quesNum)
    clearInterval(Counter)
    startTimer(timeValue)
    clearInterval(CounterLine)
startTimerLine(widthValue)
nxtBtn.style.display = "none"
    
 }else{
    showResultBox()
    console.log(`completed`)
 }
}
function showQues(index){
    const questext = document.querySelector(".ques");
    const optionList = document.querySelector(".option-list");
    let queTag =`<span>${questions[index].num}${`.`}${questions[index].question} </span>`
    questext.innerHTML=queTag
    let optionTag = ` <div class="option"><span>${questions[index].options[0]}</span></div>
                      <div class="option"><span>${questions[index].options[1]}</span></div>
                      <div class="option"><span>${questions[index].options[2]}</span></div>
                      <div class="option"><span>${questions[index].options[3]}</span></div>`
    optionList.innerHTML = optionTag
    const option = optionList.querySelectorAll(".option")
    console.log(option)
for(let i = 0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)")
}
}
let tickIcon = ` <div class="icon tick" >
<i class="fas fa-check"></i>
</div>`
let crossIcon = ` <div class="icon cross" >
<i class="fas fa-times"></i>
</div>`

function optionSelected(answer){
    clearInterval(Counter)
    clearInterval(CounterLine)
    let userAns= answer.textContent;
    let correctAns= questions[quesCount].answer;
    let allOptions = optionList.children.length
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore)
        answer.classList.add("correct")
        console.log(`sahi answer`)
        answer.insertAdjacentHTML("beforeend", tickIcon)
        
        }else{
        answer.classList.add("incorrect")
        console.log(`wrong ans`)
        answer.insertAdjacentHTML("beforeend",crossIcon)
    }
    
    for(let i = 0; i < allOptions; i++){
       if(optionList.children[i].textContent==correctAns){
        optionList.children[i].setAttribute("class", "option correct")
        optionList.children[i].insertAdjacentHTML("beforeend",tickIcon)
       }
    }

    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled")
        console.log(optionList.children[i])
        
     }
     
   nxtBtn.style.display = "block"
    

}

function startTimer(time){
    Counter = setInterval(timer,1000)
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero

        }
        if(time < 0){
            clearInterval(Counter)
            timeCount.textContent="00";
        }
    }
}

function showResultBox(){
    infoBox.classList.remove("activeInfo");
    quizBox.classList.remove("activeQuiz");
    resultBox.classList.add("activeResult");
    const resultText = document.querySelector(".score-text")
    if(userScore == 5 || userScore == 4){
        let scoreTag =  ` <span>Congratulations,You got only <p>${userScore}</p>out of <p>5</p></span>`
        resultText.innerHTML = scoreTag
    }else if(userScore == 3){
        let scoreTag =  ` <span>Keep it up,You got only <p>${userScore}</p>out of <p>5</p></span>`
        resultText.innerHTML = scoreTag
    }else{
        let scoreTag =  ` <span>sorry,You got only <p>${userScore}</p>out of <p>5</p></span>`
        resultText.innerHTML = scoreTag
    }
}

function startTimerLine(time){
    CounterLine = setInterval(timer , 29)
    function timer(){
        time +=1
        timeLine.style.width = time + "px"
      
        if(time > 549){
            clearInterval(CounterLine)
          
        }
    }
}

function quesCounter(index){
    const bottomQuesCounter = document.querySelector(".total-ques");
console.log(bottomQuesCounter)
const totalQuesCountTag = ` <span><p>${index}</p><p>of</p><p>5</p><p>Questions</p></span>`
bottomQuesCounter.innerHTML = totalQuesCountTag;
}





console.log(infoBox)
console.log(continueBtn)