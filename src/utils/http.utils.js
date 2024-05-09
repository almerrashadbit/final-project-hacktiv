import axios from 'axios';
import ENDPOINTS from '../configs/api.config';

const baseConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
  withCredentials: false,
};

export function GET(baseURL, endpoint, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'get',
    url: ENDPOINTS[endpoint] + params,
  };
  return axios(config);
}

export function POST(baseURL, endpoint, data = {}, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'post',
    url: ENDPOINTS[endpoint] + params,
    data: JSON.stringify(data),
  };
  return axios(config);
}

export function PUT(baseURL, endpoint, data = {}, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'put',
    url: ENDPOINTS[endpoint] + params,
    data: JSON.stringify(data),
  };
  return axios(config);
}

export function DELETE(baseURL, endpoint, data = {}, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'delete',
    url: ENDPOINTS[endpoint] + params,
    data: JSON.stringify(data),
  };
  return axios(config);
}

export function POST_MULTIPART(
  baseURL, endpoint, params = '', options = {}, files, boundary,
) {
  const config = {
    baseURL,
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    },
    ...options,
    method: 'post',
    url: ENDPOINTS[endpoint] + params,
    data: files,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };
  return axios(config);
}


export function GET_LIST_CLEAN(endpoint, params = '', options = {}) {
  const config = {
    baseURL: env.listClean.url,
    ...baseConfig,
    ...options,
    method: 'get',
    url: `${env.listClean.url}${ENDPOINTS[endpoint]}/${params}`,
    headers: {
      'X-Auth-Token': env.listClean.accessToken,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  };
  return axios(config);
}