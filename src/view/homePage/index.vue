<template>
    <v-scale-screen width="1920" height="1080">
        <div class="home">
            <div class="top">
                <img src="@/assets/title.png" alt="" style="width: 100%;height: 100%;" />
                <p class="top-titile">驾驶仓</p>
            </div>
            <div class="content">
                <div class="left">
                    <div class="frame">
                        <p class="title" style="color:white">浙江省杭州市 晴 19°C 空气 良</p>
                        <div class="data-screening">
                            <!-- <svg t="1680849891306" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1374" width="200" height="200"><path d="M328.832 268.501333a42.666667 42.666667 0 0 0-60.330667 60.330667l181.034667 181.034667-181.034667 180.992a42.666667 42.666667 0 1 0 60.330667 60.373333l211.029333-211.072 0.170667-0.128a42.538667 42.538667 0 0 0 0-60.330667l-0.128-0.128-211.072-211.072z" fill="#ffffff" p-id="1375"></path><path d="M725.333333 256a42.666667 42.666667 0 0 1 42.666667 42.666667v426.666666a42.666667 42.666667 0 1 1-85.333333 0V298.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z" fill="#ffffff" p-id="1376"></path></svg> -->
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">数据总览</span>
                            <div class="sixICon">
                                <div class="sixICon-first">1</div>
                                <div class="sixICon-second">2</div>
                                <div class="sixICon-third">3</div>
                                <div class="sixICon-fourth">4</div>
                                <div class="sixICon-fiveth">5</div>
                                <div class="sixICon-sixth">6</div>
                            </div>
                        </div>
                        <div class="trend">
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">7天气象日能耗趋势图</span>
                            <div id="daycharts"></div>
                        </div>
                        <div class="notice">
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">重要通知</span>
                            <div id="message"></div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="center-title">
                        <div class="Heated">已供热888天</div>
                        <div class="timer">10:00:02</div>
                        <div class="surplus">剩余888天</div>
                    </div>
                    <div class="scene">
                        <building></building>
                    </div>
                </div>
                <div class="right">
                    <div class="frame">
                        <p class="title" style="color:white">2021年01月10日 10:00:02</p>
                        <div class="heat-addition">
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">供热数据总览</span>
                            <div class="three-item">
                                <div class="all1"></div>
                                <div class="all2">
                                    <div class="top"></div>
                                    <div class="bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div class="energy-conservation">
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">节能数据对比</span>
                            <div class="power-chart">
                            </div>
                            <img class="icon-energy" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names-energy" style="color:white">能耗预测</span> 
                            <div class="calculate"></div>
                        </div>
                        <div class="room-temperature">
                            <img class="icon" src="../../assets/inters.png" style="width:20px;height:20px;" alt="" />
                            <span class="names" style="color:white">室温分布</span>
                            <div class="distribution"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-scale-screen>
</template>

