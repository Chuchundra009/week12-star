
const btn = document.querySelector('#btn');



const seeYes = document.querySelector('#seeYes');
const seeNO = document.querySelector('#seeNo');
const seeName = document.querySelector('#seeName');




seeNO.addEventListener('click', () => {
    const valueNo = seeNO.value;

    valueNo=== 'on'? seeName.style.display = 'none':seeName.style.display = 'block';

})

seeYes.addEventListener('click', () => {
    const valueYes = seeYes.value;

    valueYes==='on'? seeName.style.display = 'flex':seeName.style.display = 'block';

})


function chatInfo() {

    const textName = document.querySelector('#yourName');
    const nameLow = textName.value.replaceAll(' ', '').toLowerCase();
    textName.value = '';
    let newname;
    let namestyle = '';

    if(nameLow==''){
        newname = 'Username';
        namestyle = 'color:violet'
    }else{
        newname = nameLow[0].toUpperCase() + nameLow.slice(1);
    }



    const quotes = ['../img/eff.jpg','../img/iii.jpg','../img/kenni.jpg','../img/kkk.jpg','../img/multfilm.jpg','../img/rrr.jpg'];


    const srcAva = document.querySelector('#yourAva');
    const infoSrc = srcAva.value;
    srcAva.value = '';

    let imgimg;

    if(!infoSrc.length){
        let randomImg = quotes[Math.floor(Math.random()*quotes.length)];
        imgimg = randomImg;
    }else{
        imgimg = infoSrc;
    }

    const yourComment = document.querySelector('#yourComment');
    let commpepl = yourComment.value.toLowerCase().replace('viagra', '***').replace('xxx', '***').replace('ххх', '***');
    yourComment.value = '';


    const date = new Date();
    const newDate = date.toDateString();
    const newHour = date.getHours();
    const newMin = date.getMinutes();
    const newSec = date.getSeconds();


    const seeTimes = `${newDate} at ${newHour}:${newMin}:${newSec}`;


    let newMsg = `
    <div class="chatList__answer">
        <div class="cont-res">
            <div class="position-res">
                <img src="${imgimg}" alt="" style="width:150px;">
                <p style=${namestyle}>${newname}</p>
            </div>
            <p>${commpepl}</p>
        </div>
        <div class="cont__time">
            <p class="seeTime">${seeTimes}</p>
        </div>
    </div>
    `;
    let chat = document.getElementById('resList');
    chat.innerHTML = newMsg + chat.innerHTML;

}

btn.addEventListener("click", chatInfo);




