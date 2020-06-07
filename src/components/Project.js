import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectActions from './ProjectActions';
import useGlobalState from '../contexts/GlobalState';

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const dashToCamel = (dashedWord) => (
	dashedWord.split('-').map(
		(word, i) => i === 0 ? word : capitalize(word)
	).join('')
);

const findProject = id => useGlobalState().projects.find(project => project.id === id);

const Project = () => {
	let { id } = useParams();
	let project = findProject(id); 
	if (!project) return <h3>Project not found!</h3>;

	return (
		<>
			<h3>{project.name}</h3>
			<ProjectActions tabs={project.actions} />
		</>
	);
}

export default Project;
