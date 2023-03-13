function calculateLoan(){
 loanAmountValue = document.getElementById("loan-amount").value

 console.log(loanAmountValue);
 interestRateValue = document.getElementById("interest-rate").value
console.log(interestRateValue);
 monthToPayValue = document.getElementById("months-to-pay").value
console.log(monthToPayValue)
interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToPayValue
console.log(interest);
monthlyPayment = (loanAmountValue / monthToPayValue + interest).toFixed(2)
if(loanAmountValue>500000){
    alert("Please Enter Loan Amount <= 500000")
}else if(interestRateValue>100){
    alert("Please Enter Interest Rate <=100")
}
else if(monthToPayValue>48){
    alert("Please Enter Months to Pay <=48")
}
else{
    document.getElementById("payment").innerHTML = `MonthlyPayment(Rs):${monthlyPayment}` 
}

}
calculateLoan();