import React, { useEffect } from 'react';
import LinkPanel from './LinkPanel';
import useGlobalState from '../contexts/GlobalState';
import initialState from '../contexts/initialState';

const Dashboard = () => {
	const globalState = useGlobalState();

	let projectLinks = Object.entries(globalState.entities.projects)
		.map(([key, project]) => ({
			name: project.name,
			path: `/projects/${project.id}`,
	}));

	useEffect(() => {
		globalState.updateSubNav(initialState.subNavLinks);
	}, []);

	return (
		<>
			<h3>Projects</h3>
			<LinkPanel links={projectLinks} />
		</>
	);
};

export default Dashboard;
