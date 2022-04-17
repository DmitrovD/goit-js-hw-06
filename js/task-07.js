// Задание 7
// Напиши скрипт, который реагирует на изменение 
// значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка 
// будет меняться размер текста.

const turnInput = document.querySelector('#font-size-control');
const growText = document.querySelector('#text')

turnInput.addEventListener('input', onInputChange)

function onInputChange (numb) {
    growText.style.fontSize = turnInput.value+px;
}; 
 