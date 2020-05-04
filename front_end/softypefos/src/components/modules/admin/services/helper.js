import http from "axios"

function addFact(data) {
    return new Promise((resolve, reject) => {
        http.post("http://localhost:4000/admin/addFact", data).then(res => {
            console.log(res.data)
            resolve(res)
        }).catch(err => {
            reject(err.response)
        })
    })
}
function editFact(data) {
    return new Promise((resolve, reject) => {
        http.put(`http://localhost:4000/admin/updateFact`, data).then(res => {
            console.log(res.data, "helper")
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
function deleteFact(id) {
    return new Promise((resolve, reject) => {
        http.delete(`http://localhost:4000/admin/deleteFact/${id}`).then(res => {
            console.log(res.data)
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
function getFact(data) {
    console.log(data)
    return new Promise ((resolve, reject) => {
        http.get(`http://localhost:4000/admin/getFact`).then(res =>{
            console.table(res.data)
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}

export default { addFact, editFact, deleteFact, getFact }

