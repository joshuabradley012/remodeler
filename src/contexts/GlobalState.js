import React, { createContext, useReducer, useContext } from 'react';

const GlobalState = createContext();

const initialState = {
	navLinks: [
		{ name: 'Projects', path: '/projects' },
		{ name: 'Jobs', path: '/jobs' },
		{ name: 'Status', path: '/status' },
	],
	subNavLinks: [
		{ name: 'Projects', path: '/projects' },
		{ name: 'Jobs', path: '/jobs' },
		{ name: 'Status', path: '/status' },
	],
	projects: [
		{
			id: 'bathroom',
			name: 'Bathroom',
			actions: [
				{
					id: 'decision-list',
					name: 'Decision List',
					items: [
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
				},
				{
					id: 'social-saves',
					name: 'Social Saves',
					items: [],
				},
				{
					id: 'budget',
					name: 'Budget',
					items: [],
				},
			],
		},
		{
			id: 'kitchen',
			name: 'Kitchen',
			actions: [
				{
					id: 'decision-list',
					name: 'Decision List',
					items: [],
				},
				{
					id: 'social-saves',
					name: 'Social Saves',
					items: [],
				},
				{
					id: 'budget',
					name: 'Budget',
					items: [],
				},
			],
		},
		{
			id: 'patio',
			name: 'Patio',
			actions: [
				{
					id: 'decision-list',
					name: 'Decision List',
					items: [],
				},
				{
					id: 'social-saves',
					name: 'Social Saves',
					items: [],
				},
				{
					id: 'budget',
					name: 'Budget',
					items: [],
				},
			],
		},
		{
			id: 'bedroom',
			name: 'Bedroom',
			actions: [
				{
					id: 'decision-list',
					name: 'Decision List',
					items: [],
				},
				{
					id: 'social-saves',
					name: 'Social Saves',
					items: [],
				},
				{
					id: 'budget',
					name: 'Budget',
					items: [],
				},
			],
		},
		{
			id: 'windows',
			name: 'Windows',
			actions: [
				{
					id: 'decision-list',
					name: 'Decision List',
					items: [],
				},
				{
					id: 'social-saves',
					name: 'Social Saves',
					items: [],
				},
				{
					id: 'budget',
					name: 'Budget',
					items: [],
				},
			],
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
		...state,
	}
}

export default useGlobalState;

