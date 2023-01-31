//activate button to calculate
const displayResultArea = document.querySelector(".secTwo")
const calculateBtn = document.querySelector("#investmentCalcBtn");
calculateBtn.addEventListener("click", calculating);

function calculating(){
    const calculateAnswerArea = document.createElement("div");
    let principal = document.getElementById("usersPrincipalInvestment").value;
    let holdDuration = document.getElementById("userHoldDuration").value;
    let rateOfReturn = document.getElementById("userAvgRateOfReturn").value;
    calculateAnswerArea.style["background-color"] = "red";
    calculateAnswerArea.textContent = `principal = ${principal} holdDuration = ${holdDuration}
    rateOfReturn = ${rateOfReturn}`;


    displayResultArea.appendChild(calculateAnswerArea);
}
