<template>
	<div class="good">
		123
		<div>
			footer
			<shopCart ref="shopCart" :min-price="seller.minPrice" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice">

			</shopCart>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import shopCart from '../shopCart/shopcart.vue'
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {};
        },
        created() {

        },
        mounted() {

        },
        computed: {},
        methods: {},
        components: {
            shopCart,
        }
    };
</script>
<style lang="less">
</style>
