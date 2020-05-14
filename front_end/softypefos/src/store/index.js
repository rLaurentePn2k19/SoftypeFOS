import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'
import ROUTER from "@/router"

Vue.use(Vuex);

// add viand from the admin dashboard needs to fix
// update view in dashboard 

export default new Vuex.Store({
    state: {
        viands_To_Order: [],
        viands_To_Display: [],
        user: false
    },
    getters: {
        getViands: state => {
            return state.viands_To_Display
        },
        getOrders: state => {
            return state.viands_To_Order
        },
    },
    mutations: {
        setViands(state, viands) {
            state.viands_To_Display = viands
        },
        setOrders(state, order) {
            state.viands_To_Order.push(order)
        },
        addViand(state, viand) {
            state.viands_To_Display.push(viand)
        },
        deleteViand(state, viand_id) {
            state.viands_To_Display = state.viands_To_Display.filter(viand => {
                if (viand.id != viand_id) {
                    return viand
                }
            })
        },
        setUser(state, user) {
            state.user = user
        },
        logout(state, user) {
            state.user = !user
        }
    },
    actions: {
        GetUploadedViands({ commit }) {
            return new Promise((resolve, reject) => {
                http.get("http://localhost:4000/admin/retrieveViands").then(res => {
                    const temp_viand = []
                    res.data.forEach(data => {
                        const viand = {
                            id: data._id,
                            selected: false,
                            viand_qty: 1,
                            viand_image: data.image,
                            viand_name: data.name
                        };
                        temp_viand.push(viand);
                    });
                    commit("setViands", temp_viand)
                    resolve(temp_viand)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        AddViand({ commit }, viand) {
            return new Promise((resolve, reject) => {
                http.post("http://localhost:4000/admin/addViand", viand).then(res => {
                    console.log(res.data, " response viand from the back-end")
                    commit("addViand", res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        Login({ commit }, admin) {
            return new Promise((resolve, reject) => {
                if (admin.username == "admin" && admin.password == "Softype100") {
                    localStorage.setItem('admin', admin.password)
                    commit('setUser', true)
                    resolve("Logged in as admin")
                    ROUTER.push("/dashboard")
                } else {
                    reject("Not an admin")
                }
            })
        },
        DeleteViand({ commit }, viand_id) {
            return new Promise((resolve, reject) => {
                http.delete(`http://localhost:4000/admin/deleteViand/${viand_id}`).then(res => {
                    commit("deleteViand", viand_id)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        Logout({ commit }) {
            commit("logout", true)
            localStorage.clear()
            setTimeout(() => (ROUTER.push("/home")), 2000);
        }
    }
})