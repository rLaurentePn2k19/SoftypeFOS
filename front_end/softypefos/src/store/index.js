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
        new_Order: [], // need to fix
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
        setNewOrder(state, order) { // need to fix
            state.new_Order = order
        },
        setOrders(state, order) {
            state.viands_To_Order.push(order)
        },
        clearOrders(state) {
            state.viands_To_Order = []
        },
        addViand(state, viand) {
            state.viands_To_Display.push(viand)
        },
        deleteViand(state, viand_id) {
            state.viands_To_Display = state.viands_To_Display.filter(viand => {
                if (viand._id != viand_id) {
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
        GetUploadedViands({ commit }) { // solved
            return new Promise((resolve, reject) => {
                http.get("http://localhost:4000/admin/retrieveViands").then(res => {
                    const temp_viand = []
                    res.data.forEach(data => {
                        const viand = {
                            _id: data._id,
                            _selected: false,
                            _qty: 1,
                            _image: data.image,
                            _name: data.name
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
        AddViand({ commit }, viand) { // solved
            return new Promise((resolve, reject) => {
                http.post("http://localhost:4000/admin/addViand", viand).then(res => {
                    console.log(res.data, " response viand from the back-end")
                    const viand = {
                        _id: res.data._id,
                        _selected: false,
                        _qty: 1,
                        _image: res.data.image,
                        _name: res.data.name
                    };
                    commit("addViand", viand)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        DeleteViand({ commit }, viand_id) { // solved
            return new Promise((resolve, reject) => {
                http.delete(`http://localhost:4000/admin/deleteViand/${viand_id}`).then(res => {
                    console.log("delete", res.data)
                    commit("deleteViand", viand_id)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        Login({ commit }, admin) { // need to review
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
        Logout({ commit }) { // solved
            commit("logout", true)
            localStorage.clear()
            setTimeout(() => (ROUTER.push("/home")), 2000);
        },
        // Orders 
        SendOrder({ commit }, order) { // solved but have some issues
            return new Promise((resolve, reject) => {
                http.post("http://localhost:4000/order/addOrder", order).then(res => {
                    console.log(res.data, "order response");
                    commit("setNewOrder", res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
        // Facts
    }
})