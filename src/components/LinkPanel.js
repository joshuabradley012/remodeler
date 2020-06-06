import React from 'react';
import Panel from './Panel';
import { Link } from 'react-router-dom';

const LinkPanel = ({ links }) => (
	<Panel>
		{links.map((link, i) => (
			<Link className="panel__row--link" to={link.path} key={i}>
				<div>{link.name}</div>
			</Link>
		))}
	</Panel>
);

export default LinkPanel;
