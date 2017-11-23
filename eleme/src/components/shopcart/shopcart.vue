<template>
  <div>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice: {
            type: Number,
            default: 0
        }
    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
    components: {
    },
	mounted:function(){
        console.log(this.minPrice);
	}
  };
</script>
<style lang="less" f>
</style>
