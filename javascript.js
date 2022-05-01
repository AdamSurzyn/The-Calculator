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

function loopThroughButtons(){

    let view = document.getElementsByClassName('view')[0]
    let buttons = document.getElementsByClassName("row");
    let rowButtons

    for(i = 0; i<buttons.length; i++){

        for(j = 0; j<buttons[i].children.length; j++){

            let specificButton = buttons[i].children[j]
            console.log(specificButton)

            if(specificButton.id != 'calc'){

                specificButton.addEventListener('click', (e) =>{
                    if(view.textContent === "0"){
                        view.textContent = e.target.textContent
                    }else if(view.textContent != "0"){
                        view.textContent += e.target.textContent
                    }
                   
                })

            }
        }
    }

}


