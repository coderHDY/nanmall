import {mainRequset} from "./request";

export function getCategory() {
  return mainRequset({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return mainRequset({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return mainRequset({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
