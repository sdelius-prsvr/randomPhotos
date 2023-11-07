const btn = document.querySelector('button');
const imgCont = document.querySelector("div");
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
};
btn.addEventListener('click', ()=>{
    let random = getRandomNumber(18);
    let newImage = document.createElement('img');
    newImage.src = `images/PH0${random}.JPG`;
    imgCont.appendChild(newImage);
})