import axios from './axios'

export function getTaskListByBoardId(worspaceId, boardId) {
  return axios({
    url: `workspaces/:${worspaceId}/boards/:${boardId}`,
    method: 'GET',
  })
}