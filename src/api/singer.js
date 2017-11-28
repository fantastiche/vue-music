import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import {singer} from '../api/api-config'

export function getSingerList() {
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(singer.url, data, options)
}
