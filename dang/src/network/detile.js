import axios from 'axios'
import {request} from './request'
// export function homeSwiperRequest(){
//   return axios.get("/api/homeSwiper").then((data)=>{
//     console.log(data)
//     return data
//   })
// }

export function detile() {
  return request({
    url:"/api/detile"
  });
}
