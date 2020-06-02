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
		<h3>Projects</h3>		
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
	if (!project) return <h3>Project not found!</h3>;

	return (
		<>
			<h3>{project.name}</h3>
			<Paper>
				<Link className="paper__row--link" to={'/project/' + project.id + '/decision-list'}>
					<div>Decision List</div>
				</Link>	
				<Link className="paper__row--link" to={'/project/' + project.id + '/social-saves'}>
					<div>Social Saves</div>
				</Link>	
				<Link className="paper__row--link" to={'/project/' + project.id + '/budgeting'}>
					<div>Budgeting</div>
				</Link>	
			</Paper>
		</>
	);
}

const MainNav = ({ className }) => (
	<Nav className={className}>
		<Nav.Link href="#test">Nav placeholder</Nav.Link>
	</Nav>
);

const Test = () => <div>test</div>;

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
							<Route path="/project/:id" component={Project} />
							<Route exact path="/" component={Dashboard} />
						</Switch>
					</Col>
				</Row>
			</Container>
		</Router>
	)
}

export default App;
