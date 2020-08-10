import React, { createContext, useReducer, useContext } from 'react';
import { normalize } from 'normalizr';
import initialState from './initialState';
import projectSchema from './schema';
import rootReducer from './reducers';
import actionTypes from './actionTypes';

const normalizedState = normalize(initialState, projectSchema);

const GlobalState = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, normalizedState);
  return (
    <GlobalState.Provider value={[state, dispatch]}>
      {children}
    </GlobalState.Provider>
  );
}

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalState);

  const addProjectActionItem = actionItem => (
    dispatch({ type: actionTypes.ADD_PROJECT_ACTION_ITEM, payload: actionItem })
  );

  const updateSubNav = subNavLinks => (
    dispatch({ type: actionTypes.UPDATE_SUB_NAV, payload: subNavLinks })
  );

  return {
    ...state,
    addProjectActionItem,
    updateSubNav,
  }
}

export default useGlobalState;
