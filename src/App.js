import React from 'react';
import classNames from 'classnames';
import './scss/app.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
import {
	Container,
} from 'react-bootstrap';

const DATA = {
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
							id: '1'.
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
		{ id: 'kitchen', name: 'Kitchen' },
		{ id: 'patio', name: 'Patio' },
		{ id: 'bedroom', name: 'Bedroom' },
		{ id: 'windows', name: 'Windows' },
	],
};

const Paper = ({ className, ...props }) => (
	<div className={classNames(className, 'paper')} {...props} />
);

const Projects = ({ projects }) => (
	<>
		<h1>Projects</h1>
		<Paper>
			{projects.map((project, i) => (
				<Link className="paper__row--link" to={'/project/' + project.id} key={i}>
					<div>{project.name}</div>
				</Link>
			))}
		</Paper>
	</>
);

const Directory = () => <Projects projects={DATA.projects} />;

const find = id => DATA.projects.find(project => project.id === id);

const Project = () => {
	let { id } = useParams();
	let project = find(id); 
	return (
		project
			? <h1>{project.name}</h1>
			: <h1>Project not found!</h1>
	);
}

const App = () => {
	return (
		<Container className="main">
			<Router>
				<Switch>
					<Route path="/project/:id">
						<Project />
					</Route>
					<Route path="/">
						<Directory />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}

export default App;
