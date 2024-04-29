const btnMath= document.querySelectorAll(".btnMath");
const output = document.querySelector("#output-screen");

var trueExpression = "0";
let numberLength = "";
var numIndex = {};
var currentBase = "Dec";
btnMath.forEach((btnMath) => {
    btnMath.addEventListener("click", () => {
        let btnPress = btnMath.innerHTML;
        switch (true) {
            case (btnPress === "C"):
                numberLength = finishNumber(numberLength, currentBase);
                numIndex = {};
                output.innerHTML = "0";
                trueExpression = "0";
                break;
            case (btnMath.id === "number"):
                numberLength += btnPress;
                trueExpression = isInitial(btnPress, trueExpression);
                output.innerHTML = isInitial(btnPress, output.innerHTML);
                break;
            case (btnPress === "="):
                if (isLastCharANumber(trueExpression)) {
                    numberLength = finishNumber(numberLength, currentBase);
                }
                output.innerHTML = equal();
                numIndex = {};
                trueExpression = output.innerHTML;
                numberLength = finishNumber(output.innerHTML, currentBase);
                break;    
            case (btnPress === "."): 
                if (!numberLength.includes(".")) {
                    output.innerHTML += btnPress;
                    trueExpression += btnPress;
                    numberLength += btnPress;
                }
                break;
            default:
                let trueOperation = btnPress;
                let displayOperation = btnPress;
                if (numberLength > 0){
                    numberLength = finishNumber(numberLength, currentBase);
                }
                if (btnPress === "√") {
                    trueOperation = "Math.sqrt(";
                    displayOperation = "√("; 
                }
                if (btnPress === "Sen") {
                    trueOperation = "Math.sin(";
                    displayOperation = "sin("; 
                }
                if (btnPress === "Cos") {
                    trueOperation = "Math.cos(";
                    displayOperation = "cos("; 
                }
                if (btnPress === "X<sup>y</sup>") {
                    trueOperation = "Math.pow(";
                    displayOperation = "√("; 
                }
                trueExpression = isInitial(trueOperation, trueExpression);
                output.innerHTML = isInitial(displayOperation, output.innerHTML);
                break;
                
                
            }
            console.log(trueExpression);
        });
});

function isInitial (btnPress, display) {
    if (display === "0" || display === "Error!"){
        return btnPress;
    }
    return display + btnPress;
}
function finishNumber(numString, currentBase) {
    let numberIndex;
    let trueNumber;
    for (const key in numIndex) {
        if (numIndex[key] === numString) {
            numberIndex = parseInt(key);
            break;
        }
    }
    trueExpression = trueExpression.slice(0, -numString.length);
    numberIndex = trueExpression.length
    if (currentBase === "Bin") {
        trueNumber = "0b" + numString;
    } else if (currentBase === "Oct") {
        trueNumber = "0o" + numString;
    } else if (currentBase === "Hex") {
        trueNumber = "0x" + numString;
    } else if (currentBase === "Dec") {
        trueNumber = numString;
    }
    trueExpression += trueNumber;
    numIndex[trueNumber] = numberIndex;
    console.log(numIndex)
    return "";
}

function equal () {
    return eval((trueExpression));
}
function isLastCharANumber(str) {
    return /\d$/.test(str);
} 