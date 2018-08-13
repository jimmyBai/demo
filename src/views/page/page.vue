<template>
	<div class="m-content mainpage">
		<div class="b-head">
			<div class="h-left">
				<div class="h-logo"></div>
				<div class="h-item">
					<div class="item" @click="checkItem(1)" :class="{'active':active==1}" v-text="$t('page.itemA')"></div>
					<div class="item" @click="checkItem(2)" :class="{'active':active==2}" v-text="$t('page.itemB')"></div>
				</div>
			</div>
			<div class="h-right">
				<div class="userInfo">
					<div class="userImg"></div>
					<div>
						<i class="el-icon-arrow-down"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="b-box">			
			<router-view/>
		</div>
	</div> 
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
			active:1,
    }
  },
	watch:{
		$route(to) {
			if(to.path.indexOf('admin')>0){
				this.active=2
			}else{
				this.active=1
			}
			
		}

	},
	mounted(){
		if(window.location.href.indexOf('/admin/')>0){
				this.active=2
			}else{
				this.active=1
			}

	},
	methods:{		
		checkItem(way){
			let vm =this;
			vm.active=vm.itemActive=way
			//判断是否有登录权限
			way==2?vm.$router.push('/admin'):vm.$router.push('/page')
		}
	}	
}
</script>
<style scoped>

</style>
