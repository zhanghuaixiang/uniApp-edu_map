<template>
	<view class="list">
		<view class="box">
			<view class="title">
				{{dataObj.name}}
			</view>
			<view class="content">
				<view class="imagebox">
					<image :src="dataObj.imagePath"></image>
				</view>
				<view class="h5">
					基本信息
				</view>
				<view class="basic_info">
					<view >{{dataObj.address}}</view>
					<view >{{dataObj.time}}</view>
					<view>{{dataObj.phone}}</view> 
				</view>
				<view class="h5">
					基地介绍
				</view>
				<view class="text">
					{{dataObj.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataObj: {}
			};
		},
		onLoad(options) {
			this.dataObj = JSON.parse(decodeURIComponent(options.param));
		}
	}
</script>

<style lang="scss">
.list {
	background-color: rgb(255,248,215);
	width: 750rpx;
	padding: 20px 0;
	box-sizing: border-box;
	min-height: 100vh;
	.box {
		.title {
			background-color: rgb(239,75,75);
			height: 40px;
			line-height: 40px;
			text-align: center;
			width: 70%;
			margin: 0px auto 40rpx;
			color: #fff;
		}
		.content {
			width: 90%;
			background-color: #fff;
			padding: 20rpx;
			box-sizing: border-box;
			margin: 0 auto;
			.imagebox {
				height: 400rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.basic_info {
				margin: 20rpx 0;
				font-size: 31rpx;
				line-height: 1.5em;
			}
			.h5 {
				font-size: 35rpx;
				font-weight: bold;
				margin-top: 25rpx;
				border-left: 10rpx solid rgb(239,75,75);;
				padding-left: 10rpx;
			}
			.text {
				text-indent: 2em;
				line-height: 1.5em;
				margin-top: 20rpx;
				font-size: 30rpx;
			}
		}
	}
	
}
</style>
