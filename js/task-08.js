// Задание 8
// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login - form должна быть по 
// событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с 
// предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери 
// значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.

// Для доступа к элементам 
// формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const objectInformation = { email, password };

    if (email, password == '') {
        return alert('Предупреждением, все поля должны быть заполнены');
    } else {
       
        form.reset();
    }
     console.log(objectInformation);
}


// const formData = new FormData(ev.currentTarget);  
    
    
//     formData.forEach((value, name) => {
//         console.log(name);
//         console.log(value);

//     });