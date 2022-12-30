class Calculator {

    constructor() {
        this.operationValue = document.querySelector("#operationValue");
        this.resultNumber = document.querySelector("#resultNumber");
        this.reset = 0;
    }

    toCheckLastDigit(input, operationValue, reg){
//To study more the methods test() and substr() ------------------------------ 
        if((
            !reg.test(input) &&
            !reg.test(operationValue.substr(operationValue.length - 1))
        )){
            return true
        } else {
            return false
        }

    }

    btnPress() {
        let input = this.textContent;
        let operationValue = calculator.operationValue.textContent;
        //to verify if it just has numbers
        var reg = new RegExp('^\\d+$');
        
        //to check if it needs to add or not
        if(calculator.toCheckLastDigit(input, operationValue, reg)) {
            return false
        }


        if(operationValue == "0") {
            calculator.operationValue.textContent = input;
        } else {
            calculator.operationValue.textContent += input;
        }
    }

}

//start object
let calculator = new Calculator;

//start btns
let btns = document.querySelectorAll(".btn");

// map all buttons
for(let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", calculator.btnPress)
}