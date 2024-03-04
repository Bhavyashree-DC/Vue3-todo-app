import  './assets/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import Tabs from './components/Tabs.vue'
import TaskList from './components/TaskList.vue'
import TaskInput from './components/TaskInput.vue'
import TaskDone from './components/TaskDone.vue'
// import Calender from './components/Calender.vue'

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('Tabs',Tabs)
app.component('TaskInput',TaskInput)
app.component('TaskDone',TaskDone)
// app.component('Calender',Calender)
app.config.globalProperties.$TaskList = TaskList;

app.mount('#app')

