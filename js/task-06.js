// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте
// (событие blur), проверяет его содержимое на 
// правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data - length.

// Если введено подходящее количество символов,
// то border инпута становится зелёным, если
// неправильное - красным.

// Для добавления стилей, используй CSS - классы 
// valid и invalid, которые мы уже добавили в исходные 
// файлы задания.

const inputNumb = document.querySelector('#validation-input');

inputNumb.addEventListener("blur", onBlurEvent);



function onBlurEvent(el) { 
  if (Number(el.currentTarget.value.length) == inputNumb.dataset.length) {
        inputNumb.classList.remove('invalid');
        inputNumb.classList.add('valid');

    } else {
        inputNumb.classList.remove('valid');
        inputNumb.classList.add('invalid');
    }
}