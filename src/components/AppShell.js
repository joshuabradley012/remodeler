import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import AppBar from './AppBar';
import Dashboard from './Dashboard';
import Project from './Project';
import SideNav from './SideNav';

const AppShell = () => {
	return (
		<Router>
			<AppBar />
			<Container fluid className="main">
				<Row>
					<Col className="sidenav d-none d-md-block">
						<SideNav className="d-block" />
					</Col>
					<Col>
						<Container>
							<Row className="d-block">
								<Switch>
									<Route path="/projects/:id/:action/:item?" component={Project} />
									<Redirect from="/projects/:id" to="/projects/:id/decision-list" />
									<Route path="/projects" component={Dashboard} />
									<Route exact path="/" component={Dashboard} />
								</Switch>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</Router>
	);
}

export default AppShell;
