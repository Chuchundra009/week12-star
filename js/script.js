const textName = document.querySelector('#yourName');
const srcAva = document.querySelector('#yourAva');
const yourComment = document.querySelector('#yourComment');
const btn = document.querySelector('#btn');
const res = document.querySelector('#res');
const nameRes = document.querySelector('#nameRes');
const comRes = document.querySelector('#comRes');


let chatInfo = () => {
    const nameLow = textName.value.replaceAll(' ', '').toLowerCase();
    const newName = nameLow[0].toUpperCase() + nameLow.slice(1);
    nameRes.innerHTML = newName;
    textName.value = '';


    const infoSrc = srcAva.value;
    const newImg = document.createElement('img');
    res.prepend(newImg);
    newImg.src = infoSrc;
    newImg.style.width = '150px';
    srcAva.value = '';


    comRes.innerHTML = yourComment.value.toLowerCase().replace('viagra', '***').replace('xxx', '***').replace('ххх', '***');
    yourComment.value = '';
}

btn.addEventListener("click", chatInfo);