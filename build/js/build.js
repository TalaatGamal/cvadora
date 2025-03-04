





let fill = document.getElementById("fill")
let downcv = document.getElementById("dcvb")
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

if (downcv) {
  downcv.addEventListener("click", function () {
  
    document.getElementById("iv-3").style.backgroundColor="#00dbdb"
    document.getElementById("qwe3").style.display="none"
    document.getElementById("right3").style.display="flex"
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
