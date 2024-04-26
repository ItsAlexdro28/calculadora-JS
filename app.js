const btnNum = document.querySelectorAll(".btnNum");
const btnOper = document.querySelectorAll(".btnOper");
const ouput = document.querySelector("#output-screen");

btnNum.forEach((btnNum) => {
    btnNum.addEventListener("click", () => {
        var btnPress = btnNum.innerHTML;
        switch (true) {
            case (ouput.innerHTML === "0" || ouput.innerHTML === "Error!"):
                ouput.innerHTML = btnPress;
                break;
            case (false):
                break;
            default:
                ouput.innerHTML += btnPress;
                break;

            
        }
    });
});