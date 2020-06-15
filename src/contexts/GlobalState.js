import React, { createContext, useReducer, useContext } from 'react';
import { normalize } from 'normalizr';
import initialState from './initialState';
import projectSchema from './schema'

const normalizedState = normalize(initialState, projectSchema);

const ADD_PROJECT_ITEM = 'ADD_PROJECT_ITEM';

const GlobalState = createContext();

const stateReducer = (state, action) => {
	switch (action.type) {
		case ADD_PROJECT_ITEM:
			const itemId = `${action.payload.parentId}-${action.payload.id}`;
			const item = {
				id: action.payload.id,
				name: action.payload.name,
				selectedStyle: null,
				styles: [],
			};

			return {
				...state,
				entities: {
					...state.entities,
					items: {
						...state.items,
						[itemId]: item,
					},
				},
			};
		default:
			return state;
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
		dispatch({ type: ADD_PROJECT_ITEM, payload: actionItem })
	);

	return {
		addProjectActionItem,
		...state,
	}
}

export default useGlobalState;
