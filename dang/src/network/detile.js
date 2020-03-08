import axios from 'axios'
import {request} from './request'


export function detile() {
  return request({
    url:"/api/detile"
  });
}
