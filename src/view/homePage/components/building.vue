<template> 
    <div class="content" @click="cancel()">
        <tip v-show="isShowTip" :styleTip="styleTip"></tip>
        <canvas id="buildFirst" width="200" @click.stop="buildClick($event)"></canvas>
        <p class="build-name">002幢</p>
    </div>
</template>

<script setup>
import { drawCube } from "@/utils/drawCube.js";
import tip from './tip.vue';
import { ref, reactive, onMounted } from "vue";
//是否展示tip
const isShowTip = ref(false)
//tip样式
const styleTip = reactive({top:'0',left:'0'})
//楼层点击事件
const buildClick = (event)=>{
    // console.log('点击了楼层',a);
    styleTip.top = event.clientX
    styleTip.left = event.clientY
    isShowTip.value = true
    console.log(styleTip.top,styleTip.left,'xy');
}
//取消提示框
const cancel = ()=>{
    isShowTip.value = false
}
onMounted(() => {
    var canvas = document.getElementById("buildFirst");
    var ctx = canvas.getContext("2d");
    //长宽
    let cube1 = drawCube(120, 30, "#005195");
    //位置
    ctx.drawImage(cube1, 20, 20);
    let cube2 = drawCube(120, 30, "#005195");
    ctx.drawImage(cube2, 20, 0);
});
</script>
<style lang="less" scoped>
.content{
    position: relative;
    #buildFirst{
        position: absolute;
        top:100px;
        left:250px;
    }
    .build-name{
        position: absolute;
        top:100px;
        left:300px;
        color: white;
    }
}
</style>
