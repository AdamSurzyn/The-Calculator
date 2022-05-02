loopThroughButtons()

function addition(a, b){
    return a+b;
}

function subtraction (a, b){
    return a-b;
}

function division (a, b){
    return a/b;
}

function multiplication (a, b){
    return a*b;
}



function loopThroughButtons(){

    let view = document.getElementsByClassName('view')[0]
    let buttons = document.getElementsByClassName("row");
    let rowButtons
    let oldNumber
    let operator


    for(i = 0; i<buttons.length; i++){

        for(j = 0; j<buttons[i].children.length; j++){

            let specificButton = buttons[i].children[j]

            if(specificButton.id != 'calc'){

                specificButton.addEventListener('click', (e) =>{

                    if(view.textContent === "0"){
                        view.textContent = e.target.textContent
                    }else if(view.textContent != "0"){
                        view.textContent += e.target.textContent
                    } 

                })
            }else if(specificButton.id === "calc"){

                if(specificButton.textContent != '='){
                    
                    specificButton.addEventListener('click', (e)=>{
                        oldNumber = saveValue(view.textContent)
                        operator = e.target.textContent
                    })

                }if(specificButton.textContent === '='){
                    specificButton.addEventListener('click', (e) =>{
                        
                    })
                }
                

                
            }
        }
    }
}

function operate (a, b, operator){

    if (operator == "*"){
        multiplication(a, b)
    }else if(operator == "/"){
        division(a, b)
    }else if(operator == "+"){
        addition(a, b)
    }else if(operator == "-"){
        subtraction(a, b)
    }
}

function saveValue(a){
    let savedValue = a

    clearView()

    return savedValue
}

function clearView (){
    let view = document.getElementsByClassName('view')[0]
    view.textContent = "0"
}