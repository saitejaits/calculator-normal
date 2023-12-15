let inputBoxEl = document.getElementById('inputBox');
let buttonsEl = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttonsEl);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            inputBoxEl.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            inputBoxEl.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length-1);
            inputBoxEl.value = string;
        }
        else {
            string += e.target.innerHTML;
            inputBoxEl.value = string;
        }
     
    })
})