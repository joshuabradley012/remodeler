import React from 'react';
import LinkPanel from './LinkPanel';
import { useRouteMatch } from 'react-router-dom';

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const dashToCamel = (dashedWord) => (
	dashedWord.split('-').map((word, i) => i === 0 ? word : capitalize(word)).join('')
);

const ProjectAction = ({ project, action }) => {
	let match = useRouteMatch();
	let actionKey = dashToCamel(action);
	let actionData = project[actionKey];
	if (actionKey === 'decisionList') {
		let decisionLinks = actionData.map(item => ({
			name: item.name,
			path: `${match.url}/${item.id}`, 
		}));
		return <LinkPanel links={decisionLinks} />
	}
	return <div>{action}</div>
}

export default ProjectAction;
