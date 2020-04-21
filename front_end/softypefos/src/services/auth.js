import ROUTER from 'router'

export default {
    user: false,
    setUser(user) {
        this.user = !this.user
    },
    getUser(user) {
        return user
    },
    logout() {
        alert("You are now logged out.")
        this.user = false
        // localStorage.clear("Email");
        // localStorage.clear("Password");
        // ROUTER.push('/login')
    }
}
