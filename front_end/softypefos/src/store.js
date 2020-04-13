import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('jwt') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        // loginAsync({ commit }, user) {
        //     return new Promise((resolve, reject) => {
        //         commit('auth_request')
        //         axios.post("http://localhost:4000/user/login", user)
        //             .then(resp => {
        //                 console.log(resp)
        //                 const token = resp.data.access_token
        //                 const user = resp.data.user
        //                 if (token) {
        //                     localStorage.setItem('jwt', token)
        //                     sessionStorage.setItem('Username', resp.data.user.username)
        //                 }
        //                 axios.defaults.headers.common['Authorization'] = token
        //                 commit('auth_success', token, user)
        //                 resolve(resp)
        //             })
        //             .catch(err => {
        //                 commit('auth_error')
        //                 reject(err.response)
        //             })
        //     })
        // },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('jwt')
                sessionStorage.clear()
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})