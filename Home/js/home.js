


document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const targetSection = document.getElementById("home");
  const targetSection2 = document.getElementById("info");
  const targetSection3 = document.getElementById("templates");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.style.backgroundColor = "rgba(55, 150, 137, 0.52)";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(targetSection2);
  observer.observe(targetSection3);

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      });
    },
    { threshold: 0.7 }
  );

  observer2.observe(targetSection);
});






























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
    carousel.appendChild(firstCard.cloneNode(true)); // إضافة نسخة من أول كارد في النهاية
    carousel.removeChild(firstCard); // حذف الأصل
}

function moveLeft() {
    const lastCard = carousel.lastElementChild;
    carousel.insertBefore(lastCard.cloneNode(true), carousel.firstElementChild); // إضافة نسخة من آخر كارد في البداية
    carousel.removeChild(lastCard); // حذف الأصل
}

rightBtn.addEventListener("click", () => {
    moveRight();
});

leftBtn.addEventListener("click", () => {
    moveLeft();
});
// التمرير بالسهم
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveRight();
    } else if (e.key === "ArrowLeft") {
        moveLeft();
    }
});

initializeCarousel();
