import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Home",
    component:()=>import("views/home/Home"),
    redirect:"index",
    children:[
      {
        path:"index",
        name:"Index",
        component:() => import("views/home/children/Index")
      },
      {
        path:"product/:id", // 动态 id => 可以通过 商品的id去添加
        name:"Product",
        component:() => import("views/home/children/Product")
      },
      {
        path:"detail/:id",
        name:"Detail",
        component:() => import("views/home/children/Detail")
      }
    ]
  },
  {
    path:"order",
    name:"order",
    component:() => import('views/order/Order'),
    children:[
      {
        path:'orderList',
        name:"OrderList",
        component: () => import("views/order/children/OrderList")
      },
      {
        path:"orderConfirm/:id",
        name:"OrderConfirm",
        component: () => import("views/order/children/OrderConfirm")
      },
      {
        path:"pay",
        name:"OrderPay",
        component: () => import("views/order/children/OrderPay")
      }
    ]
  },
  {
    path:"cart",
    name:"cart",
    component:() => import("views/Cart")
  }
]

export default new VueRouter({
  routes
})