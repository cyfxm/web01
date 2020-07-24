export default [
    {
        path:'/details',
        name:"详情",
        component:()=>import("../../views/details.vue")
    },
    {
        path:"/order",
        name:"订单",
        component:()=>import("../../components/cart/order.vue")
    }
]