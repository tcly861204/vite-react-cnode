import { MESSAGES, MARK_ONE, IS_LOADED } from '../actionType'
export const messages = (
  state = {
    isLoaded: false,
    list: [],
  },
  action
) => {
  let index = -1
  switch (action.type) {
    case MESSAGES:
      return {
        ...state,
        list: [
          ...action.data.hasnot_read_messages,
          ...action.data.has_read_messages,
        ],
      }
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.loaded,
      }
    case MARK_ONE:
      index = state.list.findIndex((item) => {
        return item.id === action.id
      })
      if (index >= 0) {
        state.list[index].has_read = true
      }
      return {
        ...state,
      }
    default:
      return state
  }
}
