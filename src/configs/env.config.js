const env = import.meta.env.VITE_NODE_ENV || 'dev' // 'dev', 'test', 'prodInt

const dev = {
  baseURL: import.meta.env.VITE_DEV_BASEURL,
  idTokenKey: import.meta.env.VITE_DEV_IDTOKENKEY
}

export default dev
