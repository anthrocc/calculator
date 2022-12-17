var answer;
var operator;
var out = document.getElementById("output");
const arr = [];


// function operate(operator) {
//     if(operator == "add")
//         add(arr)
// }

function setDisplay(display) {
    if(out.textContent == "add" || out.textContent == "subtract" || out.textContent == "multiply" || out.textContent == "divide" || out.textContent == "equals")
        clear();

    out.insertAdjacentText('beforeend', display);
}

function clear() {
    out.innerHTML = '';
}

function setNumber() {
    arr.push(out.textContent);
    console.log(arr);
}

const add = function () {
    clear();
    answer = parseInt(arr[0]) + parseInt(arr[1]);
};

const subtract = function () {
    clear();
    answer = parseInt(arr[0]) - parseInt(arr[1]);
};


const multiply = function () {
    clear();
    answer = parseInt(arr[0]) * parseInt(arr[1]);
};

const divide = function () {
    clear();
    answer = parseInt(arr[0]) / parseInt(arr[1]);
}

const equals = function () {

    if(operator == "add")
        add();
    else if(operator == "subtract")
        subtract();
    else if(operator == "multiply")
        multiply();
    else if(operator == "divide")
        divide();

    //alert(answer);
    setDisplay(answer);
}


//Calculator buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        //Debug
        console.log(button.id + " pressed!");

        if(button.classList.contains("operations"))
            console.log("CLASS: " + button.className);

        if(button.classList.contains("operations"))
            setNumber();

        //Debug
        // console.log("Output: " + out.textContent);

        if(button.id == "add") {
            operator = "add";
            add();
        }
        else if(button.id == "subtract") {
            operator = "subtract";
            subtract();
        }
        else if(button.id == "multiply"){
            operator = "multiply";
            multiply();
        }
        else if(button.id == "divide") {
            operator = "divide";
            divide();
        }
        else if(button.id == "equals")
            equals();

        if(button.id != "equals")
            setDisplay(button.id);

        if(button.id == "clear")
            clear();

    });
});
