import request from '@/utils/request'

export function reqAddress () {
  return request({
    url: '/getAddress',
    method: 'get'
  })
}

export function reqCategorys () {
  return request({
    url: '/getCategory',
    method: 'get'
  })
}

export function reqShops () {
  return request({
    url: '/comments',
    method: 'get'
  })
}
