const btn = document.getElementById("themeBtn");

// بررسی حالت ذخیره‌شده
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    btn.textContent = "🌙 حالت تیره";
} else {
    btn.textContent = "☀️ حالت روشن";
}

// تغییر حالت
btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        btn.textContent = "🌙 حالت تیره";
        localStorage.setItem("theme", "light");
    } else {
        btn.textContent = "☀️ حالت روشن";
        localStorage.setItem("theme", "dark");
    }
});

// شمارنده کاربران
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

animateCounter("users", 25);
animateCounter("visits", 350);


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

// باز و بسته کردن منو
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
});

// بستن منو با لمس پس‌زمینه
overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});