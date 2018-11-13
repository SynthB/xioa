<template>
    <div class="forum-box">
		<div v-if="islogin">
  	      	<!-- <mt-search v-model="value"></mt-search> -->
			<div class="item-box" v-for="(item,index) in forumlist" :key="index" >
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
					<span class="item-collect" @click="handleremove(item.lid)">取消收藏</span>
			</div>
		</div>
		<div v-else>
			<div>
				您还没有登陆,是否去
				<router-link to="/login">登陆</router-link>或者
				<router-link to="/register">注册</router-link>
			</div>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			forumlist: null,
			value: '',
			islogin: false
		}
	},
	components: {},
	methods: {
		handleremove(lid){
			var storage=window.sessionStorage;
			var uid = storage.getItem("uid");
			let url = `http://192.168.3.9/data/deletecart.php?p_uid=${uid}&p_cid=${lid}&uid=${uid}`;
			axios.get(url).then(data=>{
				this.forumlist = data.data.data;
			}).catch(err=>{console.log(err)})

		}
	},
	computed: {},
	watch: {},
	mounted(){
		var storage=window.sessionStorage;
		var c=storage.getItem("user");
		var uid = storage.getItem("uid");
		if(!(c == null || c == '')){
			this.islogin = true;
		}
		let url = `http://192.168.3.9/data/xioa-addupdata.php?uid=${uid}`;
        axios.get(url).then(data=>{
			this.forumlist = data.data.data;
        }).catch(err=>{console.log(err)})
	}
}
</script>

<style lang='less' scoped>
	.forum-box{
		margin-top: 0.5rem;
		padding-bottom: 0.55rem;
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
	}
</style>

	