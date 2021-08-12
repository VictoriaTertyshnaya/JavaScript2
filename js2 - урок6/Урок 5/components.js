const childElement = {
    name: 'child-element',

};
Vue.component('goods-el', {
    components: {
        childElement,
    },
    data() {
        return {

        }
    },
    template: `<div>
    <div class="header-right">
    <div class="brakets_button">
        <button class="cart-button" type="button" id="btn-basket" @click="showCartt = !showCart">Корзина
        <section class="product-card-section" v-show="showCart">
            <div class="goods_list">
                <div class="goods-item" v-for = 'item of goodsItems' :key = 'item.id_item'>
                    <img :src="item.img" :alt = "item.title">
                    <div class="goods-item__content">
                        <h3 class='goods-item-name'>Название товара: {{item.title}}</h3>
                        <p class='goods-item-price'>Цена товара: {{item.price}} руб.</p>
                        <p class='goods-item-quantity'>Количество товаров: {{item.quantity}}.</p>
                    </div>
                </div>
            </div>
        </section>
  </button>
    </div>
</div>
</div>
    </div>`
})