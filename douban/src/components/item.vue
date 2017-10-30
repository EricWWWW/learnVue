<template>
    <div class="itemWrap" @click="change" :class="{active : isActive}">
        <span v-show="!isActive">
            <slot name="normal"></slot><br>
        </span>
        <span v-show="isActive">
            <slot name="active"></slot><br>
        </span>
        <span>{{txt}}</span>
    </div>
</template>

<script>

export default {
    props:['txt','index','nowIndex'],
    computed:{
        isActive:function(){
            if(this.index == this.nowIndex){
                return true;
            }
            else{
                return false;
            }
        }
    },
    methods:{
        change:function(){
            this.$emit('trans',this.index).$router.push('/'+this.index);
        }
    }

}

</script>

<style>
.itemWrap{
    width:20%;
    text-align:center;
    float:left;
    font-size: 12px;
    color:#666;
}
    .itemWrap img{
        width:40px;
    }
    .active{
        color:#42bd56;
    }
</style>