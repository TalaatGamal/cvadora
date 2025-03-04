














const carousel = document.getElementById("carousel");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const cardsData = [
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca1",numText:"1",buttonText: "Choose" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca2",numText:"2",buttonText: "Choose" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca3",numText:"3",buttonText: "Choose" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca4",numText:"4",buttonText: "Choose" },
    { image: "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114275.jpg", id: "ca5",numText:"5",buttonText: "Choose" },
    { image: "https://www.cv-template.com/img/cv-tips/advantage-of-an-online-cv-builder.jpg", id: "ca6",numText:"6",buttonText: "Choose" }
];

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("tpcs");

    card.innerHTML = `
        <div class="topo">
            <img src="${data.image}" alt="">
        </div>
        <div class="boto"><h2 id="h2b">${data.numText}</h2><a href="#" id="${data.id}">${data.buttonText}</a></div>
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

