import {get} from './axioshelp.js'
const maindata=get('/static/data.json')
const bokedata=get('/static/boke.json')
const radiodata=get('/static/radio.json')


export {
	maindata,
	bokedata,
	radiodata
}	








