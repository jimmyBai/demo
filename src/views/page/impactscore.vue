<template>
  <div class="scoreBox">
		<div class="shead">
			<div class="shead-left">
				<span v-text="cotton"></span>
				<span v-text="pre"></span>
				<span v-text="multiple"></span>
			</div>
			<div class="shead-right">
				<div class="btn">
					<span @click="gotoPage" v-text="$t('page.scorePage.newCountrySelection')"></span>
				</div>
				<div class="normal">
					<span @click="openCountry" class="btn" v-text="$t('page.scorePage.countrySet')"></span>
					<!--POP-->
					<div class="popsBox" v-show="popStatus">
						<div class="listli">
							<ul>
								<li class="flexdivli titleli">
									<div><span>Production</span></div>
									<div><span>Select Country</span></div>
								</li>
								<li v-for="(item,index) in popData" :key="index">
									<div class="poptitle">
										<p v-text="item.title"></p>
									</div>
									<div class="flexdivli" v-for="(nav,num) in item.list">
										<div class="itemli">
											<span v-text="nav.name"></span>
										</div>
										<div class="itemli">
											<el-select v-model="nav.val" placeholder="">
												<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
											</el-select>
										</div>
									</div>
								</li>
							</ul>
							<div class="updateScore">
								<span @click="updatascore">Update Scpre</span>
							</div>
						</div>
					</div>
					<!--POP END-->
				</div>
			</div>	
		</div>
		<div class="navBar">
			<ul>
				<li v-for="(item,index) in navData" :key="index">
					<div class="info">
						<i class="icon" :class="'icon-'+item.icon"></i>
						<div class="infoText">
							<p class="num" v-text="item.num"></p>
							<p class="unit" v-text="item.unit"></p>
						</div>
					</div>
					<div class="infoName">
						<p v-text="item.name"></p>
					</div>
				</li>
			</ul>
		</div>
		<!--图表-->
		<div class="chartshow">
			<div class="flex-echart">
				<div class="left">
					<div class="name"><span v-text="$t('page.scorePage.impactScore')"></span></div>
					<div class="echartScore">						
							<div class="time-graph">
								<canvas id="country1" width="160" height="160"></canvas>
							</div>						
					</div>
				</div>
				<div class="right">
					<div class="name"><span v-text="$t('page.scorePage.impactScoreInfo')"></span></div>
					<div class="chartInfo">
						<ul class="inoflist">
							<li v-for="(item,index) in listscore" :key="index">
								<div class="infoleft">
									<span v-text="item.name"></span>
								</div>
								<div class="inforight">
									<div class="num" :style="{width:item.val+'%'}">
										<div><span v-text="item.val"></span></div>
										<div><i class="numicon"></i></div>
									</div>
									<div class="stepBox">
										<div :class="'step'+n" v-for="n in 5" :key="n"></div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--echart2-->
			<div class="flex-echart">
				<div class="left">
					<div class="name"><span v-text="$t('page.scorePage.impactLevel')"></span></div>
					<div class="time-graph">
						<div id="myChart" :style="{width: '200px', height: '200px'}"></div>
					</div>
					<div class="echartScore">
						
					</div>
				</div>
				<div class="right">
					<div class="chartInfo">
						<ul class="inoflist">
							<li v-for="(item,index) in listlevel" :key="index">
								<div class="infoleft">
									<span v-text="item.name"></span>
								</div>
								<div class="inforight">
									<div class="num" :style="{width:item.val+'%'}">
										<div><span v-text="item.val"></span></div>
										<div><i class="numicon"></i></div>
									</div>
									<div class="stepBox">
										<div :class="'step'+n" v-for="n in 5" :key="n"></div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--Table-->
		<div class="scoretable">
			<div class="title">
				<h3 v-text="$t('page.scorePage.tbtitle')" />
			</div>
			<div class="tablelist">
				<ul class="">
					<li class="head">
						<div class="item name">
							<span>Mentions</span>
						</div>
						<div class="item">
							<span>Country</span>
						</div>
						<div class="item">
							<span>Fabric</span>
						</div>
						<div class="item btnbox">
							<span>Fabric</span>
						</div>
					</li>
					<li class="t-content" v-for="(item,index) in tableList" :key="index">
						<div class="item name">
							<div class="tdcontent">
								<div class="tdname" v-text="item.name"></div>
								<div class="tddate" v-text="item.date"></div>
							</div>
						</div>
						<div class="item">
							<div class="tditem" v-text="item.country"></div>
						</div>
						<div class="item">
							<div class="tditem" v-text="item.fabric"></div>
						</div>
						<div class="item btnbox">
							<div class="tdbtn" v-if="item.tagjeans==1"><span>Jeans</span></div>
							<div class="tdbtn" v-if="item.tagsocial==1"><span>Social</span></div>
							<div class="tdbtn" v-if="item.tagslavery==1"><span>Slavery</span></div>
							<div class="tdbtn" v-if="item.taglabour==1"><span>Labour</span></div>
							<div class="tdbtn" v-if="item.tagsweatshop==1"><span>Sweatshop</span></div>
							<div class="tdbtn" v-if="item.tagshygenic==1"><span>Shygenic</span></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import drawMain from '../../utils/circleCanvas.js'
