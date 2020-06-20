import React, { useState } from 'react';
import { generatePath } from 'react-router';
import {
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import {
	Button,
	Form,
	Tabs,
	Tab,
} from 'react-bootstrap';
import LinkPanel from './LinkPanel';
import useGlobalState from '../contexts/GlobalState';

const ProjectActions = ({ actions }) => {
	const globalState = useGlobalState();
	const history = useHistory();
	const match = useRouteMatch();
	const { id, action } = useParams();

	const [tab, setTab] = useState(action);
	const [search, setSearch] = useState('');

	const selectTab = e => {
		setTab(e);
		let path = generatePath(match.path, { id: id, action: e });
		history.push(path);
	}

	const handleSearch = e => {
		setSearch(e.target.value);
	}

	const handleSearchSubmit = e => {

	}

	return (
		<Tabs
			id="action-tabs"
			activeKey={tab}
			onSelect={selectTab}
		>
			{actions.map((actionKey, i) => {
				const action = globalState.entities.projectActions[actionKey];
				let actionLinks = action.items.map(itemKey => {
					const item = globalState.entities.projectItems[itemKey];
					let path = generatePath(match.path, { id: id, action: action.id, item: item.id });
					return {
						name: item.name,
						path: path,
					}
				});
				return (
					<Tab className="mt-1" eventKey={action.id} title={action.name} key={i}>
						<div className="action-bar d-flex mb-1">
							<Form onSubmit={handleSearchSubmit}>
								<Form.Control type="text" placeholder="Search" onChange={handleSearch} />
							</Form>
							<Button className="tab-action-btn ml-auto" variant="primary">Add Item</Button>
						</div>
						<LinkPanel links={actionLinks} />
					</Tab>
				);
			})}
		</Tabs>
	);
}

export default ProjectActions;
