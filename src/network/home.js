import { homeRequset } from "./request";

export function homeInitRequest() {
  return homeRequset(
    {
      url: "/home/multidata"
    }
  )
}
