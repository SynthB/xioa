import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import NotFound from '@/components/NotFound'
import MainPage from '@/components/MainPage'
import FindPage from '@/components/FindPage'
import ForumPage from '@/components/ForumPage'
import MineStore from '@/components/MineStore'
import ProductDetail from '@/components/ProductDetail'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',component: ProductDetail},
    {path: '/',component: HomePage,children:[
      {path: '',component: MainPage,meta:{isselected: true,fiedtitle: '首页'}}
    ]},
/*     {path: '/home',component: HomePage,children:[
      {path: '',component: MainPage}
    ]}, */

    {path: '/home',component: HomePage,children:[
      {path: '',component: MainPage,meta:{isselected: true,fiedtitle: '首页'}},
      {path: 'main',component:MainPage,meta:{isselected: true,fiedtitle: '首页'}},
      {path: 'find',component: FindPage,meta:{isselected: true,fiedtitle: '发现'}},
      {path: 'forum',component: ForumPage,meta:{isselected: true,fiedtitle: '收藏'}},
      {path: 'minestore',component: MineStore},
  ]},
    {path: '/register',component: Register},
    {path: '/login',component: Login},
    {path: '/detail/:id',component: ProductDetail},
    {path: '/*',component: NotFound}
  ]
})
