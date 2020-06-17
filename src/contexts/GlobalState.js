import React, { createContext, useReducer, useContext } from 'react';
import { merge } from 'lodash';
import { normalize } from 'normalizr';
import initialState from './initialState';
import projectSchema from './schema'

const normalizedState = normalize(initialState, projectSchema);

const actionTypes = {
	ADD_PROJECT_ACTION_ITEM: 'ADD_PROJECT_ACTION_ITEM',
}

const GlobalState = createContext();

const addProjectActionItemId = (state, action) => {
	const { payload } = action;
	const { projectId, actionId, id } = payload;

	const projectActionId = `${projectId}-${actionId}`;
	const actionItems = [...state[projectActionId].items];

	const actionItemId = `${actionId}-${id}`;
	actionItems.push(actionItemId);

	return merge({}, state, { [projectActionId]: { items: actionItems } });
}

const addProjectActionItem = (state, action) => {
	const { payload } = action;
	const { actionId, id, name } = payload;

	const item = {
		id: id,
		name: name,
		selectedStyle: null,
		styles: [],
	};

	const actionItemId = `${actionId}-${id}`;
	return merge({}, state, { [actionItemId]: item });
}

const projectActionReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_PROJECT_ACTION_ITEM:
			return addProjectActionItemId(state, action);
		default:
			return state;
	}
}

const projectActionItemReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_PROJECT_ACTION_ITEM:
			return addProjectActionItem(state, action);
		default:
			return state;
	}
}

const stateReducer = (state, action) => {
	const { entities } = state;
	const { actions, items } = entities;

	return {
		...state,
		entities: {
			...entities,
			actions: projectActionReducer(actions, action),
			items: projectActionItemReducer(items, action),
		}
	}
}

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, normalizedState);
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

	return {
		addProjectActionItem,
		...state,
	}
}

export default useGlobalState;
