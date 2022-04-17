const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Задание 2
// В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента 
// массива ingredients:

// Создаст отдельный элемент < li >.Обзательно 
// используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.


const makeListIngredients = ingredients.map(ingrid => {
  const newItem = document.createElement('li');
  newItem.textContent = ingrid;

  newItem.classList.add('item');

  return newItem;
});

// После чего вставит все < li > за одну операцию в 
// список ul.ingredients.

const createItemIngredients = document.querySelector(`#ingredients`);
createItemIngredients.append(...makeListIngredients);