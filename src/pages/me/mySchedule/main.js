import Vue from 'vue'
import MySchedule from './mySchedule.vue'
import '../../../static/css/global.css'

const mySchedule = new Vue(MySchedule)

// 挂载当前的页面
mySchedule.$mount()