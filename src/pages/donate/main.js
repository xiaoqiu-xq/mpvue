import Vue from 'vue'
import Donate from './donate.vue'
import '../../static/css/global.css'

const donate = new Vue(Donate)

// 挂载当前的页面
donate.$mount()