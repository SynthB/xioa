<template>
    <div>
        <HeaderPage v-show="$route.meta.isselected" :fixedtitle="$route.meta.fiedtitle"></HeaderPage>
        <div>
            <router-view></router-view>
        </div>
        <TabberPage></TabberPage>
    </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage'
import TabberPage from '@/components/TabberPage'
export default {
    data(){
        return {
        }
    },
    components: {
        HeaderPage,
        TabberPage
    },
    methods: {
        
    },
    computed: {},
    watch: {},
    mounted(){}
}
</script>

<style lang="less">
    
</style>