import echarts from 'echarts'
export default {
  name: 'assessment',
  data () {
    return {
      cotton:'Cotton PET Blended',
			pre:'',
			multiple:'Multipe Countries',
			popStatus:false,
			options:[
				{value: '1',label: 'China'},
				{value: '2',label: 'USA'},
				{value: '3',label: 'India'},
				{value: '4',label: 'Pakastan'}
			],
			navData:[
				{icon:'co2',num:'13.62',unit:'kg eq/kg',name:'CO2 Emission'},
				{icon:'water',num:'2422',unit:'L/kg',name:'Water Usage'},
				{icon:'waster',num:'4.62',unit:'kg/kg',name:'Waste Generated'},
				{icon:'chemical',num:'1.42',unit:'kg/kg',name:'Chemical Input'},
				{icon:'energy',num:'9.87',unit:'kWh/kg',name:'Energy Consumption'}
			],
			listscore:[
				{name:'Agricultural/Feedstock',val:'37'},
				{name:'Global Warming Potential',val:'50'},
				{name:'Water Consumption',val:'100'},
				{name:'Wastewater/Effluent',val:'54'},
				{name:'Solid Waster Management',val:'0'},
				{name:'Chemical Management',val:'1'},
				{name:'Energy Consumption',val:'13'}
			],
			listlevel:[
				{name:'Textile Production',val:'2'},
				{name:'Spinning',val:'5'},
				{name:'Fabrication',val:'2'},
				{name:'Bleaching & Dyeing',val:'4'},
				{name:'Finishing',val:''}
			],
			tableList:[
				{
					name:'China,LeviStruss and the Long-Simmering Battle Over Labor...',
					date:'7 Jun 2018',
					country:'China',
					fabric:'-',
					tagjeans:1,
					tagsocial:1,
					tagslavery:0,
					taglabour:0,
					tagsweatshop:0,
					tagshygenic:0
				},
				{
					name:'Workers endured long hours,low pay at Chinese factory used by...',
					date:'May 2018',
					country:'China',
					fabric:'Cotton',
					tagjeans:0,
					tagsocial:1,
					tagslavery:1,
					taglabour:0,
					tagsweatshop:0,
					tagshygenic:0
				},
				{
					name:'Secrt footage shows how factory workers in China use...',
					date:'May 2018',
					country:'-',
					fabric:'PET',
					tagjeans:0,
					tagsocial:0,
					tagslavery:0,
					taglabour:1,
					tagsweatshop:1,
					tagshygenic:0
				},
				{
					name:'The Danagers of Polyerter:It’s Simply Not Worth it',
					date:'Apr 2018',
					country:'USA',
					fabric:'-',
					tagjeans:0,
					tagsocial:0,
					tagslavery:1,
					taglabour:0,
					tagsweatshop:0,
					tagshygenic:1
				}
			],
			popData:[
				{
					title:'Cotton Production',
					list:[
						{name:'Agricultural Production',val:'2'},
						{name:'Textile Production',val:'2'}
					]
				},
				{
					title:'PET Production',
					list:[
						{name:'Textile Production',val:'3'}
					]
				},{
					title:'Blending',
					list:[
						{name:'Spinning',val:'1'},
						{name:'Bleaching & Dyeing',val:'1'},
						{name:'Finishing',val:'1'},
						{name:'Country of Destination',val:'1'},
					]	
				}	
			]
    }
  },
	mounted(){
		//获取参数
		if(sessionStorage.getItem('FABRIC')){
			let sessionData,spre='';
			sessionData=JSON.parse(sessionStorage.getItem('FABRIC'))
			if(sessionData){
				sessionData.forEach(item=>{
					spre+='/'+item.value
				})
			}
			let regx=/^\//;
			this.pre=spre.replace(regx,'')
		}
		
		var country1 = document.getElementById("country1");
		drawMain(country1, 22, "#8cce87", "#b2b2b2");
		this.$nextTick(() => {
			this.drawLine()
			
		})
	},
	methods:{
		openCountry(){
			this.popStatus=!this.popStatus
		},
		gotoPage(){
			this.$router.push('/page/comparecountry')
		},
		updatascore(){
		},
		//echarts
		drawLine(){
			// 基于准备好的dom，初始化echarts实例
			document.getElementById('myChart').style.width=200;
			document.getElementById('myChart').style.height=200;
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
			let option = {
					tooltip : {
							show:false,
							formatter: "{a} <br/>{b} : {c}%",
					},
					toolbox: {
						show : false,
						feature: {
								restore: {},
								saveAsImage: {}
						}
					},
					series: [
						{
							name: '业务指标',
							type: 'gauge',
							startAngle: 180,
							endAngle : 0,
							min: 0,                     // 最小值
							max: 100,                   // 最大值
							axisLine: {            // 坐标轴线
									show: true,        // 默认显示，属性show控制显示与否
									lineStyle: {       // 属性lineStyle控制线条样式
											color: [[0.2, '#8cce87'],[0.4, '#c8eec5'],[0.6, '#ffcd6c'],[0.8, '#ff8f2f'],[1, '#ea3232']], 
											
									}
							},
							axisTick: {            // 坐标轴小标记
                show: false,
							},
							splitLine:{
								show: false,
							},
							axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
								show: false,
							},
							detail : {
								show : false,
							},
							title : {
                show : false,
							},
							data: [{value: 50, name: '完成率'}],
						},							
					]
			};
							
			setInterval(function () {
					option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
					myChart.setOption(option, true);
			},2000);
		}	
	},
}
</script>
<style scoped>

</style>
