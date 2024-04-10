let startNum = 9;
let lastNum = 0;
const result = document.querySelector(".countdown");

const decrement = setInterval(function() {
    if(startNum > lastNum) {
        startNum--;
        result.innerHTML = startNum;
    } else {
        result.innerHTML = "Happy New Year!";
        clearInterval(decrement);
    }
}, 1000);
