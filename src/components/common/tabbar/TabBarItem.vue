<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    动态绑定style获取颜色-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    //在父类.vue设置path  activeColor
    path:String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      //route和router的区别
      //route是当前哪个路由最活跃就是那个对象
      //
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      //push可以返回上一个页面 replace不能返回上一个页面
      // this.$router.replace(this.path)
      this.$router.push(this.path)

    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: red;
}
</style>
