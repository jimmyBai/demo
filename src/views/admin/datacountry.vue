<template>
	<div>
		<div class="formIndex">
			<el-select v-model="selval" placeholder="">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
			</el-select>
		</div>
		<div class="inputTbale">
			<div class="tab-line" v-for="(item,index) in listData" :key="index">
				<div class="list-title">
					<span v-text="item.title"></span>
				</div>
				<div class="tablist-content">
					<ul>
						<li class="t-head">
							<div class="item">
								<span></span>
							</div>
							<div class="item">
								<span>Agricultural/Feedstock Production</span>
							</div>
							<div class="item">
								<span>Textile Production</span>
							</div>
							<div class="item">
								<span>Spinning</span>
							</div>
							<div class="item">
								<span>Fabrication-Weaving</span>
							</div>
							<div class="item">
								<span>Fabrication-Knitting</span>
							</div>
							<div class="item">
								<span>Bleaching & Dyeing</span>
							</div>
							<div class="item">
								<span>Finishing</span>
							</div>
						</li>
						<li v-for="(navTd,num) in item.list" :key="num">
							<div class="name">
								<span v-text="navTd.name"></span>
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val1" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val2" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val3" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val4" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val5" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val6" />
							</div>
							<div class="content">
								<input type="text" placeholder="" v-model="navTd.val7" />
							</div>
						</li>
					</ul>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
export default {
  name: 'dataCounter',
  data () {
    return {
			selval:'1',
			options:[
				{value: '1',label: 'CHINA'},
				{value: '2',label: 'USA'},
				{value: '3',label: 'INDIA'},
				{value: '4',label: 'PAKASTAN'}
			],
			listData:[
				{
					title:'CONVENTIONAL COTTON',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'ORGANIC COTTON',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'PET',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'CO-PET(35/65)',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'SPANDEX',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'CO-SPANDEX',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'WOOL',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				},
				{
					title:'CO-WOOL',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
							val5:'',
							val6:'',
							val7:'',
						}
					]
				}
				
				
			]
    }
  },
	watch:{
		

	},
	mounted(){
		

	},
	methods:{		
		
	}	
}
</script>
<style scoped>

</style>
