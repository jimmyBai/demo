// 引入对象持有者

const authModule = {
  state:{
    isLoggedIn:0, 
		
	},
  getters:{
    getLoggedIn:state=>{
			return state.isLoggedIn
		}
  },
	mutations:{	
		isLoggedIn(state,obj){
			state.isLoggedIn=obj
		},
		//设置登录token信息
    setToken(state,obj){
			state.isLoggedIn=1
    },
		setUser(state,obj){
      state.userInfo=obj
    },
    // 清理用户信息
    clearUserInfo: (state) => {
      state.userInfo = null;
    },			
    // 清理token信息		
    clearTokenInfo(state){
      state.tokenInfo = null;
    },
	},
	actions:{
    saveToken({commit},obj){
      commit("setToken", obj)
    },
		saveUser({commit},obj){
			commit("setUser", obj)
		},
		clearUser({commit}){
      commit('clearUserInfo', {});
      commit('clearTokenInfo', {});
    },
		//检查登录状态
		loginCheck({commit}){
//       if(SessionContextHodler.getContext().getTokenInfo()){	
//         commit('isLoggedIn', 1);
// 			}else{				 
//         commit('isLoggedIn', 0);
// 			}
    },
	}
}
export default authModule
