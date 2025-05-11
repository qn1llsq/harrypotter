function toggleTable() {
  document.getElementById("myTable").classList.toggle("show");
}
function handleSearch() {
  const query = document.getElementById("searchInput").value;
  alert(`Вы искали: ${query}`);
}
const wrapper = document.getElementById("deliveryWrapper");
const popup = document.getElementById("deliveryPopup");
let timeout;
wrapper.addEventListener("mouseenter", () => {
  clearTimeout(timeout);
  popup.classList.add("show");
});
wrapper.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    popup.classList.remove("show");
  }, 300); // задержка для удобства
});
const langWrapper = document.getElementById("langWrapper");
const langPopup = document.getElementById("langPopup");
let hideTimeout;
langWrapper.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout); // Отменяем исчезновение
  langPopup.style.display = "block";
});
langWrapper.addEventListener("mouseout", () => {
  hideTimeout = setTimeout(() => {
    langPopup.style.display = "none";
  }, 200); // Задержка 200 мс
});
const favWrapper = document.getElementById("favoritesWrapper");
const favPopup = document.getElementById("favoritesPopup");
let favTimeout;
favWrapper.addEventListener("mouseenter", () => {
  clearTimeout(favTimeout);
  favPopup.classList.add("show");
});
favWrapper.addEventListener("mouseleave", () => {
  favTimeout = setTimeout(() => {
    favPopup.classList.remove("show");
  }, 300);
});
const cartWrapper = document.getElementById("cartWrapper");
const cartPopup = document.getElementById("cartPopup");
let cartTimeout;
cartWrapper.addEventListener("mouseenter", () => {
  clearTimeout(cartTimeout);
  cartPopup.classList.add("show");
});
cartWrapper.addEventListener("mouseleave", () => {
  cartTimeout = setTimeout(() => {
    cartPopup.classList.remove("show");
  }, 300);
});
const profileWrapper = document.getElementById("profileWrapper");
const profilePopup = document.getElementById("profilePopup");
let profileTimeout;
profileWrapper.addEventListener("mouseenter", () => {
  clearTimeout(profileTimeout);
  profilePopup.classList.add("show");
});
profileWrapper.addEventListener("mouseleave", () => {
  profileTimeout = setTimeout(() => {
    profilePopup.classList.remove("show");
  }, 300);
});

const harryBtn = document.getElementById("harry-btn");
const overlay = document.getElementById("speech-overlay");
const box = document.getElementById("speech-box");
const text = document.getElementById("speech-text");

const firstText = `Всім привіт, хто перевіряє мою роботу! Я намагався над нею дуже сильно, дуже сподіваюся що вам теж дуже сподобається  (натисніть ще раз на мене!)`;
const secondText = `На цьому сайті я хочу показати вигаданий магазин по всесвіту Harry Potter. Тут можна дізнатися про весь його всесвіт, дізнатися про книги, подивитися всі частини фільмів і прикупити собі магічні речі!!!`;

let firstClickDone = false;

harryBtn.addEventListener("click", () => {
  overlay.style.display = "flex";

  if (!firstClickDone) {
    typeText(firstText);
    firstClickDone = true;
  } else {
    typeText(secondText);
  }
});

overlay.addEventListener("click", (e) => {
  if (!box.contains(e.target)) {
    overlay.style.display = "none";
    text.innerText = "";
    firstClickDone = false; // сбрасываем на начало
  }
});

function typeText(str) {
  let i = 0;
  text.innerText = "";
  const interval = setInterval(() => {
    text.innerText += str[i];
    i++;
    if (i >= str.length) clearInterval(interval);
  }, 40);
}
