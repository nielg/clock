let changingMode = false

function time (){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    changeClock(hour, minute, seconds)
}
function changeClock(hour, minute, second){
    const hourPointer = document.getElementById('clockHour');
    const minutePointer = document.getElementById('clockMinute');
    const secondPointer = document.getElementById('clockSeconds');
// start position 90
    let hourDeg = 30 * hour - 90;
    let minuteDeg = 6 * minute - 90;
    let secondDeg = 6 * second - 90 ;



    hourPointer.style.transform = `rotate(${hourDeg}deg)`;
    minutePointer.style.transform = `rotate(${minuteDeg}deg)`;
    secondPointer.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(() => {
    time()
}, 1);


function changeMode (){
    if (changingMode === false){
        changingMode = true

        const secondPointer = document.getElementById('secondPointer');
        const secondPointerId = secondPointer.id;
        const btn = document.getElementById('btnModeSwitcher');
        const circleBorder = document.getElementById('clockRightToLeft');
        const backgroundColorTransition = document.getElementById('backgroundColorTransition');
    // i don't know why but circleBorder is not add to allElements by the querySelector
        let allElements = document.querySelectorAll('body * :not(#' + secondPointerId + ')');
        let allElementsArr = Array.from(allElements);
        allElementsArr.push(circleBorder);
    
    
        function changeToDarkMode (arr){
            arr.forEach(element => {
                element.classList.add('darkMode');
                element.style.borderColor = 'white';
            });
        };
    
        function changeToLightMode (arr){
            arr.forEach(element =>{
                element.classList.remove('darkMode');
                element.style.borderColor = 'black';
            });
        };
    
        if (!btn.classList.contains('darkMode')){
            btn.classList.add('darkMode');
            btn.innerHTML = 'Light Mode';
            btn.style.borderColor = 'white';
            console.log('to darkmode');
            changeToDarkMode(allElementsArr);
    
            backgroundColorTransition.classList.add('open');
            backgroundColorTransition.classList.remove('closed');
            backgroundColorTransition.style.backgroundColor = 'black';
            setTimeout(() => {
                backgroundColorTransition.classList.add('closed');
                backgroundColorTransition.classList.remove('open');
                document.body.style.backgroundColor = 'black';
    
                setTimeout(() => {
                    changingMode = false;
                }, 1000);

            }, 1000);
    
        }else {
            btn.classList.remove('darkMode');
            btn.innerHTML = 'Dark Mode';
            btn.style.borderColor = 'black';
            console.log('to lightMode');
            changeToLightMode(allElementsArr);
    
            backgroundColorTransition.classList.add('open');
            backgroundColorTransition.classList.remove('closed');
            backgroundColorTransition.style.backgroundColor = 'white';
            setTimeout(() => {
                document.body.style.backgroundColor = 'white';
                backgroundColorTransition.classList.add('closed');
                backgroundColorTransition.classList.remove('open');
                
                setTimeout(() => {
                    changingMode = false;
                }, 1000);
    
            }, 1000);
        };
    };
};

