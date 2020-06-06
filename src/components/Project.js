import React from 'react';
import {
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import LinkPanel from './LinkPanel';
import ProjectAction from './ProjectAction';
import useGlobalState from '../contexts/GlobalState';

const findProject = id => useGlobalState().projects.find(project => project.id === id);

const Project = () => {
	let { id, action } = useParams();
	let match = useRouteMatch();
	let project = findProject(id); 
	if (!project) return <h3>Project not found!</h3>;

	let actionLinks = [
		{ name: 'Decision List', path: `${match.url}/decision-list` },
		{ name: 'Social Saves', path: `${match.url}/social-saves` },
		{ name: 'Budget', path: `${match.url}/budget` },
	];

	return (
		<>
			<h3>{project.name}</h3>
			{action ?
				<ProjectAction project={project} action={action} />
				:
				<LinkPanel links={actionLinks} />
			}
		</>
	);
}

export default Project;
