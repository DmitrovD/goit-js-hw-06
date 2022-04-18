// Задание 9
// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике 
// на button.change - color и выводит значение цвета 
// в span.color.

const refs = {

  changeColor : document.querySelector(".change-color"),
  color : document.querySelector(".color"),
  body : document.querySelector("body"),
}


refs.changeColor.addEventListener("click", onColorChange);

function onColorChange() {
  refs.color.textContent = getRandomHexColor();
	refs.body.style.backgroundColor = getRandomHexColor();
}

// Для генерации случайного цвета используй функцию
// getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
