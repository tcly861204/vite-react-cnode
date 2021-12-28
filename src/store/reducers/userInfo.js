import { USERINFO } from '../actionType'

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case USERINFO:
      return action.data
    default:
      return state
  }
}
