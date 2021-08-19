Vue.component('filter-el', {
    data() {
        return {
            userSearch: '',
        }
    },

    template: `<div class="header-left">
    <p class="logo">ИНТЕРНЕТ-МАГАЗИН</p>
    <form class="search-form" action="#" @submit.prevent="$parent.$refs.products.filterProd(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
    </form>
</div>`

});