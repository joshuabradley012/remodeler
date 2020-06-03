import React from 'react';
import classNames from 'classnames';
import './scss/app.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import {
	Col,
	Container,
	Nav,
	Navbar,
	Row,
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

const Test = () => <div>test</div>;

const Panel = ({ className, ...props }) => (
	<div className={classNames(className, 'panel')} {...props} />
);

const ProjectList = ({ list }) => (
	<Panel>
		{list.map((item, i) => (
			<Link className="panel__row--link" to={'/projects/' + item.id} key={i}>
				<div>{item.name}</div>
			</Link>
		))}
	</Panel>
);

const Dashboard = () => (
	<>
		<h3>Projects</h3>		
		<ProjectList list={DATA.projects} />
	</>
);

const DecisionList = ({ list }) => (
	<Panel>
		{list.map((item, i) => (
			<div className="panel__row" key={i}>{item.name}</div>	
		))}
	</Panel>
);

const findProject = id => DATA.projects.find(project => project.id === id);

const Project = () => {
	let { id, action } = useParams();
	let match = useRouteMatch();
	let project = findProject(id); 
	if (!project) return <h3>Project not found!</h3>;

	return (
		<>
			<h3>{project.name}</h3>
			{ action ?
				<Test />
				:
				<Panel>
					<Link className="panel__row--link" to={`${match.url}/decision-list`}>
						<div>Decision List</div>
					</Link>	
					<Link className="panel__row--link" to={`${match.url}/social-saves`}>
						<div>Social Saves</div>
					</Link>	
					<Link className="panel__row--link" to={`${match.url}/budgeting`}>
						<div>Budgeting</div>
					</Link>	
				</Panel>
			}
		</>
	);
}

const MainNav = ({ className }) => (
	<Nav className={className}>
		<Nav.Link href="#test">Nav placeholder 1</Nav.Link>
		<Nav.Link href="#test">Nav placeholder 2</Nav.Link>
		<Nav.Link href="#test">Nav placeholder 3</Nav.Link>
	</Nav>
);

const App = () => {
	return (
		<Router>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Link className="navbar-brand" to="/">Remodeler</Link>
				<Navbar.Toggle aria-controls="nav toggle" />
				<Navbar.Collapse>
					<MainNav className="d-md-none" />
				</Navbar.Collapse>
			</Navbar>	
			<Container fluid className="main">
				<Row>
					<Col className="sidenav d-none d-md-block">
						<MainNav />
					</Col>
					<Col>
						<Switch>
							<Route path="/projects/:id/:action?" component={Project} />
							<Route exact path="/" component={Dashboard} />
						</Switch>
					</Col>
				</Row>
			</Container>
		</Router>
	)
}

export default App;
