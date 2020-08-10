import merge from 'lodash/merge';
import actionTypes from './actionTypes';

const addProjectItemId = (state, action) => {
  const { payload } = action;
  const { projectId, id } = payload;

  const itemId = `${projectId}-${id}`;
  const itemIds = [...state[projectId].items];
  itemIds.push(itemId);

  return merge({}, state, { [projectId]: { items: itemIds } });
}

const projectReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT_ACTION_ITEM:
      return addProjectItemId(state, action);
    default:
      return state;
  }
}

const addProjectItem = (state, action) => {
  const { payload } = action;
  const { projectId, id, name } = payload;

  const item = {
    id: id,
    name: name,
    selectedStyle: null,
    styles: [],
  };

  const itemId = `${projectId}-${id}`;
  return merge({}, state, { [itemId]: item });
}

const projectItemReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT_ACTION_ITEM:
      return addProjectItem(state, action);
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
  const { projects, items } = entities;
  const { subNavLinks } = result;

  return {
    ...state,
    entities: {
      ...entities,
      projects: projectReducer(projects, action),
      items: projectItemReducer(items, action),
    },
    result: {
      ...result,
      subNavLinks: subNavReducer(subNavLinks, action),
    },
  }
}

export default rootReducer;
