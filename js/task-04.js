// Задание 4
// Счетчик состоит из спана и кнопок, которые, при
// клике, должны увеличивать и уменьшать его значение на единиц

const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
let counterValue = Number(valueEl.textContent);

// Добавь слушатели кликов на кнопки, внутри которых 
// увеличивай или уменьшай значение счтетчика.
// +
// Обновляй интерфейс новым значением переменной counterValue.

decrementBtn.addEventListener("click", function () {
    counterValue -= 1;
	valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
    counterValue += 1;
	valueEl.textContent = counterValue;
});

