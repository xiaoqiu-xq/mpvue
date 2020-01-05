import Vue from 'vue'
import MyDonation from './myDonation.vue'
import '../../../static/css/global.css'

const myDonation = new Vue(MyDonation)

// 挂载当前的页面
myDonation.$mount()