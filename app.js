alert("LINOVA JS WORKING 😎🔥");

document.addEventListener("DOMContentLoaded", () => {

    // دکمه حالت تاریک و روشن
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "🌙 حالت تیره";
        } else {
            themeBtn.textContent = "☀️ حالت روشن";
        }

    });


    // شمارنده کاربران
    animateCounter("users", 25);

    // شمارنده بازدیدها
    animateCounter("visits", 350);

});


// تابع شمارنده
function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let value = 0;

    const timer = setInterval(() => {

        value++;

        element.textContent = value;

        if (value >= target) {
            clearInterval(timer);
        }

    }, 20);

}