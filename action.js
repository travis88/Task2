var img = new Array(16);
img[0] = new Image();
img[0].src = "posters/1.jpg";
img[1] = new Image();
img[1].src = "posters/2.jpg";
img[2] = new Image();
img[2].src = "posters/3.jpg";
img[3] = new Image();
img[3].src = "posters/4.jpg";
img[4] = new Image();
img[4].src = "posters/5.jpg";
img[5] = new Image();
img[5].src = "posters/6.jpg";
img[6] = new Image();
img[6].src = "posters/7.jpg";
img[7] = new Image();
img[7].src = "posters/8.jpg";
img[8] = new Image();
img[8].src = "posters/9.jpg";
img[9] = new Image();
img[9].src = "posters/10.jpg";
img[10] = new Image();
img[10].src = "posters/11.jpg";
img[11] = new Image();
img[11].src = "posters/12.jpg";
img[12] = new Image();
img[12].src = "posters/13.jpg";
img[13] = new Image();
img[13].src = "posters/14.jpg";
img[14] = new Image();
img[14].src = "posters/15.jpg";
img[15] = new Image();
img[15].src = "posters/16.jpg";

var i = 0;
function nextButtonPressed() {
    i += 4;
    if (i > 13) { i = 12; }
    document.slider1.src = img[i].src;
    document.slider2.src = img[i + 1].src;
    document.slider3.src = img[i + 2].src;
    document.slider4.src = img[i + 3].src;
    document.previos.src = "images/left_act.png";
    updateInd(i);
}
function previousButtonPressed() {
    i -= 4;
    if (i <= 3) { i = 0; }
    document.slider1.src = img[i].src;
    document.slider2.src = img[i + 1].src;
    document.slider3.src = img[i + 2].src;
    document.slider4.src = img[i + 3].src;
    document.next.src = "images/right_act.png";
    updateInd(i);
}

function updateInd(i) {
    document.dot1.src = "images/passiv.png";
    document.dot2.src = "images/passiv.png";
    document.dot3.src = "images/passiv.png";
    document.dot4.src = "images/passiv.png";
    switch (i) {
        case 0: document.dot1.src = "images/activ.png"; document.previos.src = "images/left_pas.png"; break;
        case 4: document.dot2.src = "images/activ.png"; break;
        case 8: document.dot3.src = "images/activ.png"; break;
        case 12: document.dot4.src = "images/activ.png"; document.next.src = "images/right_pas.png"; break;
    }
}
