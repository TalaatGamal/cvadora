











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




