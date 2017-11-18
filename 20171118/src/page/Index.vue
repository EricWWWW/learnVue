<template>
<div>
	<Header></Header>
	<div class="article_list">
		<ul>
			<li v-for="i in list">
				<time datetime="2008-02-14">{{$utils.goodTime(i.create_at)}}</time>
				<router-link :to="'/content/'+i.id">
					{{i.title}}
				</router-link>
			</li>
		</ul>
	</div>
	<Footer></Footer>
</div>
</template>

<script>
	import Header from '../components/Header.vue'
	import Footer from '../components/Footer.vue'
    export default {
	    components:{Header,Footer},
	    data(){
	      return {
	          list:[]
	      }
	    },
        created(){
            this.getData();
        },
	    methods:{
            getData(){
                this.$api.get('topics',null,r=>{this.list = r.data})
            }
	    }

    }
</script>

<style>

</style>