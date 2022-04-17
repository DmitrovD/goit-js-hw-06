// Задание 5
// Напиши скрипт который, при наборе текста в 
// инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.


const inputNm = document.querySelector(`#name-input`);
const outputNm = document.querySelector('#name-output');

inputNm.addEventListener('input', onInputChange);

function onInputChange() {
	if (inputNm.value) {
		outputNm.textContent = inputNm.value;
	} else {
		outputNm.textContent = "Anonymous";
	}
}

// Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".