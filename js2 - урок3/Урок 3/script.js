const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];
const renderGoodsItem = (title = "", price, img = "img/shirt.jpg") =>
    `<div class="goods-item">
      <img class='goods-item-img' src="${img}">
        <div class="goods-item__content">
          <h3 class='goods-item-name'>Название товара: ${title}</h3>
          <p class='goods-item-price'>Цена товара: ${price} руб.</p>
          <button class="btn_goods-btn">Купить</button>
      </div>
    </div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);


//Задание №1 2-го урока

let btnBasket = document.getElementById('basket-btn');

let goodsListSection = document.querySelector('.product-card-section')

class GoodsItem {
    constructor(title, price, img = 'img/shirt.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="goods-list__product-box">
    <span class="goods-list__product-box__name">${this.title}</span>
    <div class="goods-list__product-box__price">${this.price}</div>
    <img class="goods-list__product-box__img" src=${this.img} height="100px" alt="">
    <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
    </div>`
    }
}

class GoodsList {
    constructor(container = '.product-card-section') {
        this.container = container;
        this.goods = [];
        this.allPtoducts = [];
        this.fetchGoods();
        this.render();
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Shoes', price: 250 }
        ];
    }

    render() {
        let block = document.querySelector(this.container);
        for (let product of this.goods) {
            let productObject = new GoodsItem(product);
            this.allPtoducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    // Задание №2 2-го урока
    sumItems() {
        let sum = 0;

        for (let product of this.goods) {
            sum += product.price;
        }
        return sum;
    }
}
let list = new GoodsList();




// Задание №1 3-го урока

let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('Error!');
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    });
};