<script setup>
import { onMounted } from 'vue';
import VScaleScreen from 'v-scale-screen';
import building from './components/building.vue';
import * as echarts from 'echarts';
onMounted(() => {
    initecharts()
})
const initecharts = () => {
    let myChart = echarts.init(document.getElementById('daycharts'));
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
}
</script>
<style scoped lang="less">
.home {
    width: 1920px;
    height: 1080px;
    background-color: #001941;

    .top {
        width: 100%;
        height: 60px;
        position: relative;

        .top-titile {
            position: absolute;
            top: -10%;
            left: 50%;
            margin-left: -25px;
            color: white;
            font-size: 25px;
        }
    }

    .content {
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 20px;

        .left {
            // flex:1;
            width: 20%;

            // background-color: pink;
            .frame {
                margin: 15px;
                height: 970px;
                border: 3px solid #013057;
                border-radius: 5px;
                display: flex;
                justify-content: space-evenly;
                /* 水平均匀分布 */
                align-items: center;
                /* 垂直居中 */
                flex-direction: column;

                .title {
                    text-align: center;
                }

                .data-screening {
                    width: 300px;
                    height: 300px;
                    position: relative;

                    .icon {
                        position: absolute;
                        top: 10px;
                    }

                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }

                    .sixICon {
                        color: white;
                        position: absolute;
                        top: 35px;
                        display: flex;
                        display: -webkit-flex;
                        flex-wrap: wrap;
                        width: 100%;

                        div {
                            width: 50%;
                            height: 84px;
                            background-color: pink;
                        }
                    }
                }

                .trend {
                    width: 300px;
                    height: 300px;
                    position: relative;

                    .icon {
                        position: absolute;
                        top: 10px;
                    }

                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }

                    #daycharts {
                        position: absolute;
                        top: 40px;
                        // left:20px;
                        width: 100%;
                        height: 240px;
                        background-color: pink;
                    }
                }

                .notice {
                    width: 300px;
                    height: 300px;
                    // background-color: #fff;
                    position: relative;
                    .icon {
                        position: absolute;
                        top: 10px;
                    }

                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }
                    #message {
                        position: absolute;
                        top: 40px;
                        // left:20px;
                        width: 100%;
                        height: 240px;
                        background-color: pink;
                    }

                }
            }
        }

        .center {
            width: 60%;

            // background-color: blue;
            .center-title {
                width: 100%;
                height: 90px;
                // background-color: blue;
                margin-top: 10px;
                display: flex;
                font-size: 40px;
                text-align: center;
                color: white;

                .Heated {
                    flex: 1;
                }

                .timer {
                    flex: 1;
                }

                .surplus {
                    flex: 1;
                }
            }

            .scene {
                // background-color: pink;
                width: 100%;
                height: 50%;
                background-image: url('@/assets/map.png');
                background-size: 100% 100%;
                // transform: scale(1.2); 
            }
        }

        .right {
            width: 20%;

            // background-color: red;
            .frame {
                margin: 15px;
                height: 970px;
                border: 3px solid #003e71;
                border-radius: 5px;
                // display: flex;
                // justify-content: space-evenly;
                /* 水平均匀分布 */
                // align-items: center;
                /* 垂直居中 */
                // flex-direction: column;
                height:100%;
                .title {
                    text-align: center;
                }
                .heat-addition{
                    width: 300px;
                    height: 300px;
                    position: relative;
                    height:22%;
                    .icon{
                        position: absolute;
                        top:10px;
                    }
                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }
                    .three-item{
                        position: absolute;
                        top:35px;
                        display: flex;
                        display: -webkit-flex;
                        flex-wrap: wrap;
                        width: 100%;
                        .all1{
                            width:50%;
                            height:180px;
                            background-color: pink;
                        }
                        .all2{
                            width:50%;
                            height:180px;
                            background-color: pink;
                            .top{
                                width:100%;
                                height:90px;
                                background-color: blue;
                            }
                            .bottom{
                                width:100%;
                                height:90px;
                                background-color: green;
                            }
                        }
                    }  

                }
                .energy-conservation{
                    width: 300px;
                    height: 300px; 
                    position: relative;
                    .icon{
                        position: absolute;
                        top:10px;
                    }
                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }
                    .power-chart{
                        position: absolute;
                        top:35px;
                        display: flex;
                        display: -webkit-flex;
                        flex-wrap: wrap;
                        width: 100%;
                        height:100px;
                        background-color: pink;
                    }
                    .icon-energy{
                        position: absolute;
                        top: 220px;
                        left: 0px;
                    }
                    .names-energy{
                        position: absolute;
                        top: 220px;
                        left: 20px;
                    }
                    .calculate{
                        position: absolute;
                        top: 230px;
                        height:100px;
                        width:100%;
                        background-color: pink;
                        // left: 20px;
                    }
                }
                .room-temperature{
                    width: 300px;
                    height: 300px; 
                    position: relative;
                    .icon{
                        position: absolute;
                        top:10px;
                    }
                    .names {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                    }
                    .distribution{
                        position: absolute;
                        top: 50px;
                        // left: 20px;
                        width:100%;
                        height:60px;
                        background-color: pink;
                    }
                }
            }
        }
    }
}</style>
