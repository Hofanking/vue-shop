import request from '@/utils/request'

export function test () {
  return request({
    url: '/comments',
    method: 'get'
  })
}
