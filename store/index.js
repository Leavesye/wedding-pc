import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        baseUrl: "https://www.watabe-wedding.com.cn",
        menu: {},
        token: ""
    },
    mutations: {
        SAVE_MENU(state, data) {
            state.menu = data
        },
        save_token(state, data) {
            state.token = data
        }
    }
})

export default store