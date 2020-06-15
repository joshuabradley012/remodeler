import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectActions from './ProjectActions';
import useGlobalState from '../contexts/GlobalState';

const Project = () => {
	const globalState = useGlobalState();

	let { id } = useParams();
	let project = globalState.entities.projects[id];
	if (!project) return <h3>Project not found!</h3>;

	return (
		<>
			<h3>{project.name}</h3>
			<ProjectActions actions={project.actions} />
		</>
	);
}

export default Project;
