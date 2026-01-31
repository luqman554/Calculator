let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerText == "C") {
            string = "";
            document.querySelector("input").value = string;
        }
        else if (e.target.innerText == "x") {
            string = string.slice(0, 0 - 1);
            document.querySelector("input").value = string;
        }
            
        else if (e.target.innerText == "%") {
            string = string / 100;
            document.querySelector("input").value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerText;
            document.querySelector("input").value = string;
        }
    })
})