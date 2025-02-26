






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


















let fill = document.getElementById("fill")
let choose = document.getElementById("ca1")
let tem = document.getElementById("templates")
let hello = document.querySelector(".hello")

let loadcv = document.getElementById("odn")
let loadwindow = document.getElementById("load")
let back = document.getElementById("back-window")



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
