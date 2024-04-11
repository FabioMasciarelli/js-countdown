let startNum = 9;
let lastNum = 1;
const result = document.querySelector(".countdown");

const decrement = setInterval(function() {
    if(startNum >= lastNum) {
        startNum--;
        result.innerHTML = startNum;
        console.log(startNum);
    } else {
        result.innerHTML = "Happy New Year!";
        clearInterval(decrement);
    }
}, 1000);
