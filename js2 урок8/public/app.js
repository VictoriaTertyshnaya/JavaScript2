const API = "https://raw.githubusercontent.com/VictoriaTertyshnaya/JavaScript2/main/JSON/";

const app = new Vue({
    el: '#app',

    data: {
        title: 'Online-shop',
        search: '',
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    alert('Error!');
                })
        },

        other() {
            console.log('Go search');
        },
    },

});