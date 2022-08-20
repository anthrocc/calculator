var inOne = 0;
var inTwo;
var count = 0;
var operator;
var arrInd = 0;
const arr = [];


const add = function (x, y) {
    alert(x + y);
    return (x + y);
};

const subtract = function (x, y) {
    return (x - y);
};


const multiply = function (x, y) {
    return (x * y);
};

const divide = function (x, y) {
    return (x / y);
}

//Calculator buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        console.log("COUNT: " + count);

        var div = document.getElementById("output");

        // arr.push(button.id);

        if (button.id == "add" || operator == "add") {
            operator == "add";
            arr.push(div.textContent);
            console.log(arr[arrInd]);
            arrInd++;
            div.textContent = "+";
            count = -1;
        }
        else if (button.id == "subtract" || operator == "subtract") {
            operator == "subtract";
        }
        else if (button.id == "multiply" || operator == "multiply") {
            operator == "multiply";
        }
        else if (button.id == "divide" || operator == "divide") {
            operator == "divide";
        }
        else if (button.id == "equals") {
            arr.push(div.textContent);
            arrInd = 0;
            count = 0;
        }
        else {
            if (count == 0) {
                div.innerHTML = button.id;
            }
            // alert(button.id);
            //document.getElementById("output").innerHTML = button.id;
            else {
                div = document.getElementById("output");
                var content = document.createTextNode(button.id);
                div.appendChild(content);
            }
        }



        count++;

        // if (button.id === "equals") {
        //     arr.forEach(function (entry) {
        //         console.log(entry);
        //     });

        //     if (arr.includes("add")) {

        //     }
        //     else if (arr.includes("subtract")) {

        //     }
        //     else if (arr.includes("multiply")) {

        //     }
        //     else if (arr.includes("divide")) {

        //     }
        //     else {

        //     }
        // }

    });
});
