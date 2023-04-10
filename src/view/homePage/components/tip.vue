<template>
<div class="tip">
    <p>002幢</p>
    <p>平均供温(°C):34</p>
    <p>平均回温(°C):34</p>
    <p>平均流速(°C):0.5</p>
</div>
</template>

<script setup>
// import { ref , reactive } from 'vue'
const props = defineProps({
    styleTip:{
        top:Number,
        left:Number,
    }
})
console.log(props.styleTip.top,'top')
</script>
<style scoped>
.tip{
    color:white;
    height:160px;
    width:160px;
    position:fixed;
    z-index: 9;
    top:30;
    left:660px;
    background-color: #005195;
}
</style>