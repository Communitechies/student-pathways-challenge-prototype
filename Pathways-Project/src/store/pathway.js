// Actions
const PATHWAY_LOADING_SUCCESS = 'pathways/users/PATHWAY_LOADING_SUCCESS'
const SIDEBAR_CREATE = 'pathways/pathway/SIDEBAR_CREATE'
const SIDEBAR_VIEW_NODE = 'pathways/pathway/SIDEBAR_VIEW_NODE'


// Action creators
export function loadUserPathway () {
  return dispatch => {
    const mockPathway = []
    dispatch({ type: PATHWAY_LOADING_SUCCESS, pathway: mockPathway })
  }
}

export function sidebarSwitchToCreate () {
  return { type: SIDEBAR_CREATE }
}

export function sidebarSwitchToViewNode (nodeId) {
  return { type: SIDEBAR_VIEW_NODE, nodeId }
}

export function addNodeToPathway (node) {
  
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
  pathway: [],
  loading: loadingStateEnum.BEFORE_LOAD,
  sidebar: {
    type: sidebarModeEnum.NONE
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case PATHWAY_LOADING_SUCCESS:
      return { ...state, pathway: action.pathway }
    case SIDEBAR_CREATE:
      return { ...state, sidebar: { type: sidebarModeEnum.CREATE } }
    case SIDEBAR_VIEW_NODE:
      return { ...state, sidebar: { type: sidebarModeEnum.VIEW, nodeId: action.nodeId } }
    default: return state
  }
}
