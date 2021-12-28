import { USER_CENTER } from '../actionType'
export const user = (state = {}, action) => {
  switch (action.type) {
    case USER_CENTER:
      return action.data
    default:
      return state
  }
}
