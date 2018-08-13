<template>
  <div class="countryBox">
		<div class="head-title">
			<h3 v-text="$t('page.countrypage.title')"></h3>
		</div>
		<div class="itemBar">
			<ul class="preul">
				<li v-for="(item,index) in fabricData" :key="index" :style="{'width':item.value+'%'}">
					<span class="name" v-text="item.name"></span>
					<span class="num" v-text="item.value+'%'"></span>
				</li>
			</ul>
			<div class="backfab">
				<span @click="goback" v-text="$t('page.countrypage.gobackFab')"></span>
			</div>
		</div>	
		<!--列表-->
		<div class="stageList">	
			<ul class="thead">
				<li>
					<div class="title">
						<span v-text="$t('page.countrypage.tbProSatge')"></span>
					</div>
					<div class="content">
						<span v-text="$t('page.countrypage.selCountry')"></span>
					</div>
				</li>
			</ul>
			<ul class="listInfo">
				<li v-for="(item,index) in itemA">
					<div class="title">
						<span v-text="item.name"></span>
					</div>
					<div class="content">
						<el-select v-model="item.val" placeholder="">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</div>
				</li>
			</ul>
			<ul class="listInfo">
				<li v-for="(item,index) in itemB">
					<div class="title">
						<span v-text="item.name"></span>
					</div>
					<div class="content">
						<el-select v-model="item.val" placeholder="">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</div>
				</li>
			</ul>
			<ul class="listInfo">
				<li v-for="(item,index) in itemC">
					<div class="title">
						<span v-text="item.name"></span>
					</div>
					<div class="content">
						<el-select v-model="item.val" placeholder="">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</div>
				</li>
			</ul>
		</div>
		<div class="getScore">
			<div class="scoreBtn" @click='goscore' v-text="$t('page.countrypage.getScroe')"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'assessment',
  data () {
    return {
      fabricData:'',
			options:[
				{value: '1',label: 'China'},
				{value: '2',label: 'USA'},
				{value: '3',label: 'India'},
				{value: '4',label: 'Pakastan'}
			],
			itemA:[
				{name:'Cotton Production',val:'1'},
				{name:'Agricultural Production',val:'1'},
				{name:'Textile Production',val:'1'}
			],
			itemB:[
				{name:'PET Production',val:'1'},
				{name:'Textile Production',val:'1'}
			],
			itemC:[
				{name:'Blending',val:'1'},
				{name:'Spinning',val:'1'},
				{name:'Bleaching & Dyeing',val:'1'},
				{name:'Finishing',val:'1'},
				{name:'Country of Destination',val:'1'}
			]
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
		//获取参数
		if(sessionStorage.getItem('FABRIC')){
			this.fabricData=JSON.parse(sessionStorage.getItem('FABRIC'))
		}
	},
	methods:{
		goback(){
			let vm =this;
			vm.$router.push('/page/fabric')
		},
		goscore(){
			let vm =this;
			vm.$router.push('/page/impactscore')
		}
	},
}
</script>
<style scoped>

</style>
