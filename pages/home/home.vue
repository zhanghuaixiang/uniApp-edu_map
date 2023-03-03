<template>
	<view class="content">
		<image src="../../static/bg.png"></image>
		<view class="map-area">
			<mpvue-echarts id="main" ref="mapChart" :getEcharts="getEcharts" :onInit="renderMap" />
		</view>
		<view class="bottom">
			菏泽鲁西新区马岭岗镇黄庙小学
		</view>
		<uni-popup ref="popup" background-color="#fff">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view class="title">{{clickData.name}}</view>
				<view class="text">{{clickData.address}}</view>
				<view class="text">{{clickData.time}}</view>
				<view class="text">{{clickData.phone}}</view>
				<view class="buttons">
					<button class="button" @click="navigationHere(clickData)">导航到这</button>
					<button class="button" v-if="clickData.name!='黄庙小学'" @click="clickEvent(clickData)">查看详情</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import * as echarts from '@/static/echarts.min.js';
	import * as mdqJSON from '@/static/mudanqu.json';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	import optionMap from "./options.js"
	export default {
		name: "home",
		data() {
			return {
				echarts,
				forbidden: true,
				clickData: {}
			};
		},
		components: {
			mpvueEcharts
		},
		methods: {
			getEcharts() {
				return this.echarts
			},
			clickEvent(clickData) {
				if(clickData.name=="黄庙小学") return;
				const param = encodeURIComponent(JSON.stringify(clickData))
				uni.navigateTo({
					url: `/pagesA/list/list?param=${param}`
				})
			},
			navigationHere(clickData) {
				wx.openLocation({
					latitude: clickData.coord[1],         // 纬度
					longitude: clickData.coord[0],        // 经度
					name:clickData.name,      // 地址名称
					address:clickData.address,   // 详细地址
					success:function(res){
						console.log('拉起成功了啦',res)
					},
					fail: function (err) {
						console.log('拉起失败啦', err)
					}
				})
			},
			
			renderMap(e) {
				let {
					canvas,
					width,
					height
				} = e;
				echarts.setCanvasCreator(() => canvas);
				const chart = echarts.init(canvas, null, {
					width: width,
					height: height
				});
				echarts.registerMap('mudanqu', mdqJSON);
				canvas.setChart(chart);
				//初始化echarts实例
				chart.setOption(optionMap);
				canvas.setChart(chart);
				let date = new Date().toLocaleDateString();
				const dateArr = date.split("/");
				const newDateArr = dateArr.map(d=>{
					return d.length === 1?`0${d}`:d;
				})
				if(newDateArr.join("") > 20230303) {
					this.forbidden = false;
					chart.on("click", (res)=>{
						const {name} = res;
						console.log(res);
						
						if(res.componentType === "markPoint") {
							this.$parent.clickData = res.data
							this.$parent.$refs.popup.open("bottom")
						}
					})
				}
				
				return chart;
			}
		}
	};
</script>
<style>
	/* page {
		height: 100%
	} */
</style>
<style scoped lang="scss">
	image {
		height: 100vh;
		width: 100%;
	}

	.content {
		height: 100vh;
		overflow-y: hidden
	}

	.map-area {
		width: 750rpx;
		height: 90vh;
		position: absolute;
		left: 50%;
		top: 43%;
		transform: translate(-50%, -50%);
	}
	.box {
		height: 100%;
		width: 100%;
	}
	.bottom {
		position: fixed;
		width: 750rpx;
		text-align: center;
		bottom: 4%;
		color: #fff;
	}
	
	.popup-content {
		padding: 30rpx
	}
	.title {
		font-size: 40rpx;
		font-weight: bold;
	}
	.text {
		font-size: 30rpx;
		margin: 10rpx 0;
	}
	.buttons {
		position: relative;
		height: 60rpx;
		margin-top: 20rpx;
		.button {
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 5px;
			width: 200rpx;
			font-size: 25rpx;
			float: right;
			border-color: rgb(0, 122, 255);
			color: #fff;
			background-color: rgb(0, 122, 255);
			margin-left: 20rpx;
		}
	}
</style>
