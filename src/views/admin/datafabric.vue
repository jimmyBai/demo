<template>
	<div>
		<div class="formIndex">
			<el-select v-model="selval" placeholder="">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
			</el-select>
		</div>
		<div class="inputTbale">
			<div class="selectInfo">
				<span v-text="selectedText"></span>
			</div>
			<div class="tab-line" v-for="(item,index) in listData" :key="index">
				<div class="list-title boxbar">
					<span v-text="item.title"></span>
				</div>
				<div class="tablist-content">
					<ul>
						<li class="t-head">
							<div class="item">
								<span></span>
							</div>
							<div class="item">
								<span>USA</span>
							</div>
							<div class="item">
								<span>CHINA</span>
							</div>
							<div class="item">
								<span>INDIA</span>
							</div>
							<div class="item">
								<span>PAKSTAN</span>
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
			selectedText:'',
			options:[
				{value: '1',label: 'CONVENTIONAL COTTON'},
				{value: '2',label: 'ORGANIC COTTON'},
				{value: '3',label: 'PET'},
				{value: '4',label: 'SPANDEX'},
				{value: '5',label: 'WOOL'},
				{value: '6',label: 'CO-WOOL'}
			],
			listData:[
				{
					title:'Agricultural/ Feedstock Production',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				{
					title:'Textile Production',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Spinning Production',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				{
					title:'Fabrication-Weaving',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				{
					title:'Fabrication-Knitting',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				{
					title:'Bleaching & Dyeing',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				{
					title:'Finishing',
					list:[
						{
							name:'Global Warming Potential (GHG emission)',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Water Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Wastewater/Effluent',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Solid Waste Management Generated',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Recyled/co-product',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Disposed',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Burden-free',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Chemical Input',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						},
						{
							name:'Energy Consumption',
							val1:'',
							val2:'',
							val3:'',
							val4:'',
						}
					]
				},
				
			]
    }
  },
	watch:{
		selval(cVal){
			let vm =this;
			this.options.forEach(item=>{
				if(item.value==cVal){
					vm.selectedText=item.label
				}
			})
		}

	},
	mounted(){
		this.options.forEach(item=>{
			if(item.value==this.selval){
				this.selectedText=item.label
			}
		})

	},
	methods:{		
		
	}	
}
</script>
<style scoped>

</style>
