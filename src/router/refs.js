const refRoutes={
	//公共页面
	login: resolve=>require(['@/views/common/login'],resolve),
	register: resolve=>require(['@/views/common/register'],resolve),
	forgotpwd: resolve=>require(['@/views/common/forgotpwd'],resolve),
	page404: resolve=>require(['@/views/common/404'],resolve),
	page500: resolve=>require(['@/views/common/500'],resolve),
}
export default refRoutes;