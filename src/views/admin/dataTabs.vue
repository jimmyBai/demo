<template>
	<div class="datainputBox">
		<div class="maxWidth80">
			<div class="headtabs">
				<div class="titleText">
					<span class="title">You are inputing data by</span>
					<span @click="changeItem(1)" class="item" :class="{'active':active==1}">Country</span>
					<span @click="changeItem(2)" class="item" :class="{'active':active==2}">Fabric</span>
					<span @click="changeItem(3)" class="item" :class="{'active':active==3}">Production Stage</span>
				</div>
			</div>
			<div class="datainputForm">
				<router-view/>
			</div>
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
			if(to.path.indexOf('datacountry')>0){
				this.active=1
			}else if(to.path.indexOf('datafabric')>0){
				this.active=2
			}else{
				this.active=3
			}
			
		}

	},
	mounted(){
		let url =window.location.href
		if(url.indexOf('datacountry')>0){
			this.active=1
		}else if(url.indexOf('datafabric')>0){
			this.active=2
		}else{
			this.active=3
		}
	},
	methods:{		
		changeItem(way){
			let vm =this;
			vm.active=way
			if(way==1){
				vm.$router.push('/admin/datacountry')
			}else if(way==2){
				vm.$router.push('/admin/datafabric')
			}else{
				vm.$router.push('/admin/datastage')
			}
		}
	}	
}
</script>
<style scoped>

</style>
