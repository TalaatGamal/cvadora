






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
let other = document.getElementById("other-temp")
let otherWindow = document.getElementById("other-window")
let dont = document.getElementById("dont")
let dov = document.getElementById("do")



if (choose) {
  choose.addEventListener("click", function () {
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

if (other) {
    other.addEventListener("click", function () {
      otherWindow.style.width="100vw"
      otherWindow.style.height="100vh"
    });
}

if (dont) {
    dont.addEventListener("click", function () {
      otherWindow.style.width="0vw"
      otherWindow.style.height="0vh"
    });
}

if (dov) {
    dov.addEventListener("click", function () {
      otherWindow.style.width="0vw"
      otherWindow.style.height="0vh"

      fill.style.width="0vw"
      fill.style.height="0vh"

      tem.style.display="flex"
      hello.style.display="flex"

      setTimeout(() => {
        window.location.href="build-space.html"
      }, 600);

    });
}










// feed




// Initialize EmailJS
emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// دالة الحصول على الوقت بتوقيت القاهرة
const getCairoTime = () => {
    const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
};

// تحديث النجوم بناءً على التقييم
const updateStars = (value) => {
    const starsPreview = document.getElementById("starsPreview");
    if (starsPreview) {
        const stars = starsPreview.querySelectorAll("span");
        stars.forEach((star, index) => {
            star.style.color = index < value ? "#00c5d3" : "#ccc";
        });
    }
};

// الحقول
const fields = {
    serviceName: document.getElementById("serviceName"),
    username: document.getElementById("username"),
    job: document.getElementById("job"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    ratingInput: document.getElementById("ratingInput")
};

// دالة التحقق من صحة الحقل بناءً على نوعه
const validateField = (input) => {
    const parentDiv = input.closest(".div-input"); 
    let isValid = false;

    switch (input.id) {
        case "username":
            isValid = input.value.trim().split(" ").length >= 2;
            break;
        case "email":
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
            break;
        case "job":
        case "serviceName":
            isValid = input.value.trim().length > 0;
            break;
        case "message":
            isValid = input.value.trim().length >= 10;
            break;
        case "ratingInput":
            let rating = parseInt(input.value.trim());
            isValid = !isNaN(rating) && rating >= 1 && rating <= 5;
            updateStars(rating);
            break;
        default:
            isValid = input.value.trim().length > 0;
    }

    if (isValid) {
        applyValidStyle(parentDiv);
    } else {
        applyInvalidStyle(parentDiv);
    }
};

// دالة تطبيق التنسيق الصحيح عند الإدخال الصحيح
const applyValidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #24b29d";
        parentDiv.style.borderRight = "6px solid #24b29d";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "flex";
        if (img3) img3.style.display = "none";
        setTimeout(() => {
            if (imgn) imgn.style.display = "block";
        }, 3000);
    }
};

// دالة تطبيق التنسيق عند الإدخال الخاطئ
const applyInvalidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = " #005f663b";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #ffffff";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "none";
        if (img3) img3.style.display = "flex";
        if (imgn) imgn.style.display = "none";
    }
};

// إضافة حدث التحقق أثناء الكتابة
Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => validateField(field));
});

// إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const loader = document.getElementById("dira");
    const thanks = document.querySelector(".thanks");
    let allValid = true;

    Object.values(fields).forEach((field) => {
        validateField(field);
        if (field.closest(".div-input").style.border.includes("red")) {
            allValid = false;
        }
    });

    if (!allValid) {
        alert("يرجى ملء جميع الحقول بشكل صحيح!");
        return;
    }

    // إعداد البيانات
    const formData = {
        service_name: fields.serviceName.value.trim(),
        username: fields.username.value.trim(),
        job: fields.job.value.trim(),
        email: fields.email.value.trim(),
        message: fields.message.value.trim(),
        rating: parseInt(fields.ratingInput.value.trim()),
        timestamp: getCairoTime()
    };

    if (loader) loader.style.display = "block";

    try {
        const response = await emailjs.send(
            "rate-service", 
            "template_nav13vb", 
            formData
        );

        console.log("EmailJS Response:", response);
        document.getElementById("contactForm").reset();

        // إعادة تعيين ألوان الحقول بعد الإرسال
        Object.values(fields).forEach((field) => {
            const parentDiv = field.closest(".div-input");
            if (parentDiv) {
                parentDiv.style.backgroundColor = "";
                parentDiv.style.border = "";
                parentDiv.style.borderLeft = "";
                parentDiv.style.borderRight = "";
                
                const img = parentDiv.querySelector(".img");
                const img3 = parentDiv.querySelector(".img3");
                const imgn = parentDiv.querySelector(".img-in");

                if (img) img.style.display = "none";
                if (img3) img3.style.display = "flex";
                if (imgn) imgn.style.display = "none";
            }
        });

        // **إظهار رسالة الشكر** 🟢
        if (thanks) {
            // thanks.style.display = "block";
            // setTimeout(() => {
            //     thanks.style.display = "none";
            // }, 10000);
            document.getElementById('con-1').style.marginLeft = '390px';
            document.getElementById('form-v-cont2').style.marginLeft = '820px';
            document.getElementById('sipo2').style.display = 'flex';
            document.getElementById('sipo').style.display = 'none';
            document.querySelector(".form-v-cont2").style.marginLeft ='820px'

        }
        updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

    } catch (error) {
        console.error("Submission error:", error);
        alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
    } finally {
        if (loader) loader.style.display = "none";
    }
});


































const nextElement = document.getElementById('next');

nextElement.addEventListener('click', () => {
const sendElement = document.getElementById('send');

sendElement.style.display = 'block';
document.getElementById('sipo2').style.display = 'none'
document.getElementById('con-1').style.marginLeft ='-405px'

if (document.getElementById('sipo2').style.display = 'flex') {
  document.getElementById('sipo').style.display = 'none'
}
if (document.getElementById('sipo').style.display = 'flex') {
  document.getElementById('sipo2').style.display = 'none'
}
});





const backa = document.getElementById('backo');

backa.addEventListener('click', () => {

// document.getElementById('con-1').style.marginLeft ='470px'

if (document.getElementById('con-1').style.marginLeft ='390px') {
  document.getElementById('sipo').style.display = 'none'
  document.getElementById('sipo2').style.display = 'flex'
}

});










const fi = document.getElementById('feed-icon');
if (fi) {
  fi.addEventListener('click', () => {

    document.getElementById('feed-window').style.width="100vw"
    document.getElementById('feed-window').style.minHeight="100vh"
  })};





  document.getElementById("feed-window-back").addEventListener('click', () => {

    document.getElementById('feed-window').style.width="0vw"
    document.getElementById('feed-window').style.minHeight="0vh"
  });








const vbn = document.getElementById('back-rate-m');

vbn.addEventListener('click', () => {

// document.getElementById('con-1').style.marginLeft ='470px'
document.querySelector(".form-v-cont2").style.marginLeft ='0px'

});


// feed