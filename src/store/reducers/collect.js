import { COLLECT_LIST } from '../actionType'

export const collects = (state = [], action) => {
  switch (action.type) {
    case COLLECT_LIST:
      return action.data
    default:
      return state
  }
}
