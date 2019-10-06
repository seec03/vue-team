import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios //将axios挂载在Vue实例原型上

// 设置axios请求的token
axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"
//封装 一个 axios 请求接口的方法
export function get(url){
		axios.get(url).then((res)=>{
			console.log(res)
			// return res.data
		}).catch((err)=>{
			console.log(err)
		})
}









