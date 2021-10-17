Vue.component('products', {
    data() {
        return {
            catalogUrl: 'productsList.json',
            productName: 'My Product Name',
            products: [],
            filtered: [],
        }
    },

    methods: {
        filterProd(searchLine) {
            let regexp = new RegExp(searchLine, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
        }
    },

    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.products.push(item);
                };
                this.filtered = this.products;
            });
    },

    template: `<div class="goods-list" id="goods-list">

                <product v-for="prod of filtered" :key="prod.id" :product="prod"></product>

              </div>`,
});


Vue.component('product', {
    props: ['product'],
    data() {
        return {
            myName: 'Just a product',
        }
    },

    methods: {
        test(prod) {
            console.log(this.$root);
        }
    },


    template: `<div class="goods-item">                
    <img :src="product.picture">
    <div class="goods-item-content">
      <h2 class="goods-item-name"> {{ product.title }} </h2>
      <p class="goods-item-price">Price: $ {{ product.price }} </p>
      <button class="btn-goods-btn" @click="$root.$refs.basket.addProduct(product)">Купить</button>
    </div>
    </div>`

});