<template>
	<div>
	</div>
</template>

<script>
export default {
  name: 'forgetpwd',
  data () {
    return {
			
      
    }
  },
	mounted(){
		
	},
	methods:{
		//登录
		gologin(){
			this.$router.push('/login')
		},
		//获取验证码
		getSmsCode(){
			let vm =this;	//smsType 1注册 2找回密码 3修改支付密码
			let params={'mobilePhone':vm.phone,'smsType':{'value':2}};
				if(!vm.phone){
					vm.$toast({
						message: vm.$t('login.loginmsg'),
						position: 'middle',
						duration: 3000
					});
					return
				}						
				vm.candotime=false;
				vm.$axios.post(vm.$apis.getValidCode,params).then((res)=>{
					if(res.status=='200'){						
						if(res.data.status=='500'){
							vm.$toast({
								message:res.data.message,
								position: 'middle',
								duration: 3000
							});
							vm.candotime=true;
						}else{
							vm.$toast({
								message: vm.$t('SMStips'),
								position: 'middle',
								duration: 3000
							});							
							vm.timeCut(60)
							vm.showcode()
						}
					}else{
						vm.$toast({
							message:res.data.message,
							position: 'middle',
							duration: 3000
						});
						vm.candotime=true;
					}
				}).catch(err => {
					console.log(err);
				});
		},
		//SHOWSMSCODE
		showcode(){
			let vm = this;
			vm.$axios.post(vm.$apis.findSmsListByPage,{}).then((res)=>{
				if(res.status=='200'){
					vm.code=res.data.list[0].validCode
				}else{
					vm.$toast({
						message:res.data.message,
						position: 'middle',
						duration: 3000
					});
					vm.candotime=true;
				}
			}).catch(err => {
				console.log(err);
			});
		},
		//定时器
		timeCut:function(time){
			let srv = setInterval(()=>{
				if(time>=1){
					time--;
					this.codeText=time+'S'
				}else{
					this.candotime=true;
					this.codeText=this.$t('login.getcode')
					clearInterval(srv)
				}
			},1000)
		},
		//返回登录
		golgoin(){
			this.$router.push('/login')
		},
		changepwd(){
			let vm =this,params={
				confirmPassword:md5(this.confirmpwd),
				mobilePhone:this.phone,
				password:md5(this.password),
				validCode:this.code
			};
			if(!vm.confirmpwd||!vm.phone||!vm.password||!vm.code){
				vm.$toast({
					message: vm.$t('login.loginmsg'),
					position: 'middle',
					duration: 3000
				});
				return
			}else{
				if(vm.confirmpwd.toString().indexOf(vm.password.toString())!=0){
					vm.$toast({
						message: vm.$t('forgotpwd.pwderr'),
						position: 'middle',
						duration: 3000
					});
					return
				}
			}
			vm.$axios.post(vm.$apis.retrievePwd,params).then((res)=>{
        if(res.status=='200'){
        	if(res.data.status=='500'){
        		vm.$toast({
        			message:res.data.message,
        			position: 'middle',
        			duration: 3000
        		});
        	}else{
        		vm.$toast({
        			message: vm.$t('forgotpwd.changePWD'),
        			position: 'middle',
        			duration: 3000
        		});
        		vm.gologin()						
        	}
        }else{
        	vm.$toast({
        		message:res.data.message,
        		position: 'middle',
        		duration: 3000
        	});
        }
      }).catch(err => { 
      });
		}
	}	
}
</script>
}
</script>
<style scoped>

</style>
