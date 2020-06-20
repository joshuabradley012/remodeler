import merge from 'lodash/merge';
import actionTypes from './actionTypes';

const addProjectActionItemId = (state, action) => {
	const { payload } = action;
	const { projectId, actionId, id } = payload;

	const projectActionId = `${projectId}-${actionId}`;
	const actionItems = [...state[projectActionId].items];

	const actionItemId = `${actionId}-${id}`;
	actionItems.push(actionItemId);

	return merge({}, state, { [projectActionId]: { items: actionItems } });
}

const projectActionReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_PROJECT_ACTION_ITEM:
			return addProjectActionItemId(state, action);
		default:
			return state;
	}
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

const projectActionItemReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_PROJECT_ACTION_ITEM:
			return addProjectActionItem(state, action);
		default:
			return state;
	}
}

const updateSubNav = (state, action) => {
	return action.payload;
}

const subNavReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_SUB_NAV:
			return updateSubNav(state, action);
		default:
			return state;
	}
}

const rootReducer = (state, action) => {
	const { entities, result } = state;
	const { projectActions, projectItems } = entities;
	const { subNavLinks } = result;

	return {
		...state,
		entities: {
			...entities,
			projectActions: projectActionReducer(projectActions, action),
			projectItems: projectActionItemReducer(projectItems, action),
		},
		result: {
			...result,
			subNavLinks: subNavReducer(subNavLinks, action),
		},
	}
}

export default rootReducer;
