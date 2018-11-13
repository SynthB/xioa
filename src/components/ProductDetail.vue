<template>
    <div style="width: 100%">
        <mt-header fixed title="商品详情">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-popup class="detail-tit" v-model="popupVisible" popup-transition="popup-fade">{{title}}</mt-popup>
        <ul class="detail-box" v-for="(item,index) in listcontent" :key="index">
            <li>
                <img class="img-detail"  :src="require('../assets/img/find/'+item.img)" alt="加载中">
                <p class="d-pname">{{item.pname}}</p>
                <p class="d-grade">{{item.grade}}</p>
            </li>
            <li>
                <mt-button type="primary" size='large' @click.native='handleaddcart'>加入收藏</mt-button>
            </li>
            <li>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">详情</mt-tab-item>
                    <mt-tab-item id="2">评价</mt-tab-item>
                    <mt-tab-item id="3">论坛</mt-tab-item>
                </mt-navbar>

                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <mt-cell class="p-msg" v-for="n in 1" :title="item.msg" :key="n" />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <mt-cell v-for="n in 1" :title="'发开中... '" :key="n" />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        <mt-cell v-for="n in 1" :title="'开发中...'" :key="n" />
                    </mt-tab-container-item>
                </mt-tab-container>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            selected: "1",
            productid: "",
            listcontent: null,
            title: '',
            popupVisible: false
        }
    },
    components: {},
    methods: {
        handleaddcart(){
            var storage = window.sessionStorage;
            var uid = storage.getItem("uid");
            var lid = this.listcontent[0].lid;
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
        this.productid = this.$route.params.id;
        let url = `http://192.168.3.9/data/xioadetail.php?lid=${this.productid}`;
        axios.get(url).then(data=>{
            this.listcontent = data.data.xioaproductdetail;
        }).catch(err=>{console.log(err)})
    }
}
</script>

<style lang='less' scoped>
    .detail-tit{
                width: 3rem;
                height: 0.5rem;
                font-size: 0.2rem;
                line-height: 0.5rem;
                text-align: center;
                border-radius: 0.05rem;
            }
    ul.detail-box {
        width: 100%;
        margin: 0.6rem auto 0;
        // justify-content: center;
         > li {
             position: relative;
             width: 100%;
             margin-bottom: 0.1rem;
            // width: 3rem;
            background: #fff;
            .img-detail{
                width: 3.5rem;
                height: 3.5rem;
                margin-bottom: 0.7rem; 
            }
            .d-pname{
                position: absolute;
                bottom: 0.25rem;
                left: 0.5rem;
                font-size: 0.2rem;
                color: #333;
                font-weight: bold;
            }
            .d-grade{
                position: absolute;
                right: 0.3rem;
                bottom: 0.1rem;
                width: 0.6rem;
                height: 0.6rem;
                font-size: 0.3rem;
                line-height: 0.6rem;
                text-align: center; 
                background: #00c9d5;
                border-radius: 50%; 
                color: #fff;
            }
            .p-msg{
                font-size: 0.13rem;
                text-align: left;
                text-indent: 0.3rem;
                padding-bottom: 0.1rem; 
            }
        }
    }
</style>


