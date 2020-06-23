import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const capitalize = text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();

const BreadcrumbLink = ({ href, ...props }) => <Link to={href} {...props} />;

const Breadcrumbs = () => {
	const match = useRouteMatch();
	const path = match.url;

	let pathParts = path.split('/');
	pathParts.shift();

	let breadcrumbs = [];
	let uniqueUrl = []

	for (let i = 0; i < pathParts.length; i ++) {

		uniqueUrl.push(`/${pathParts[i]}`);
		let finalPath = uniqueUrl.join('');
		let name = pathParts[i].replace(/-/g, ' ').toLowerCase();
		name = capitalize(name);

		let isLast = pathParts.indexOf(pathParts[i]) === pathParts.length - 1
		breadcrumbs.push(
			<Breadcrumb.Item key={i} active={isLast} href={finalPath} linkAs={BreadcrumbLink}>{name}</Breadcrumb.Item>
		)
	};

	return (
		<Breadcrumb>
			{breadcrumbs}
		</Breadcrumb>
	)
}

export default Breadcrumbs;
