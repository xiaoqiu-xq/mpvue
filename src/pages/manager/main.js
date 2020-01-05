import Vue from 'vue'
import Manager from './manager.vue'
import '../../static/css/global.css'

const manager = new Vue(Manager)

// 挂载当前的页面
manager.$mount()