import React, { useState } from 'react';
import { generatePath } from 'react-router';
import {
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import {
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
	const [key, setKey] = useState(action);

	const selectTab = e => {
		let path = generatePath(match.path, { id: id, action: e });
		setKey(e);
		history.push(path);
	}

	return (
		<Tabs
			id="action-tabs"
			activeKey={key}
			onSelect={selectTab}
		>
			{actions.map((actionKey, i) => {
				const action = globalState.entities.actions[actionKey];
				let actionLinks = action.items.map(itemKey => {
					const item = globalState.entities.items[itemKey];
					let path = generatePath(match.path, { id: id, action: action.id, item: item.id });
					return {
						name: item.name,
						path: path,
					}
				});
				return (
					<Tab className="mt-1" eventKey={action.id} title={action.name} key={i}>
						<LinkPanel links={actionLinks} />
					</Tab>
				);
			})}
		</Tabs>
	);
}

export default ProjectActions;
