import React from 'react';
import LinkPanel from './LinkPanel';
import useGlobalState from '../contexts/GlobalState';

const Dashboard = () => {
	let data = useGlobalState();
	let projectLinks = data.projects.map(project => ({
		name: project.name,
		path: `/projects/${project.id}`,
	}));
	return (
		<>
			<h3>Projects</h3>		
			<LinkPanel links={projectLinks} />
		</>
	);
};

export default Dashboard;
