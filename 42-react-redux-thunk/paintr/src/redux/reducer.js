import { combineReducers } from 'redux'

const searchTextReducer = (state = "", action) => {
    switch(action.type) {
        case "CHANGE_SEARCH_TEXT":
            return action.value
        default:
            return state
    }
}

const paintingsReducer = (state =[], action) => {
    switch(action.type) {
        case "FETCHED_PAINTINGS":
            return action.paintings
        default:
            return state
    }
}

const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case "LOADING_PAINTINGS":
        return true
      case "LOADED":
        return false
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    searchText: searchTextReducer,
    paintings: paintingsReducer,
    loading: loadingReducer
})

export default rootReducer