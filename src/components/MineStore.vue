<template>
    <div class="store-box">
		<div class="mine-msg">
			<router-link to="">
				<img class="mine-vector" src="../assets/img/noverter.png" alt="" @click="handleclick">
			</router-link>
			<p class="mine-name">临时用户</p>
			<mt-popup v-model="popupVisible" popup-transition="popup-fade" class="tips">正在建设中。。。</mt-popup>
		</div>
		<div class="m-list">
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>我的红包</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>商家代金卷</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>我的地址</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>邀请有奖</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>客服中心</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>帮助和反馈</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
			<router-link to="">
				<div class="list-style" @click="handleclick">
					<img src="../assets/img/gift.png" alt="">
					<p>协议和说明</p>
					<img src="../assets/img/ic_more.png" alt="">
				</div>
			</router-link>
		</div>
		<router-link to="/login">
			<p class="m-islogin">登陆账号</p>
		</router-link>
		
    </div>
</template>

<script>
export default {
	data(){
		return {
			popupVisible: false
		}
	},
	components: {},
	methods: {
		handleclick(){
			this.popupVisible = true;
		},
	},
	computed: {},
	watch: {},
	mounted(){}
}
</script>

<style lang='less'>
	.store-box{
		padding-bottom: 0.65rem;
	}
	.mine-msg{
		position: relative;
		width: 100%;
		height: 1.5rem;
		background-image: linear-gradient(to top,rgb(240, 176, 176) 50%,rgb(144, 151, 135) 50%);
		margin-bottom: 0.15rem;
		.mine-vector{
			position: absolute;
			left: 0.3rem;
			top: 0.25rem;
			width:	1rem;
			height: 1rem;
		}
		.mine-name{
			position: absolute;
			font-size: 0.2rem;
			font-weight: bold;
			left: 1.5rem;
			top: 0.5rem;
		}
		.tips{
			width: 3rem;
			height: 0.5rem;
			font-size: 0.2rem;
			line-height: 0.5rem;
			text-align: center;
			border-radius: 0.05rem;
			font-weight: bold;
		}
	}
	.m-list{
		margin-bottom: 0.2rem;
		.list-style{
			position: relative;
			width: 100%;
			height: 0.4rem;
			background: #fff;
			border-bottom: 1px solid #ccc;
			color: #222;
			> p {
				position: absolute;
				left: 0.5rem;
				top: 0.1rem;
				font-size: 0.16rem;
			}
			> img:first-child{
				position: absolute;
				left: 0.15rem;
				top: 0.1rem;
				height: 0.2rem;
				width: 0.2rem;
			}
			> img:last-child{
				position: absolute;
				top: 0.1rem;
				right: 0.05rem;
				height: 0.2rem;
				width: 0.2rem;
			}
		}
	}
	.m-islogin{
		width: 100%;
		height: 0.4rem;
		background: #fff;
		color: #222;
		line-height: 0.4rem;
		font-size: 0.2rem;
	}
</style>

	