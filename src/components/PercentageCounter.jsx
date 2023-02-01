export const percentageCounter = () => {
    const valueDisplays = document.querySelectorAll(".percentage");
    const interval = 1000;

    valueDisplays.forEach(valueDisplay => {
        let initialValue = 0;
        let finalValue = parseInt(valueDisplay.getAttribute("data-value"))

        let duration = Math.floor(interval / finalValue)
        let counter = setInterval(() => {
            initialValue += 1;
            valueDisplay.textContent = initialValue;

            if(initialValue == finalValue){
                clearInterval(counter);
            }
        }, duration);
    });
}