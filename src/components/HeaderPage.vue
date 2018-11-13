<template>
    <div>
        <mt-header type='error' fixed :title="fixedtitle">
            <router-link to="/register" slot="right">
            <mt-button>去注册</mt-button>
            </router-link>
            <!-- <mt-button  slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
export default {
    props: ['fixedtitle'],
	data(){
		return {}
	},
	components: {},
	methods: {
        
    },
	computed: {},
	watch: {},
	mounted(){}
}
</script>
	