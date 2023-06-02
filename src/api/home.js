import axios from './axios'

export function getWorkSpaceByUserId(id) {
  return axios({
    url: 'workspaces/:id',
    method: 'GET',
  })
}