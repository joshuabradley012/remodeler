import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import {
	Col,
	Container,
	Nav,
	Navbar,
	Row,
} from 'react-bootstrap';
import Dashboard from './Dashboard';
import Project from './Project';
import SideNav from './SideNav';
import AppBar from './AppBar';

const AppShell = () => {
	return (
		<Router>
			<AppBar />
			<Container fluid className="main">
				<Row>
					<Col className="sidenav d-none d-md-block">
						<SideNav />
					</Col>
					<Col>
						<Container>
							<Row className="d-block">
								<Switch>
									<Route path="/projects/:id/:action?" component={Project} />
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
