function acender() {
    let imgAcender = document.createElement("img");

    imgAcender.setAttribute('id', 'foto');

    imgAcender.setAttribute('src', 'imgs/lampadaAc.jpg');

    let imgAntiga = document.getElementById("antiga");

    let pai = imgAntiga.parentNode;

    pai.replaceChild(imgAcender, imgAntiga);
};