const btnNum = document.querySelectorAll(".btnNum");
const btnOper = document.querySelectorAll(".btnOper");
const output = document.querySelector("#output-screen");

btnNum.forEach((btnNum) => {
    btnNum.addEventListener("click", () => {
        let btnPress = btnNum.innerHTML;
        switch (true) {
            case (output.innerHTML === "0" || output.innerHTML === "Error!"):
                output.innerHTML = btnPress;
                break;
            case (btnPress === "="):
                output.innerHTML = equal(output.innerHTML);
                break;    
            case (false):
                break;
            default:
                output.innerHTML += btnPress;
                break;

            
        }
    });
});

btnOper.forEach((btnOper) => {
    btnOper.addEventListener("click", () => {
        let btnPress = btnOper.innerHTML;
        switch (true) {
            case (false):
                break;
            default:
                output.innerHTML += btnPress;
                break;
        }
    });
});

function equal (mathExpression) {
    return eval((mathExpression));
}