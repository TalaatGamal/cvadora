






let fullname = document.getElementById("lvspan");
let Emailcv = document.getElementById("Emailcv");
let locationcv = document.getElementById("locationcv");
let mobilecv = document.getElementById("mobilecv");







let userfill = document.getElementById("fullname");
let locationa = document.getElementById("location");
let email = document.getElementById("Email");
let phone = document.getElementById("Mobile-Number");

userfill.addEventListener("input", function () {
    fullname.textContent = userfill.value.trim();
});

locationa.addEventListener("input", function () {
    locationcv.textContent = locationa.value.trim();
});

email.addEventListener("input", function () {
    Emailcv.textContent = email.value.trim();
});

phone.addEventListener("input", function () {
    mobilecv.textContent = phone.value.trim();
});
































/*
const carousel = document.getElementById("carousel");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const cardsData = [
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", link: "https://example.com/card1", buttonText: "Card 1" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", link: "https://example.com/card2", buttonText: "Card 2" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", link: "https://example.com/card3", buttonText: "Card 3" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", link: "https://example.com/card4", buttonText: "Card 4" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", link: "https://example.com/card5", buttonText: "Card 5" },
    { image: "https://www.cv-template.com/img/cv-tips/advantage-of-an-online-cv-builder.jpg", link: "https://example.com/card6", buttonText: "Card 6" }
];

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("tpcs");

    card.innerHTML = `
        <div class="topo">
            <img src="${data.image}" alt="">
        </div>
        <div class="boto"><a href="${data.link}">${data.buttonText}</a></div>
    `;
    return card;
}

function initializeCarousel() {
    cardsData.forEach(cardData => carousel.appendChild(createCard(cardData)));
}

function moveRight() {
    const firstCard = carousel.firstElementChild;
    carousel.appendChild(firstCard.cloneNode(true));
    carousel.removeChild(firstCard);
}

function moveLeft() {
    const lastCard = carousel.lastElementChild;
    carousel.insertBefore(lastCard.cloneNode(true), carousel.firstElementChild);
    carousel.removeChild(lastCard);
}

// التحكم بالأزرار
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// التحكم بلوحة المفاتيح
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveRight();
    } else if (e.key === "ArrowLeft") {
        moveLeft();
    }
});

// التمرير بالسحب (Drag)
let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // التحكم في سرعة السحب
    carousel.scrollLeft = scrollLeft - walk;
});

// منع التحديد أثناء السحب
carousel.style.userSelect = "none";

initializeCarousel();


*/









const carousel = document.getElementById("carousel");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const cardsData = [
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca1", buttonText: "Card 1" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca2", buttonText: "Card 2" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca3",buttonText: "Card 3" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca4",buttonText: "Card 4" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca5",buttonText: "Card 5" },
    { image: "https://www.cv-template.com/img/cv-tips/advantage-of-an-online-cv-builder.jpg", id: "ca6",buttonText: "Card 6" }
];

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("tpcs");

    card.innerHTML = `
        <div class="topo">
            <img src="${data.image}" alt="">
        </div>
        <div class="boto"><a href="#" id="${data.id}">${data.buttonText}</a></div>
    `;
    return card;
}

function initializeCarousel() {
    cardsData.forEach(cardData => carousel.appendChild(createCard(cardData)));
}

function moveRight() {
    const firstCard = carousel.firstElementChild;
    carousel.appendChild(firstCard);
}

function moveLeft() {
    const lastCard = carousel.lastElementChild;
    carousel.insertBefore(lastCard, carousel.firstElementChild);
}

// التحكم بالأزرار
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// التحكم بلوحة المفاتيح
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveRight();
    } else if (e.key === "ArrowLeft") {
        moveLeft();
    }
});

// التحكم بالتمرير السلس
let scrollTimeout;

carousel.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
        if (e.deltaY > 9 || e.deltaX > 9) {
            moveRight(); 
        } else {
            moveLeft();
        }
        scrollTimeout = null;
    },300); 
});

initializeCarousel();































// private
// private
// private
// private
// private
// private
// private
// private
// private
// private
// private
// private
// private





let fill = document.getElementById("fill")
let choose = document.getElementById("ca1")
let tem = document.getElementById("templates")
let hello = document.querySelector(".hello")

let loadcv = document.getElementById("odn")
let loadwindow = document.getElementById("load")
let back = document.getElementById("back-window")



if (choose) {
  choose.addEventListener("click", function () {
    console.log("choose1")
    fill.style.width="100vw"
    fill.style.height="100vh"
    tem.style.display="none"
    hello.style.display="none"
    document.getElementById("iv-1").style.backgroundColor="#00dbdb"
    document.getElementById("qwe1").style.display="none"
    document.getElementById("right1").style.display="flex"
  });
} else {
  fill.style.width="0vw"
  fill.style.height="0vh"
}





if (fill) {
  loadcv.addEventListener("click", function () {
  
    document.getElementById("iv-2").style.backgroundColor="#00dbdb"
    document.getElementById("qwe2").style.display="none"
    document.getElementById("right2").style.display="flex"
  });
}






// load window



if (loadcv) {
    loadcv.addEventListener("click", function () {
      loadwindow.style.width="100vw"
      loadwindow.style.height="100vh"
    });
} else {
  loadwindow.style.width="0vw"
  loadwindow.style.height="0vh"
}

if (loadcv) {
    back.addEventListener("click", function () {
      loadwindow.style.width="0vw"
      loadwindow.style.height="0vh"
    });
} else {
  loadwindow.style.width="0vw"
  loadwindow.style.height="0vh"
}






