import axios from 'axios'
import ENDPOINTS from '../configs/api.config'

const baseConfig = {
  timeout: 60000,
  withCredentials: false
}

const defaultHeaders = {
  'Content-Type': 'application/json'
  // 'Accept': 'application/json'
}

export async function GET(baseURL, endpoint, params = '', token = '', option = '') {
  const config = {
    baseURL,
    headers: {
      ...defaultHeaders,
      token: token
    },
    ...baseConfig,
    method: 'get',
    url: ENDPOINTS[endpoint] + option,
    params
  }
  return await axios(config)
}

export async function POST(baseURL, endpoint, data = {}, params = '', token = '', option = '') {
  const config = {
    baseURL,
    headers: {
      ...defaultHeaders,
      authorization: `Bearer ${token}`
    },
    ...baseConfig,
    method: 'post',
    url: ENDPOINTS[endpoint] + option,
    params,
    data: JSON.stringify(data)
  }
  return await axios(config)
}

export async function PUT(baseURL, endpoint, data = {}, params = '', token = '', option = '') {
  const config = {
    baseURL,
    headers: {
      ...defaultHeaders,
      token: token
    },
    ...baseConfig,
    method: 'put',
    url: ENDPOINTS[endpoint] + option,
    params,
    data: JSON.stringify(data)
  }
  return await axios(config)
}

export async function DELETE(baseURL, endpoint, data = {}, params = '', token = '', option = '') {
  const config = {
    baseURL,
    headers: {
      ...defaultHeaders,
      token: token
    },
    ...baseConfig,
    method: 'delete',
    url: ENDPOINTS[endpoint] + option,
    params,
    data: JSON.stringify(data)
  }
  return await axios(config)
}
