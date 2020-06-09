import React, { useState } from 'react';
import LinkPanel from './LinkPanel';
import {
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import { generatePath } from 'react-router';
import {
	Tabs,
	Tab,
} from 'react-bootstrap';

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const dashToCamel = (dashedWord) => (
	dashedWord.split('-').map(
		(word, i) => i === 0 ? word : capitalize(word)
	).join('')
);

const ProjectActions = ({ tabs }) => {
	const { id, action } = useParams();
	const history = useHistory();
	const match = useRouteMatch();
	const [key, setKey] = useState(action);

	const selectTab = event => {
		setKey(event);
		let path = generatePath(match.path, { id: id, action: event });
		history.push(path);
	}
	
	return (
		<Tabs
			id="action-tabs"
			activeKey={key}
			onSelect={selectTab}
		>
			{tabs.map((tab, i) => {
				let actionLinks = tab.items.map(item => {
					let path = generatePath(match.path, { id: id, action: action, item: item.id });
					return {
						name: item.name,
						path: path,
					}
				});
				return (
					<Tab className="mt-1" eventKey={tab.id} title={tab.name} key={i}>
						<LinkPanel links={actionLinks} />
					</Tab>
				);
			})}
		</Tabs>
	);
}

export default ProjectActions;
