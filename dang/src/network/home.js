import axios from 'axios'
import {request} from './request'
// export function homeSwiperRequest(){
//   return axios.get("/api/homeSwiper").then((data)=>{
//     console.log(data)
//     return data
//   })
// }

export function homeSwiperRequest() {
  return request({
    url:"/api/homeSwiper"
  });
}
