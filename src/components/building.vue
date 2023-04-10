<template>
  <div class="demo" id="demo" ref="container"></div>
</template>

<script setup>
import { ref, reactive, render, onMounted } from "vue";
// import {MouseMovement} from '../utils/util.js';
import * as THREE from "three";
//导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const container = ref(null);

//实时获取鼠标位置
// const movement = MouseMovement()
// console.log(movement.w,movement.h);

//1.创建场景
const scene = new THREE.Scene();
//2.创建相机
//透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 3, 7);
scene.add(camera);

//添加物体
//创建第几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// cubeGeometry.position.set(0, 0, 10);
// 网格基础材质需要灯光
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
// cubeGeometry.position.set(0, 0, 10);
// 网格基础材质需要灯光
const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x049ef4 });
// const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x049ef4 });
//根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0.5, 0)
cube.userData.userData = {id:1}
const cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
cube2.position.set(2, 0.5, 0)
cube2.userData.userData = {id:2}

//通过鼠标点击获取物体
let mouse = new THREE.Vector2()
let raycaster = new THREE.Raycaster()
const onmodelclick = (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // let intersects = raycaster.intersectObjects(meshArray, true);
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
        //点击到的第一个物体
        let selectObj = intersects[0].object;
        console.log(selectObj);
        selectObj.material.color.set(0xff0000);
    }
  // console.log(intersects,'点击的');
  //在计算的射线上的模型全部变红
  // for (var i = 0; i < intersects.length; i++) {
  //     intersects[i].object.material.color.set(0xff0000);
  // }
  //点击的第一个模型变红
  // console.log(intersects[0],'模型');
  
}

//建的楼层
// let level = 2
// let levelColor = [new THREE.MeshBasicMaterial({ color: 0xffff00 }),new THREE.MeshBasicMaterial({ color: 0x049ef4 })]
// let levelCube = [new THREE.BoxGeometry(1,1,0.5),new THREE.BoxGeometry(1,1,0.5)]
// console.log(levelColor,'color');
// //将物体添加到组中
// const group = new THREE.Group()
// const addMesh = ()=>{
//   for(let i=0;i<=level;i++){
//     const demo = new THREE.Mesh(levelCube[i],levelColor[i]);
//     demo.position.set(0,i+0.5,0)
//     demo.userData.userData = {id:i}
//     // console.log(demo,'demo');
//     // return demo
//     group.add(demo)
//   }
// }
// // console.log(addMesh(),'便利对象');
// // group.add(cube1)
// addMesh()
// scene.add(group);
scene.add(cube)
scene.add(cube2)
//初始化渲染器
const renderer = new THREE.WebGLRenderer();
//设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

// scene.background

//控制器
const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any mnual changes to the camera's transform

controls.update();

//添加灯光
const light1 = new THREE.DirectionalLight(0xffffff, 1)
light1.position.set(0, 0, 10)
scene.add(light1)
const light2 = new THREE.DirectionalLight(0xffffff, 1)
light2.position.set(0, 10, 10)
scene.add(light2)
const light3 = new THREE.DirectionalLight(0xffffff, 1)
light3.position.set(0, -10, 10)
scene.add(light3)

const animate = () => {
  requestAnimationFrame(animate);
  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  renderer.render(scene, camera);
};

//给网格添加地网格线
const floorMat = new THREE.MeshStandardMaterial({
  color: 0xa9a9a9, // 材质的颜色
});
const floorGeometry = new THREE.BoxGeometry(300, 300, 0.01, 1, 1, 1);
const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
floorMesh.receiveShadow = true;
floorMesh.rotation.x = -Math.PI / 2.0;
scene.add(floorMesh);
onMounted(() => {
  animate();
  container.value.appendChild(renderer.domElement);
  //给场景添加光效
  scene.background = new THREE.Color('#ccc')
  scene.environment = new THREE.Color('#ccc')
  window.addEventListener("click", onmodelclick);
});
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: #fff;
}
</style>
