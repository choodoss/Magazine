import content from './textArray';

const lengthInColumn = content.length;
const quantityFirstColumn = Math.ceil(lengthInColumn / 2);
console.log(quantityFirstColumn)
const divMain = document.querySelectorAll('.magazine-contents__col');

const firstColumn = [];
const secondColumn = [];

content.forEach(({ number, name }, index) => {
  const column = index < quantityFirstColumn ? firstColumn : secondColumn;
  column.push(`<div class="magazine-contents__item">
    <div class="magazine-contents__number">${number}</div>
    <div class="magazine-contents__content">
      <div class="magazine-contents__name">${name}</div>
    </div>
  </div>`);
});

divMain[0].insertAdjacentHTML("afterbegin", firstColumn.join(""));
divMain[1].insertAdjacentHTML("afterbegin", secondColumn.join(""));



