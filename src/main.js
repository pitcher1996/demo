import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//全局样式
import 'normalize.css/normalize.css'
//gis样式
// import "./Widgets/widgets.css"
import 'vue-cesium/dist/index.css'
import VueCesium from 'vue-cesium'

let app = createApp(App)
app.use(router)
app.use(VueCesium)
app.mount('#app')
