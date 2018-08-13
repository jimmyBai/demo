<template>
	<!--登录注册TABS-->
	<div class="box-content">
		<div class="infotitle">
			<span  v-text="$t('login.loginTitle')"></span>
		</div>
		<div class="login-forminput">
			<ul>
				<li class="title"><span v-text="$t('login.inputUser')"></span></li>
				<li class="content"><div><input type="text" :placeholder="$t('login.userTips')" v-model="email" /></div></li>
				<li class="title"><span v-text="$t('login.inputPwd')"></span></li>
				<li class="content"><div><input type="password" :placeholder="$t('login.pwdTips')" v-model="password" /></div></li>
			</ul>
		</div>
		<div class="login-btn">
			<div @click="goIn" v-text="$t('login.btnText')"></div>
		</div>
		<div class="moreinfo">
			<div><p v-text="$t('login.resetPwd')"></p></div>
			<div><p @click="gotopage" v-text="$t('login.addAccount')"></p></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
			email:'',
			password:''
    }
  },
	mounted(){
		

	},
	methods:{
		gotopage(){
			let vm =this
			vm.$router.push('/main/register')
		},
		goIn(){
			let vm =this;			
			let params={
				email:vm.email,
				password:vm.password
					
			};
			if(!vm.email||!vm.password){
				vm.$message.error('Please Input file');
				return
			}
			vm.$router.push('/page')
// 			vm.$axios.post(vm.$apis.login,params).then((res)=>{	
// 				
// 				       
//       }).catch(err => { 
// 				
//       });
		}
	}	
}
</script>
<style scoped>

</style>
