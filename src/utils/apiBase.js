/**
 * @Author: PerfectYan
 */

import fetch from './fetch'

import {
  API_DOMAIN,
  _API_DOMAIN_
} from './config'

/**
 * @param {string} action 接口请求地址
 * @param {object} params [params={}]
 */
const fetchApi = (action, params = {}) => {
  let header = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  return fetch('POST', `${API_DOMAIN}/${action}`, params, header)
};

/**
 * @param {string} action 接口请求地址
 * @param {object} params [params={}]
 * @param {object} header [header={}]
 */
const fetchGetApi = (action, params = {}, header = {}) => {
  return fetch('GET', `${API_DOMAIN}/${action}?`, params, header)
};


/**
 * @param {string} action 接口请求地址
 * @param {object} params [params={}]
 * @param {object} header [header={}]
 */

const _fetchGetApi = (action, params = {}, header = {}) => {
  return fetch('GET', `${_API_DOMAIN_}/${action}?`, params, header)
};
export {
  _fetchGetApi,
  fetchGetApi,
  fetchApi
}