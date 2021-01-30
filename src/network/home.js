import { mainRequset } from "./request";

export function homeInitRequest() {
  return mainRequset(
    {
      url: "/home/multidata"
    }
  )
}
export function getHomeGoods(type,page){
  return mainRequset(
    {
      url:"home/data",
      params:{
        type,
        page
      }
    }
  )
}
