<template>	
	<div class="box-content">
		<div class="infotitle">
			<span  v-text="$t('login.regTitle')"></span>
		</div>
		<div class="login-forminput">
			<ul>
				<li class="title"><span v-text="$t('login.regFirstName')"></span></li>
				<li class="content"><div><input type="text" :placeholder="$t('login.regFirstNameTips')" v-model="firstNmae" /></div></li>
				<li class="title"><span v-text="$t('login.regLastName')"></span></li>
				<li class="content"><div><input type="text" :placeholder="$t('login.regLastNameTips')" v-model="lastName" /></div></li>
				<li class="title"><span v-text="$t('login.regEmail')"></span></li>
				<li class="content"><div><input type="text" :placeholder="$t('login.regEmailTips')" v-model="email" /></div></li>
				<li class="title"><span v-text="$t('login.regPassword')"></span></li>
				<li class="content"><div><input type="password" :placeholder="$t('login.regPasswordTips')" v-model="password" /></div></li>
			</ul>
		</div>
		<div class="login-btn">
			<div @click="goRegister" v-text="$t('login.regBtn')"></div>
		</div>
		<div class="moreinfo">
			<div><p @click="backLogin" v-text="$t('login.regBackLogin')"></p></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
			firstNmae:'',
			lastName:'',
			email:'',
			password:''
    }
  },
	mounted(){
		

	},
	methods:{
		backLogin(){
			let vm =this
			vm.$router.push('/main/login')
		},
		goRegister(){
			let vm =this;			
			let params={
				firstNmae:vm.firstNmae,
				lastName:vm.lastName,
				email:vm.email,
				password:vm.password	
			};
			if(!vm.firstNmae||!vm.lastName||!vm.email||!vm.password){
				vm.$message.error('Please Input file');
				return
			}			
			vm.$router.push('/main/login')
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
