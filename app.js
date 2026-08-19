const btn = document.getElementById("themeBtn");

// تغییر حالت روشن/تیره
if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btn.textContent = "🌙 حالت تیره";
        } else {
            btn.textContent = "☀️ حالت روشن";
        }
    });
}

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

// اجرای شمارنده‌ها
animateCounter("users", 25);
animateCounter("visits", 350);