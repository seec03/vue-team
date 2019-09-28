import axios from 'axios'
//封装 一个 axios 请求接口的方法
export function get(url){
	return function(params){
		return axios.get(url).then((res)=>{
			if(res.status==200){
				return res.data
			}	
		}).catch((err)=>{
			console.log(err)
		})
	}
}









