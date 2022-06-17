
//1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, который выделяет текст например фоном.

let containerFirst = document.querySelector('div.container__first');
containerFirst.style.background = 'Yellow';
containerFirst.style.border = 'solid 2px black'
containerFirst.style.padding = '10px';
containerFirst.style.marginBottom = '20px';
containerFirst.style.display = 'flex';
containerFirst.style.flexDirection = 'column';
containerFirst.style.alignItems = 'flex-start';

let paragraph = document.querySelectorAll('p.text');
paragraph.forEach((el, i) => {
    el.style.margin = '10px';
    el.style.padding = '10px';
    el.style.fontSize = '20px';
    if(i<3) el.style.color = 'red', el.style.background = 'white', el.style.borderRadius = '15px';
    if(i>=3 && i<7) el.style.color = 'orange';
    if(i>6) el.style.color = 'green';
})

//2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
//*2 выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон

let containerSecond = document.createElement('div');
document.body.append(containerSecond);
containerSecond.style.background = 'White';
containerSecond.style.border = 'solid 2px Red';
containerSecond.style.padding = '10px';
containerSecond.style.marginBottom = '20px';
containerSecond.style.display = 'flex';
containerSecond.style.justifyContent = 'space-between';

let mon, tue, wed, thu, fri, sat, sun

let list = [mon, tue, wed, thu, fri, sat, sun];

list = list.map(el => el = document.createElement('p'))
list.forEach(el => containerSecond.append(el));

list.forEach((el, i) => {
    el.style.fontSize = '35px';
    el.style.fontFamily = 'arial';
    el.style.fontWeight = '600';
    el.style.margin = '10px';
    el.style.padding = '10px';
    if (i==0) el.innerText = 'Понедельник', el.style.color = 'red';
    if (i==1) el.innerText = 'Вторник', el.style.color = 'orange';
    if (i==2) el.innerText = 'Среда', el.style.color = 'yellow';
    if (i==3) el.innerText = 'Четверг', el.style.color = 'green';
    if (i==4) el.innerText = 'Пятница', el.style.color = 'lightblue';
    if (i==5) el.innerText = 'Суббота', el.style.color = 'blue';
    if (i==6) el.innerText = 'Воскресенье', el.style.color = 'violet';
});

//*3 объект Товара (название, цена, другие характеристики ...) создайте карточку

let containerThird = document.createElement('div');
containerThird.style.backgroundColor = '#EDEFF2'
containerThird.style.display = 'flex';
containerThird.style.justifyContent = 'center';
document.body.append(containerThird);

let card = document.createElement('div');
containerThird.append(card);
card.style.width = '300px';
card.style.height = '500px';
card.style.backgroundColor = 'white';
card.style.border = 'solid 2px lightgray';
card.style.borderRadius = '10px';
card.style.padding = '20px 16px'
card.style.margin = '20px';
card.style.overflow = 'hidden';
card.style.display = 'flex';
card.style.flexDirection = 'column'
card.style.justifyContent = 'space-between';
card.style.alignItems = 'center'

let img = document.createElement('a');
img.style.backgroundImage = 'url(https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/f/3/f3544d524096a2da7effed0face0e849.jpg&w=256&q=60)';
img.style.width = '135px';
img.style.height = '180px';
img.href = '#';
card.append(img);

let title = document.createElement('a');
title.innerText = 'Apple iPhone 12 Pro 256GB Graphite (MGMP3)';
title.href = '#';
title.style.fontFamily = 'Roboto'
title.style.fontSize = '14px';
title.style.fontWeight = '400';
title.style.color = 'black';
card.append(title)

let cost = document.createElement('h2');
cost.innerText = '40 449 ₴';
cost.style.fontFamily = 'Roboto';
cost.style.fontSize = '21px';
cost.style.fontWeight = '400';
card.append(cost);

let description = document.createElement('div');
description.innerHTML = '<h4 class="descript__title">Характеристики</h4><p class="descript__text">Материалы корпуса: Металл, Стекло</p><p class="descript__text">Влагозащита: IP68</p><p class="descript__text">Цвет: Серый</p><p class="descript__text">Тип экрана: OLED</p><p class="descript__text">Размер экрана: Безрамочный дисплей, 6,1"</p>';
card.append(description);

let descriptTitle = document.querySelector('h4.descript__title');
descriptTitle.style.fontFamily = 'Roboto';
descriptTitle.style.fontSize = '12px';
descriptTitle.style.fontWeight = '700';
descriptTitle.style.margin = '5px 0px';

let descriptText = document.querySelectorAll('p.descript__text');
descriptText.forEach(el => {
    el.style.fontFamily = 'Roboto';
    el.style.fontSize = '12px';
    el.style.fontWeight = '400';
    el.style.margin = '2px 0px'
    el.style.color = 'rgb(161, 154, 154)'
})

let buy = document.createElement('a');
buy.innerText = 'КУПИТЬ';
buy.href = '#'
buy.style.fontFamily = 'Roboto';
buy.style.fontSize = '20px';
buy.style.fontWeight = '700';
buy.style.color = 'orange';
buy.style.padding = '5px 15px';
buy.style.border = 'solid 2px orange'
card.append(buy);

