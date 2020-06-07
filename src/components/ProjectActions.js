import React, { useState } from 'react';
import LinkPanel from './LinkPanel';
import {
	useParams,
	useRouteMatch,
} from 'react-router-dom';
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

const findAction = (id, project) => project.actions.find(action => action.id === id);

const ProjectActions = ({ tabs }) => {
	const defaultAction = tabs[0].id;
	const [key, setKey] = useState(defaultAction);
	
	return (
		<Tabs
			id="action-tabs"
			activeKey={key}
			onSelect={(k) => setKey(k)}
		>
			{tabs.map((tab, i) => {
				let match = useRouteMatch();
				const actionLinks = tab.items.map(item => ({
					name: item.name,
					path: `${match.url}/${item.id}`
				}));
				return (
					<Tab eventKey={tab.id} title={tab.name} key={i}>
						<LinkPanel links={actionLinks} />
					</Tab>
				);
			})}
		</Tabs>
	);
}

export default ProjectActions;
