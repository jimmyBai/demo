<template>
	<div class="m-content loginpage">
		<div class="b-head">
			<div class="h-logo">
				
			</div>
			<div class="h-rightBtn">
				<div class="btn" :class="{'active':active==1}"><span @click="checkItem(1)" v-text="$t('loginNavTabs.REGISTER')"></span></div>
				<div class="btn" :class="{'active':active==2}"><span @click="checkItem(2)" v-text="$t('loginNavTabs.SIGNIN')"></span></div>
			</div>
		</div>
		<div class="b-box">
			<div class="box-left">
				<div class="felx-center">
					<div class="navtabs">
						<div class="item" :class="{'active':itemActive==1}">
							<span @click="checkItem(1)" v-text="$t('loginNavTabs.REGISTER')"></span>
						</div>
						<div class="item" :class="{'active':itemActive==2}">
							<span @click="checkItem(2)" v-text="$t('loginNavTabs.SIGNIN')"></span>
						</div>
					</div>
					<router-view/>
					<!--登录注册TABS-->
					<!-- <div class="box-content">
						<div class="infotitle">
							<span  v-text="$t('login.title')"></span>
						</div>
						<div class="login-forminput">
							<ul>
								<li class="title"><span v-text="$t('login.inputUser')"></span></li>
								<li class="content"><div><input type="text" :placeholder="$t('login.userTips')" /></div></li>
								<li class="title"><span v-text="$t('login.inputPwd')"></span></li>
								<li class="content"><div><input type="password" :placeholder="$t('login.pwdTips')" /></div></li>
							</ul>
						</div>
						<div class="login-btn">
							<div v-text="$t('login.btnText')"></div>
						</div>
						<div class="moreinfo">
							<div><p v-text="$t('login.resetPwd')"></p></div>
							<div><p v-text="$t('login.addAccount')"></p></div>
						</div>
					</div>		 -->			
				</div>
			</div>
			<div class="box-right is-hidden">
				<img src="../../assets/img/loginbg.jpg" />
			</div>
		</div>
	</div> 
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
			active:2,
			itemActive:2
    }
  },
	watch:{
		$route(to) {
			if(to.path.indexOf('login')>0){
				this.active=2
				this.itemActive=2
			}else{
				this.active=1
				this.itemActive=1
			}
			
		}

	},
	mounted(){
		if(window.location.href.indexOf('/main/login')>0){
			this.active=2
			this.itemActive=2
		}else{
			this.active=1
			this.itemActive=1
		}

	},
	methods:{
		
		checkItem(way){
			let vm =this;
			vm.active=vm.itemActive=way
			way==2?vm.$router.push('/main/login'):vm.$router.push('/main/register')
		}
	}	
}
</script>
<style scoped>

</style>
