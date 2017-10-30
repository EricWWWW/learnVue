<template>
    <div class="item" @click="fn()">
        <span v-show="bol" ><slot name="black"></slot></span>
        <span v-show="!bol"  ><slot name="red"></slot></span>
        <br>
        <span :class="{active:!bol}">{{ txt }}</span>
    </div>
</template>

<script>
    export default {
        props:['txt','mark','nowIndex'],
        computed:{
          bol:function(){
              if(this.mark == this.nowIndex){
                  return false;
              }
              return true;
          }
        },
        methods:{
            fn:function(){
                //console.log(this.mark,this.nowIndex);
                this.$emit('change',this.mark);
            }
        }
    }
</script>

<style>
    .item{
        width:20%;
        float:left;
        text-align:center;
        height:100%;
        padding-top:10px;
    }
    .item img{
        width:20px;
    }
    .item span{
        font-size: 12px;
        color:#999;
    }
    .active{
        color:#e8989a !important;
    }

</style>