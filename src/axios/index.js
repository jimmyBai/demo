import Vue from 'vue'
import axios from 'axios'
import apis from '@/apis'
import store from '@/store'
import qs from 'qs'
Vue.prototype.$axios = axios;
Vue.prototype.$apis = apis;


// 基础url前缀
axios.defaults.baseURL = apis.devUrl
// 请求头信息
axios.defaults.headers.post['Content-Type'] = 'application/json';
//请求时间
axios.defaults.timeout = 30000;
//返回数据类型
// axios.defaults.responseType = 'json';


axios.interceptors.request.use(config=>{
	var url = config.url;
	if (!url) {
		console.warn("请求地址没有配置!");
		return config;
	}else if(config.url.indexOf('oauth/token')>0){
		/* config.data = qs.stringify(config.data);
		Object.assign(config.headers, {
			 'Content-Type': 'application/x-www-form-urlencoded',
			 'Authorization': getAuthorization
		}); */
	}
	if(store.state.auth.tokenInfo){
		var token=store.state.auth.tokenInfo.access_token
		var uri = url.replace(config.baseURL, "");
		if (uri.startsWith("api") && token) {
			Object.assign(config.headers, {
				'Authorization': "Bearer " + token
			});
				
		}
	}
	return config;
},error=>{
	return Promise.reject(error);
})

axios.interceptors.response.use(data=> {
  return data;
}, error=>{
  return Promise.reject(error);
});

export default axios;
