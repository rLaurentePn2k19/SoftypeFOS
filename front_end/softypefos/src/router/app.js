export default {

    routes: [
        {
        path: '/foods',
        name: 'foods',
        component: resolve => require(['@/components/modules/user/Foods.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/components/modules/user/Homepage.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['@/components/modules/admin/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    ]
}