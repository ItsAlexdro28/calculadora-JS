const btnMath= document.querySelectorAll(".btnMath");
const output = document.querySelector("#output-screen");

var trueExpression = "0";
let numberLength = ""
btnMath.forEach((btnMath) => {
    btnMath.addEventListener("click", () => {
        let btnPress = btnMath.innerHTML;
        switch (true) {
            case (btnPress === "C"):
                output.innerHTML = "0";
                trueExpression = "0";
                break;
            case (btnMath.id === "number"):
                numberLength += btnPress;
                console.log(numberLength);
                trueExpression = isInitial(btnPress, output.innerHTML);
                output.innerHTML = isInitial(btnPress, output.innerHTML);
                break;
            case (btnPress === "="):
                output.innerHTML = equal();
                trueExpression = "0";
                break;    
            default:
                trueExpression = isInitial(btnPress, output.innerHTML);
                output.innerHTML = isInitial(btnPress, output.innerHTML);
                break;

            
        }
    });
});

function isInitial (btnPress, display) {
    if (display === "0" || display === "Error!"){
        return btnPress;
    }
    return display + btnPress;
}
function equal () {
    return eval((trueExpression));
}