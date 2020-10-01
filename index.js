const secondsHand= document.querySelector('.second-hand');
const minsHand= document.querySelector('.min-hand');
const hourHand= document.querySelector('.hour-hand');
    function setDate (){
        const now= new Date();
        const seconds= now.getSeconds();
        const secondsDegree= ((seconds/60) * 360) + 90;
        secondsHand.style.transform = `rotate(${secondsDegree}deg)`;


        const mins= now.getMinutes();
        const minsDegree= ((mins/60) * 360) + 90;
        minsHand.style.transform = `translate(19%) rotate(${minsDegree}deg)`;

        const hours= now.getHours();
        const hoursDegree= ((hours/12) * 360) + 90;
        hourHand.style.transform = `translate(83%) rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);