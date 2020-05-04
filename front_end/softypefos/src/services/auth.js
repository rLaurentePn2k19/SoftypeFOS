
export default {
    user: null,
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return user
    },
    login(username, password) {
        if (username == "admin" && password == "Softype100") {
            localStorage.setItem("Admin", username)
            return true;
        } else {
            return false;
        }
    },

    logout() {
        localStorage.clear();
        this.user = null
    }
}