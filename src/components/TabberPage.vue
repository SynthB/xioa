<template>
    <div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item @click.native='handleclick(index)' :class='{}' v-for='(item,index) in tlist' :key='index' :id='index'>
                <img slot="icon" :src="imgs[index]">
                {{item}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
	data(){
		return {
            selected: '首页',
            tlist: ['首页','发现','我的收藏','专属小窝'],
            src: ['/home/main','/home/find','/home/forum','/home/minestore'],
            imgs: [require('../assets/img/home/find_normal.png'),require('../assets/img/home/forum_normal.png'),require('../assets/img/home/home_normal.png'),require('../assets/img/home/my_game_normal.png')],
            normalimg: [require('../assets/img/home/find_normal.png'),require('../assets/img/home/forum_normal.png'),require('../assets/img/home/home_normal.png'),require('../assets/img/home/my_game_normal.png')],
            selectimg: [require('../assets/img/home/find_selected.png'),require('../assets/img/home/forum_selected.png'),require('../assets/img/home/home_selected.png'),require('../assets/img/home/my_game_selected.png')]
        }
	},
	components: {},
	methods: {
        handleclick(index){
            for(var i=0;i<this.normalimg.length;i++){
                if(i == index){
                    this.imgs[index] = this.selectimg[index];
                }else{
                    this.imgs[i] = this.normalimg[i];
                }
            }
            
        }
    },
	computed: {},
	watch: {
        selected(index){
            this.$router.push(this.src[index]);
        }
    },
	mounted(){}
}
</script>
	