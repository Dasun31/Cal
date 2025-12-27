const display = document.getElementById("display");
let kk = false;
let equation, answer;
let stack = [];

function appendToDisplay(input){
    if (kk){
        clearDisplay();
        display.value += input;
        kk = false;
    }else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        equation = display.value;
        display.value = eval(display.value);
        answer = display.value;

        //console.log(equation + "=" + answer);
        stack.push(equation + " = " + answer);
    } catch (error) {
        display.value = "Error"
    }

    kk = true;
}

function history(){
    console.log(stack)
    document.getElementById('calculator').innerText = stack;
}
