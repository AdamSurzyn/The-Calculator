let firstValue = null;
let secondValue = null;
let displayValue = 0;
let firstOperator = null;
let secondOperator = null;

loopThroughButtons()

function loopThroughButtons(){

    let view = document.getElementsByClassName('view')[0]
    let buttons = document.getElementsByClassName("row");


    for(i = 0; i<buttons.length; i++){

        for(j = 0; j<buttons[i].children.length; j++){

            let specificButton = buttons[i].children[j]

            if(specificButton.id != 'calc'){

                specificButton.addEventListener('click', (e) =>{

                    if(view.textContent === "0"){
                        view.textContent = e.target.textContent
                        displayValue = view.textContent
                    }else if(view.textContent != "0" && secondValue === null){
                        view.textContent += e.target.textContent
                        displayValue = view.textContent
                    }if(view.textContent != "0" && firstValue != null && firstOperator !=null && secondValue === null){
                        clearView()
                        view.textContent = e.target.textContent
                        displayValue = view.textContent
                        secondValue = displayValue
                        //console.log(secondValue)
                    }else if(view.textContent != "0" && firstValue != null && firstOperator !=null && secondValue != null){

                        view.textContent += e.target.textContent
                        displayValue = view.textContent
                        secondValue = displayValue

                    }if(firstValue != null && firstOperator === null && secondValue === null && secondOperator != null){

                        firstOperator = secondOperator
                        clearView()
                        view.textContent = e.target.textContent
                        displayValue = view.textContent
                        secondValue = displayValue

                    }else if(firstValue != null && firstOperator === null && secondValue != null && secondOperator != null){

                        view.textContent += e.target.textContent
                        displayValue = view.textContent
                        secondValue = displayValue

                    }

                })
            }else if(specificButton.id === "calc"){

                if(specificButton.textContent != '=' && specificButton.textContent != 'C'){
                    
                    specificButton.addEventListener('click', (e)=>{
                        if(firstValue === null && firstOperator === null){

                            firstValue = displayValue;
                            firstOperator = e.target.textContent;

                        }else if(firstValue != null && firstOperator != null  && secondValue != null && secondOperator === null){

                            displayValue = operate(firstValue, secondValue, firstOperator)
                            console.log(displayValue)
                            view.textContent = displayValue
                            firstValue = displayValue
                            secondValue = null;
                            firstOperator = null;
                            secondOperator = e.target.textContent;

                        }else if(firstValue != null && firstOperator != null && secondValue != null && secondOperator != null){

                            displayValue = operate(firstValue, secondValue, secondOperator)
                            view.textContent = displayValue
                            firstValue = displayValue
                            secondValue = null;
                            firstOperator = null;
                            secondOperator = e.target.textContent;
                        }

                    })

                }if(specificButton.textContent === '='){
                    specificButton.addEventListener('click', (e) =>{
                        if(firstValue != null && secondValue != null){
                            displayValue = operate(firstValue, secondValue, firstOperator)
                            view.textContent = displayValue 
                            firstOperator = null;
                            firstValue = null
                            secondValue = null;
                        }
                    })
                }if (specificButton.textContent === 'C'){
                    specificButton.addEventListener('click', (e) =>{
                        superClear()
                    })
                }
                

                
            }
        }
    }
}


function addition(a, b){
    
    return parseInt(a) + parseInt(b);
}

function subtraction (a, b){
    return a-b;
}

function division (a, b){
    let view = document.getElementsByClassName('view')[0]
    if (b === 0){
        view.textContent = "ACTION IS COMMING"
        return
    }
    return a/b;
}

function multiplication (a, b){
    return a*b;
}




function operate (a, b, operator){

    if (operator == "*"){
        return multiplication(a, b)
    }else if(operator == "/"){
        return division(a, b)
    }else if(operator == "+"){
        return addition(a, b)
    }else if(operator == "-"){
        return subtraction(a, b)
    }
}

function clearView (){
    let view = document.getElementsByClassName('view')[0]
    view.textContent = null
}

function superClear(){
    let view = document.getElementsByClassName('view')[0]
    firstValue = null;
    secondValue = null;
    displayValue = 0;
    firstOperator = null;
    secondOperator = null;
    view.textContent = 0;
}

function roundingUp(){

}