import * as assert from 'assert'
// Actions
const PATHWAY_LOADING_SUCCESS = 'pathways/pathway/PATHWAY_LOADING_SUCCESS'
const PATHWAY_ADD_NODE = 'pathways/pathway/PATHWAY_ADD_NODE'
const SIDEBAR_CREATE = 'pathways/pathway/SIDEBAR_CREATE'
const SIDEBAR_VIEW_NODE = 'pathways/pathway/SIDEBAR_VIEW_NODE'
const ERROR = 'pathways/pathway/ERROR'
const CHANGE_LOAD_STATE = 'pathways/pathway/CHANGE_LOAD_STATE'

// Action creators
export function changeLoadState (state) {
  assert(state in loadingStateEnum, 'State not in enum')
  return {
    type: CHANGE_LOAD_STATE,
    state
  }
}

export function loadUserPathway () {
  return dispatch => {
    const mockPathway = {
      '9': [{
        course: 'MATH4U',
        grade: 20
      }]
    }

    dispatch({
      type: PATHWAY_LOADING_SUCCESS,
      pathway: mockPathway
    })
  }
}

export function sidebarSwitchToCreate () {
  return { type: SIDEBAR_CREATE }
}

export function sidebarSwitchToViewNode (nodeId) {
  return { type: SIDEBAR_VIEW_NODE, nodeId }
}

export function uploadPathToServer () {
  return async (dispatch, getState) => {
    const state = getState()
    // dispatch(changeLoadState(loadingStateEnum.DURING_RELOAD))
    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json' },
    //   data: JSON.stringify(state.pathway)
    // }
    // const fetchResult = await fetch('/v1/user/pathway', options)
    // if(!fetchResult.ok) {
    //   dispatch({ type: ERROR, message: await fetchResult.text()})
    // }
    dispatch(changeLoadState(loadingStateEnum.AFTER_RELOAD))
  }
}

export function saveNodeToPathway (grade, courses) {
  return async (dispatch) => {
    const event = {
      type: PATHWAY_ADD_NODE,
      grade,
      courses
    }
    dispatch(event)
    try {
      await dispatch(uploadPathToServer())
    } catch (e) {
      return dispatch({ type: ERROR, message: e.message })
    }

    dispatch(sidebarSwitchToViewNode(grade))
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

export const sidebarModeEnum = Object.freeze({
  CREATE: 'create',
  VIEW: 'view',
  NONE: 'none'
})

// Default state
const defaultState = {
  pathway: {
    9: [],
    10: []
  },
  loading: loadingStateEnum.BEFORE_LOAD,
  sidebar: {
    type: sidebarModeEnum.NONE
  },
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case PATHWAY_LOADING_SUCCESS:
      return { ...state, pathway: action.pathway }
    case SIDEBAR_CREATE:
      return { ...state, sidebar: { type: sidebarModeEnum.CREATE } }
    case SIDEBAR_VIEW_NODE:
      return { ...state, sidebar: { type: sidebarModeEnum.VIEW, nodeId: action.nodeId } }
    case PATHWAY_ADD_NODE:
      return { ...state, pathway: { ...state.pathway, [action.grade]: action.courses } }
    case CHANGE_LOAD_STATE:
      return { ...state, loading: action.state }
    case ERROR:
      return { ...state, error: action.message }
    default: return state
  }
}
