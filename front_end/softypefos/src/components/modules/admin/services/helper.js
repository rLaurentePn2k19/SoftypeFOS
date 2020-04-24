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
    console.log(data)
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
}

export default { addFact, editFact, deleteFact, getFact }

