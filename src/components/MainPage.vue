<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/img/main/banner1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/main/banner2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/main/banner3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <ul class="tips-lists">
            <li v-for="(item,index) in hotlist" :key="index">
                <p>编辑推荐</p>
                <router-link :to="'/detail/'+item.lid">
                    <img class="tips-img" v-lazy='require("../assets/img/find/"+item.img)'>
                </router-link>
                <div class="game-msg">
                    <p>{{item.pname}}</p>
                    <p>{{item.msg.substring(0,21)+'...'}}</p>
                </div>
                <div class="game-grade">{{item.grade}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
            hotlist: null
        }
	},
	components: {},
	methods: {},
	computed: {},
	watch: {},
	mounted(){
        var url = `http://192.168.3.9/data/xioalist.php`;
		axios.get(url).then(data=>{
			this.hotlist = data.data.xioahotlist;
		}).catch(err=>{console.log(err)})
    }
}
</script>

<style lang='less'>
/*     image[lazy=loading] {
        width: 40px;
        height: 200px;
        margin: auto;
    } */
    .tips-lists{
        padding-bottom: 0.55rem;
    }
    .mint-swipe{
        margin-top: 0.5rem;
    }
    .tips-lists li{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        // height: 20rem;
        margin: 0.1rem 0;
        border-top: 0.01rem solid #ccc;
        > p{
            font-size: 0.12rem;
            text-align: left;
            padding: 0.05rem 0 0.05rem 0.12rem;
            color: #555;
        }
        .tips-img {
            width: 95%;
            height: 2.5rem;
        }
        > .game-msg > p:first-child{
            font-size: 0.15rem;
            text-align: left;
            padding-left: 0.12rem;
            font-weight: bold;
        }
        > .game-msg> p:nth-child(2){
            font-size: 0.13rem;
            text-align: left;
            padding: 0.02rem 0 0.02rem 0.12rem;
            font-weight: bold;
            color: #555;
        }
        > .game-grade{
            position: absolute;
            bottom: 0.03rem;
            right: 0.03rem;
            font-size: 0.25rem;
            color: #14B9C8;
        }
    }
</style>

	