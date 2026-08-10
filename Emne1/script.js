let isWidth = 40;

document.querySelector(".inCreaseBtn").addEventListener("click", function (e) {
    reSize(e.currentTarget === this);
    }
);

document.querySelector(".deCreaseBtn").addEventListener("click", (e) => {
    reSize(false)
    }
);

function reSize(larger) {
    if (larger) {
        isWidth += 5;
    } else {
        isWidth -= 5;
    }
    document.querySelectorAll(".imageContainer").forEach(elem => elem.style.setProperty("width", isWidth+"px"));
};

