import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ './views/Layout/App.vue'),
      meta: {
        title: '首页',
        keepAlive: false,
      },
      children: [{
        path: '/',
        name: 'home',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/home.vue')
      },
      
      {
        path: '/leave',
        name: 'leave',
        meta: {
          title: '请假外出',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/leave.vue')
      },
      {
        path: '/approval',
        name: 'approval',
        meta: {
          title: '审批',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/approval.vue')
      },
      {
        path: '/record',
        name: 'record',
        meta: {
          title: '考勤记录',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/record.vue')
      },
      {
        path: '/minerecord',
        name: 'minerecord',
        meta: {
          title: '个人考勤记录',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/minerecord.vue')
      },
      {
        path: '/department',
        name: 'department',
        meta: {
          title: '部门/职位管理',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/department.vue')
      },
      {
        path: '/staff',
        name: 'staff',
        meta: {
          title: '员工管理',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/staff.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        meta: {
          title: '个人资料',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/profile.vue')
      },
      {
        path: '/user_information',
        name: 'user_information',
        meta: {
          title: '用户信息',
          keepAlive: false
        },
        component: () => import( /* webpackChunkName: "about" */ './views/user_information.vue')
      },
      {
        path: '/seas',
        name: 'seas',
        meta: {
          title: '公海池',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/seas.vue')
      },
      {
        path: '/business',
        name: 'business',
        meta: {
          title: '业务池',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/business.vue')
      },
      {
        path: '/enter',
        name: 'enter',
        meta: {
          title: '员工录入',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/enter.vue')
      },
      {
        path: '/user_group',
        name: 'user_group',
        meta: {
          title: '用户组',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/user_group.vue')
      },
      {
        path: '/editpassword',
        name: 'editpassword',
        meta: {
          title: '修改密码',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/editpassword.vue')
      },
     
      {
        path: '/audit',
        name: 'audit',
        meta: {
          title: '用户信息审核',
          keepAlive: true
        },
        component: () => import( /* webpackChunkName: "about" */ './views/audit.vue')
      }
     
    ]
  },

    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login/Login.vue')
    }
  ]
})