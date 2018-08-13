<template>
  <div class="scoreBox">
		<div class="shead">
			<div class="shead-left">
				<span>Pure Conventional Cotton</span>
			</div>
			<div class="shead-right">
				<div class="btn">
					<span @click="gopage">New Selection</span>
				</div>
			</div>	
		</div>
		<!--图表-->
		<div class="chartshow">
			<div class="flex-echart">
				<div class="left pre-5">
					<div class="name"><span>Country Selection 1</span></div>
					<div class="canvasBar">
						<div class="time-graph">
							<canvas id="country1" width="160" height="160"></canvas>
						</div>						
					</div>
					<!--table-->
					<div class="shortTable">
						<ul>
							<li class="head">
								<div class="itme-xd">
									<span>Production Stage</span>
								</div>
								<div class="itme-xd">
									<span>Select Country</span>
								</div>
							</li>
							<li v-for="(item,index) in listA" :key="index">
								<div class="itme-xd">
									<span v-text="item.name"></span>
								</div>
								<div class="itme-xd">
									<span class="inText" v-text="item.text"></span>
								</div>
							</li>
						</ul>	
					</div>
					<!--tableEND-->
				</div>
				<div class="right pre-5">
					<div class="name"><span>Country Selection 2</span></div>
					<div class="canvasBar">
						<div class="time-graph">
							<canvas id="country2" width="160" height="160"></canvas>
						</div>
					</div>
					<!--table-->
					<div class="shortTable">
						<ul>
							<li class="head">
								<div class="itme-xd">
									<span>Production Stage</span>
								</div>
								<div class="itme-xd">
									<span>Select Country</span>
								</div>
							</li>
							<li v-for="(item,index) in listA" :key="index">
								<div class="itme-xd">
									<span v-text="item.name"></span>
								</div>
								<div class="itme-xd">
									<span class="inText" v-text="item.text"></span>
								</div>
							</li>
						</ul>	
					</div>
					<!--tableEND-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import drawMain from '../../utils/circleCanvas.js'
export default {
  name: 'assessment',
  data () {
    return {
			listA:[
				{name:'Agricultural Production',text:'USA'},
				{name:'Textile Production',text:'China'},
				{name:'Spinning',text:'China'},
				{name:'Weaving',text:'China'},
				{name:'Bleaching & Dyeing',text:'China'},
				{name:'Finishing',text:'China'}
			],
			listB:[
				{name:'Agricultural Production',text:'China'},
				{name:'Textile Production',text:'China'},
				{name:'Spinning',text:'China'},
				{name:'Weaving',text:'USA'},
				{name:'Bleaching & Dyeing',text:'USA'},
				{name:'Finishing',text:'USA'}
			],
			
    }
  },
	mounted(){
		var country1 = document.getElementById("country1");
		drawMain(country1, 22, "#8cce87", "#b2b2b2");

		var country2 = document.getElementById("country2");
		drawMain(country2, 49, "#ff8f2f", "#b2b2b2");
	},
	methods:{
		gopage(){
			this.$router.push('/page/placeOrigin')
		},
		
	},
}
</script>
<style scoped>

</style>
