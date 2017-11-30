import * as assert from 'assert'
import engineeringPathway from './Engineering'

// Actions
const PATHWAY_LOADING_SUCCESS = 'pathways/jobpathway/PATHWAY_LOADING_SUCCESS'
const ERROR = 'pathways/jobpathway/ERROR'
const CHANGE_LOAD_STATE = 'pathways/jobpathway/CHANGE_LOAD_STATE'

// Action creators
export function changeLoadState (state) {
  assert(state in loadingStateEnum, 'State not in enum')
  return {
    type: CHANGE_LOAD_STATE,
    state
  }
}

export function loadPathways () {
  return async dispatch => {
    try {
      const response = await fetch('/api/v1/pathways')
      const data = await response.json()

      if (response.ok) {
        console.log(data)
        dispatch({
          type: PATHWAY_LOADING_SUCCESS,
          pathways: data
        })
      } else {
        console.log('Could not load pathways')
        throw new Error('Could not load pathways')
      }
    } catch (e) {

    }
  }
}

// Enums
export const loadingStateEnum = Object.freeze({
  BEFORE_LOAD: 'BEFORE_LOAD',
  DURING_LOAD: 'DURING_LOAD',
  AFTER_LOAD: 'AFTER_LOAD',
  FAILED_LOAD: 'FAILED_LOAD',
  DURING_RELOAD: 'DURING_RELOAD',
  AFTER_RELOAD: 'AFTER_RELOAD',
  FAILED_RELOAD: 'FAILED_RELOAD'
})

export const screenEnum = Object.freeze({
  SEARCH_SCREEN: 'SEARCH_SCREEN',
  DIFF_SCREEN: 'DIFF_SCREEN'
})

// Default state
const defaultState = {
  pathways: engineeringPathway,
  loading: loadingStateEnum.BEFORE_LOAD,
  selectedPathway: null,
  selectedNode: null,
  screen: screenEnum.DIFF_SCREEN,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case PATHWAY_LOADING_SUCCESS:
      return { ...state, pathways: action.pathways }
    case CHANGE_LOAD_STATE:
      return { ...state, loading: action.state }
    default: return state
  }
}
