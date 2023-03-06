import getMarkPoints from "../../static/markPoints.js"
export default () => ({
	tooltip: {
		trigger: 'none',
		formatter: '{b}: {c}mg/m³'
	},
	//左侧小导航图标
	visualMap: {
		show: false
	},
	geo: {
		map: 'mudanqu',
		//中心点(经纬度)
		// center: [115.5042, 35.23046],
		//缩放比例
		zoom: 1.2,
		scale: true,
		// aspectScale: 1,
		// scaleLimit: {
		// 	min: 0.5,
		// 	max: 3
		// },
		label: {
			show: false,
			textStyle: {
				color: '#00557f',
				fontWeight: 100,
				fontSize: 9
			},
			emphasis: {
				show: false,
				areaColor: "yellow",
			}
		},
		itemStyle: {
			normal: {
				textStyle: {
					color: '#fff'
				},
				areaColor: '#B9D98E', //默认区块颜色
				borderColor: '#fff', //区块描边颜色
				borderWidth: 1.5 //区块描边颜色
			},
			emphasis: {
				areaColor: '#B9D98E' //鼠标划过区块的颜色
			}
		},
		// regions: [{
		// 	name: "牡丹区",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#FEDC71",
		// 			// areaColor: "#0f0",
		// 		}
		// 	}
		// }, {
		// 	name: "定陶区",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#B9D98E",
		// 		}
		// 	}
		// }, {
		// 	name: "鄄城县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#F4B156",
		// 		}
		// 	}
		// }, {
		// 	name: "郓城县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#81CCCE",
		// 		}
		// 	}
		// }, {
		// 	name: "曹县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#F4B156",
		// 		}
		// 	}
		// }, {
		// 	name: "单县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#EDED93",
		// 		}
		// 	}
		// }, {
		// 	name: "巨野县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#F4B156",
		// 		}
		// 	}
		// }, {
		// 	name: "成武县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#81CCCE",
		// 		}
		// 	}
		// }, {
		// 	name: "东明县",
		// 	itemStyle: {
		// 		normal: {
		// 			areaColor: "#81CCCE",
		// 		}
		// 	}
		// }]
	},
	//配置属性
	series: {
		// type: 'map',
		type: 'effectScatter',
		coordinateSystem: 'geo',
		mapType: 'heze',
		label: {
			normal: {
				show: false
			},
			emphasis: {
				textStyle: {
					color: '#fff'
				}
			}
		},
		animation: true,
		data: [
			// {
			// 	name: '牡丹区',
			// 	value: 20
			// },
			// {
			// 	name: '定陶区',
			// 	value: 20
			// },
			// {
			// 	name: '鄄城县',
			// 	value: 20
			// },
			// {
			// 	name: '东明县',
			// 	value: 20
			// },
			// {
			// 	name: '郓城县',
			// 	value: 20
			// },
			// {
			// 	name: '曹县',
			// 	value: 20
			// },
			// {
			// 	name: '单县',
			// 	value: 20
			// },
			// {
			// 	name: '巨野县',
			// 	value: 20
			// },
			// {
			// 	name: '成武县',
			// 	value: 20
			// }
		], //数据
		markPoint: {
			//自定义图片的 大小
			symbolSize: [30, 30],
			//自定义图片的 路径
			symbol: "circle",
			// symbolRotate: 180,
			label: {
				show: true,
				position: "inside",
				distance: 2,
				fontSize: 9,
				color: "#fff"
			},
			emphasis: {
				show: false
			},
			itemStyle: {
				normal: {
					color: "#00557f"
				}
			},
			data: [...getMarkPoints().map((item, i)=>{
				item.value = i+1;
				return item
			}),{
				symbol: "pin",
				symbolSize: [20, 20],
				name: "黄庙小学",
				coord: [115.305432, 35.187176],
				value: "黄庙小学",
				address: "菏泽市牡丹区马岭岗镇",
				label: {
					position: "right",
					color: "red",
					fontSize: 11
				},
				itemStyle: {
					normal: {
						color: "red"
					}
				}
			}]
		}
	}
})
