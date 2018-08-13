<template>
  <div class="formData">
		<div class="head-title">
			<h3 v-text="$t('page.assessment.title')"></h3>
		</div>
		<div class="stock-list">
			<ul>
				<li v-for="(item,index) in listData" :key="index" class="content">
					<div class="stockNmae">
						<span v-text="item.name"></span>
					</div>						
					<div class="stockinfo">
						<div class="tips" v-if="item.value&&item.value>0" v-text="item.tips"></div>
						<div class="inputInfo">
							<input type="text" @input.stop="changeNum(item)" v-model="item.value"/>
						</div>
					</div>
				</li>
			</ul>
			<div class="stock-total">
				<div class="totalline" v-if="total!=''">
					<div class="text">
						<p v-if="total<100" v-text="infotext1"></p>
						<p v-if="total>=100" v-text="infotext2"></p>
					</div>
					<div class="showtotal">
						<div class="totalBox" v-text="$options.filters.viewMoney(total)"></div>
					</div>
				</div>
			</div>
			<div class="nextBtn">
				<div class="goNext" @click="total==100&&gotoPage()" :class="{'active':total==100}" v-text="$t('page.assessment.nextBtn')"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'assessment',
  data () {
    return {
      listData:[
				{
					name:"Cotton - Pure Conventional",
					tips:"Want it blended?",
					value:''
				},
				{
					name:"Cotton - Organic",
					tips:"Want it blended?",
					value:''
				},
				{
					name:"Poleyester",
					tips:"Edit to add more blend？",
					value:''
				},
				{
					name:"Spandex",
					tips:"Want it blended?",
					value:''
				},
				{
					name:"Wool",
					tips:"Want it blended?",
					value:''
				}
			],
			total:"",
			infotext1:"Choose at least one more fabric to compltete your blend",
			infotext2:"Sounds like a good blend!"
    }
  },
  filters: {
    viewMoney: function (value) {
      let data = value.toString()
      if(value){
        return data+'%'
      }
    }
  },
	mounted(){
		sessionStorage.removeItem('FABRIC')
	},
	methods:{
		changeNum(item){
			if(!/^[1-9]\d*$/.test(item.value)){
				item.value=''
			}
			//赋值
			if(item.value>100){
				item.value=''
			}
			let vm =this,num=0;			
			vm.listData.forEach(item=>{
				if(item.value){
					num+=parseFloat(item.value)
				}
			})
			if(num>100){
				vm.total=num-parseFloat(item.value)+100-(num-parseFloat(item.value))
				item.value=100-(num-parseFloat(item.value))
			}else{				
				vm.total=num
			}
		},
		gotoPage(){
			let vm =this,queryparams=[],objparams={};
			vm.listData.forEach(item=>{
				if(item.value){
					objparams={
						name:item.name,
						value:item.value
					}
					queryparams.push(objparams)
				}
			})
			/* this.$router.push({
        path: '/page/assessmentplaceOrigin',
        name:'placeOrigin', 
        query:JSON.stringify(queryparams)
      }) */ 
			sessionStorage.setItem('FABRIC',JSON.stringify(queryparams))
			this.$router.push('/page/placeOrigin')
		}
	},
}
</script>
<style scoped>

</style>
