<template>
    <div class="reg-box">
        <div class="reg-content">
            <div class="teg-title">
                <p>欢迎登陆</p>
                <p>欢迎来到XIOA</p>
            </div>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <router-link to='/register'><p class="reg-gologin">没有账号,去注册>>></p></router-link>
            <mt-popup class="login-tit" v-model="popupVisible" popup-transition="popup-fade">{{title}}</mt-popup>
            <mt-button class="reg-submit" type='danger' size="large" @click.native="handleclick">登陆</mt-button>
            <mt-button class="reg-back" type='primary' size="large" @click.native="handleback">返回</mt-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data:function(){
        return {
            username: '',
            password: '',
            popupVisible: false,
            title: ''
        }
    },
    components: {},
    methods: {
        handleclick:function(){
            var url = `http://192.168.3.9/data/login.php?uname=${this.username}&upwd=${this.password}`;
  
            axios.get(url).then(data=>{
                let msg = data.data.msg;
                if(data.data.code == 1){
                    var uid = data.data.uid;
                    var uname = data.data.uname;
                    if(!window.localStorage){
                            alert("浏览器不支持localstorage");
                    }else{
                            var storage=window.sessionStorage;
                            storage.setItem("user",uname);
                            storage.setItem("uid",uid);
                        } 
                    this.$router.push('/home');
                }else{
                     this.popupVisible = true;
                    this.title = msg;
                }
            }).catch(err=>{
                console.log(err)
            }) 
        },
        handleback(){
            this.$router.go(-1);
        }
    },
    computed: {},
    watch: {},
    mounted: function(){}
}
</script>

<style lang='less' scoped>

    .reg-box{
        padding: 0.1rem;
        > .reg-content{
            background: #fff;
            box-shadow: 0 0 0.2rem #999; 
            padding: 0.1rem;
            > .teg-title{
                margin-bottom: 0.2rem;
                p:first-child {
                    font-size: 0.2rem;
                    font-weight: bold;
                    margin-top: 0.1rem;
                }
                p:last-child{
                    font-size: 0.3rem;
                    font-weight: bold;
                    color: #14B9C8;
                    margin: 1rem 0 0.5rem 0;
                    text-shadow: 0 0 0.05rem #0f0;
                }
            }
            .reg-gologin{
                width: 100%;
                text-align: right;
            }
            .login-tit{
                width: 3rem;
                height: 0.5rem;
                font-size: 0.2rem;
                line-height: 0.5rem;
                text-align: center;
                border-radius: 0.05rem;
            }
            > .reg-submit{
                margin-top: 0.2rem;
                margin-bottom: 0.05rem;
            }
            > .reg-back{
                margin-bottom: 1rem;
            }
        }
    }

</style>



