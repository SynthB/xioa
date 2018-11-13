<template>
    <div class="find-box">
        <mt-navbar v-model="selected">
			<mt-tab-item id="1">热门榜</mt-tab-item>
			<mt-tab-item id="2">新品榜</mt-tab-item>
		</mt-navbar>
		<mt-popup class="find-tit" v-model="popupVisible" popup-transition="popup-fade">{{title}}</mt-popup>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1" >
				<div class="item-box" v-for="(item,index) in hotlist" :key="index" >
						<router-link :to="'/detail/'+item.lid">
							<span class="item-rank">{{index+1}}</span>
							<img class="item-img" :src='require("../assets/img/find/"+item.img)' alt="加载中">
							<div class="item-msg">
								<p class="item-tit">{{item.pname}}</p>
								<p class="item-grade">评分: {{item.grade}}</p>
								<div>
									<span v-for="(n,index) in item.pclass.split(',')" :key='index' class="tiem-class">{{n}}</span>
								</div>
							</div>
						</router-link>
						<span class="item-collect" @click="handleadd(item.lid)">收藏</span>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="item-box" v-for="(item,index) in nowlist" :key="index" >
					<router-link :to="'/detail/'+item.lid">
						<span class="item-rank">{{index+1}}</span>
						<img class="item-img" :src='require("../assets/img/find/"+item.img)' alt="加载中">
						<div class="item-msg">
							<p class="item-tit">{{item.pname}}</p>
							<p class="item-grade">评分: {{item.grade}}</p>
							<div>
								<span v-for="(n,index) in item.pclass.split(',')" :key='index' class="tiem-class">{{n}}</span>
							</div>
						</div>
					</router-link>
					<span class="item-collect" @click="handleadd(item.lid)">收藏</span>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
			selected: '1',
			hotlist: null,
			nowlist: null,
			title: '',
            popupVisible: false
		}
	},
	components: {},
	methods: {
		handleadd(lid){
			var storage = window.sessionStorage;
            var uid = storage.getItem("uid");
			let url =   `http://192.168.3.9/data/xioa-addcart.php?p_uid=${uid}&p_cid=${lid}`;
            this.popupVisible = true;
            axios.get(url).then(data=>{
                let msg = data.data.msg;
                 this.title = msg;
            }).catch(err=>{console.log(err)})
		}
	},
	computed: {},
	watch: {},
	mounted(){
		var url = `http://192.168.3.9/data/xioalist.php`;
		axios.get(url).then(data=>{
			this.hotlist = data.data.xioahotlist;
			this.nowlist = data.data.xioanowlist;
		}).catch(err=>{console.log(err)})

	}
}
</script>

<style scoped lang='less'>
	.find-box{
		margin-top: 0.5rem;
		padding-bottom: 0.55rem; 
	}
	.find-tit{
		width: 3rem;
		height: 0.5rem;
		font-size: 0.2rem;
		line-height: 0.5rem;
		text-align: center;
		border-radius: 0.05rem;
	}
	.item-box{
		position: relative;
		background: #fff;
		width: 100%;
		height: 0.7rem;
		padding: 0.1rem 0;
		border-bottom: 1px solid #eee;
		.item-rank{
			position: absolute;
			width: 0.2rem;
			height: 0.2rem;
			left: 0.1rem;
			top: 0.35rem; 
			background: #ffcc25;
			border-radius: 50%;
			line-height: 0.2rem;
			text-align: center;
		}
		.item-img{
			position: absolute;
			left: 0.45rem;
			top: 0.1rem;
			width: 0.7rem;
			height: 0.7rem;
		}
   		.item-msg{
			position: absolute;
			top: 0.1rem;
			left: 1.25rem;
			// width: 0.7rem;
			height: 0.7rem;
			text-align: left;
			.item-tit{
				font-weight: bold;
				font-size: 0.16rem;
				margin-bottom: 0.05rem;
				color: #444;
			}
			.item-grade{
				font-size: 0.13rem;
				color: #14B9C8;
				font-weight: bold;
				margin-bottom: 0.05rem;
			}
			.tiem-class{
				display: inline-block;
				font-size: 0.12rem;
				border: 1px solid #e9e9e9;
				background: #f8f8f8;
				padding: 0.03rem 0.1rem;
				margin-right: 0.07rem;
				border-radius: 0.06rem;
				color: #c2c2c2;
			}
		} 
		.item-collect{
			position: absolute;
			right: 0.1rem;
			bottom: 0.25rem;
			width: 0.7rem;
			height: 0.3rem;
			border-radius: 0.15rem;
			background: #14B9C8;
			line-height: 0.3rem;
			text-align: center;
			color: #fff;
			font-size: 0.14rem;
		} 
	}
	.mint-tab-item.is-selected {
    	margin-bottom: 0.5px;
	}
</style>

	