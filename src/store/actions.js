/*
通过mutation间接更新state的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_TEST
} from './mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api/index'

import {
  test
} from '../api/test'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 从state中取出数据
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 拿到数据后，调用mutation中的方法，将数据放入state中管理
    console.log('/getAddress', result.data)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  async reqCategorys ({commit}) {
    const result = await reqCategorys()
    // 拿到数据后，调用mutation中的方法，将数据放入state中管理
    console.log('/getCategorys', result.data)
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  async reqShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },

  async reqTest ({commit, state}) {
    const result = await test()
    console.log('/test', result.data)
    commit(RECEIVE_TEST, {test: result.data})
  }
}
