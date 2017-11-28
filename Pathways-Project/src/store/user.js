// Actions

// Action creators

// Enums
export const loadingState = Object.freeze({
  BEFORE_LOAD: 'BEFORE_LOAD',
  DURING_LOAD: 'DURING_LOAD',
  AFTER_LOAD: 'AFTER_LOAD',
  FAILED_LOAD: 'FAILED_LOAD',
  DURING_RELOAD: 'DURING_RELOAD',
  AFTER_RELOAD: 'AFTER_RELOAD',
  FAILED_RELOAD: 'FAILED_RELOAD'
})

// Default state
const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    default: return state
  }
}
