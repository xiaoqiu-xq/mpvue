import Vue from 'vue'
import Me from './me.vue'
import '../../static/css/global.css'

const me = new Vue(Me)

// 挂载当前的页面
me.$mount()