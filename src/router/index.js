import Vue from 'vue'
import Router from 'vue-router'
import refRoutes from './refs'
import store from '@/store'

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	scrollBehavior: () => ({ y: 0 }),
// 	mode: 'history',
// 	scrollBehavior (to, from, savedPosition) {
//      if (savedPosition) {
//        return savedPosition
//      } else {
//        return { x: 0, y: 0 }
//      }
//    },
  routes: [
		{
			path: '/',
			name: 'main',
    	redirect:'/main/login'			
		},
		{
			path: '/main',
			name: 'mainlogin',
    	redirect:'/main/login',
			component: resolve=>require(['@/views/common/main.vue'],resolve),
			children: [
				{
					path: 'login',
					name: 'login',
					meta:{index:0},
					component: refRoutes.login
				},
				{
					path: 'register',
					name: 'register',
					meta:{index:0},
					component: refRoutes.register
				},
			]
		},
		//主页面
		{
			path: '/page',
			name: 'page',
			redirect:'/page/fabric',
			component: resolve=>require(['@/views/page/page.vue'],resolve),
			children: [
				{
					path: 'fabric',
					name: 'fabric',
					component:resolve=>require(['@/views/page/fabric.vue'],resolve)
				},
				{
					path: 'placeOrigin',
					name: 'placeOrigin',
					meta:{index:0},
					component:resolve=>require(['@/views/page/placeOrigin.vue'],resolve)
				},
				{
					path: 'impactscore',
					name: 'impactscore',
					meta:{index:0},
					component:resolve=>require(['@/views/page/impactscore.vue'],resolve)
				},
				{
					path: 'comparecountry',
					name: 'comparecountry',
					meta:{index:0},
					component:resolve=>require(['@/views/page/comparecountry.vue'],resolve)
				},
				{
					path: '/admin',
					name: 'dataTabs',
					meta:{index:0},
					redirect:'/admin/datacountry',
					component:resolve=>require(['@/views/admin/dataTabs.vue'],resolve),
					children: [
						{
							path: 'datacountry',
							name: 'datacountry',
							meta:{index:0},
							component:resolve=>require(['@/views/admin/datacountry.vue'],resolve)
						},
						{
							path: 'datafabric',
							name: 'datafabric',
							meta:{index:0},
							component:resolve=>require(['@/views/admin/datafabric.vue'],resolve)
						},
						{
							path: 'datastage',
							name: 'datastage',
							meta:{index:0},
							component:resolve=>require(['@/views/admin/datastage.vue'],resolve)
						}
					]	
				}				
			]
		},
		{
			path: '/404',
			name: 'Page404',
			component: refRoutes.page404
		},
		{
			path: '/500',
			name: 'Page500',
			component: refRoutes.page500
		},
		{
			path: '/forgotpwd',
			name: 'forgetpwd',
      component: refRoutes.forgotpwd,
		},
		{
			path: '/*',
			redirect: '/404'
		}
	]
})
router.beforeEach((to, from, next) => {
// 	store.dispatch('loginCheck').then(()=>{
// 		//console.log(store.state.auth.isLoggedIn)
// 		if(store.state.auth.isLoggedIn==1){		
// 			if(to.matched.some(record => record.meta.checkLogin)){
// 				next({
// 					path: '/myinfo',
// 				})
// 				next()
// 			}else{
// 				next()
// 			}
// 		}else{
// 			next()
// 		}		
// 	});
	next();
})
export default router
