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
		{ id: 'kitchen', name: 'Kitchen' },
		{ id: 'patio', name: 'Patio' },
		{ id: 'bedroom', name: 'Bedroom' },
		{ id: 'windows', name: 'Windows' },
	],
};

const Paper = ({ className, ...props }) => (
	<div className={classNames(className, 'paper')} {...props} />
);

const ProjectList = ({ list }) => (
	<Paper>
		{list.map((item, i) => (
			<Link className="paper__row--link" to={'/project/' + item.id} key={i}>
				<div>{item.name}</div>
			</Link>
		))}
	</Paper>
);

const Dashboard = () => (
	<>
		<h1>Projects</h1>		
		<ProjectList list={DATA.projects} />
	</>
);

const DecisionList = ({ list }) => (
	<Paper>
		{list.map((item, i) => (
			<div className="paper__row" key={i}>{item.name}</div>	
		))}
	</Paper>
);

const findProject = id => DATA.projects.find(project => project.id === id);

const Project = () => {
	let { id } = useParams();
	let project = findProject(id); 
	if (!project) return <h1>Project not found!</h1>;

	return (
		<>
			<h1>{project.name}</h1>
			<DecisionList list={project.decisionList}	/>
		</>
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
					<Route exact path="/">
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}

export default App;
