import React, { createContext, useReducer, useContext } from 'react';

const GlobalState = createContext();

const initialState = {
	projects: [
		{
			id: 'bathroom',
			name: 'Bathroom',
			decisionList: [
				{
					id: 'sink',
					name: 'Sink',
					selectedStyle: '1',
					styles: [
						{
							id: '1',
							name: 'Porcelain',
						},
						{
							id: '2',
							name: 'Blue glass',
						},
					],
				},
				{
					id: 'tile',
					name: 'Tile',
					selectedStyle: '2',
					styles: [
						{
							id: '1',
							name: 'Small white squares',
						},
						{
							id: '2',
							name: 'Large black squares',
						},
					],
				},
			],
			ideaList: [],
			budget: {
				max: 10000,
			},
		},
		{
			id: 'kitchen',
			name: 'Kitchen',
			decisionList: [],
			ideaList: [],
			budget: {},
		},
		{
			id: 'patio',
			name: 'Patio',
			decisionList: [],
			ideaList: [],
			budget: {},

		},
		{
			id: 'bedroom',
			name: 'Bedroom',
			decisionList: [],
			ideaList: [],
			budget: {},

		},
		{
			id: 'windows',
			name: 'Windows',
			decisionList: [],
			ideaList: [],
			budget: {},

		},
	],
};

const stateReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);
	return (
		<GlobalState.Provider value={[state, dispatch]}>
			{children}
		</GlobalState.Provider>
	);
}

const useGlobalState = () => {
	const [state, dispatch] = useContext(GlobalState);
	return {
		...state
	}
}

export default useGlobalState;
