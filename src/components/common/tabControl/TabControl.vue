<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         class="tab-control-item"
         :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  font-size: 15px;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
