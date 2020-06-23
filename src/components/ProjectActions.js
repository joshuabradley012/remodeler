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
	Modal,
	Tabs,
	Tab,
} from 'react-bootstrap';
import LinkPanel from './LinkPanel';
import useGlobalState from '../contexts/GlobalState';

const ActionModal = props => {
	const globalState = useGlobalState();
	const { id, action } = useParams();
	const [item, setItem] = useState('');
	const [error, setError] = useState(false);

	const handleChange = e => {
		setItem(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
	}

	const handleSave = () => {
		if (!item) {
			setError(true);
			return;
		}
		let itemId = item.toLowerCase().replace(/\s+/g, '-');
		globalState.addProjectActionItem({
			projectId: id,
			actionId: action,
			id: itemId,
			name: item,
		});
		setItem('');
		props.onHide();
	}

	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="modal-title"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="modal-title">
					Add Item
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						value={item}
						onChange={handleChange}
						isInvalid={error}
					/>
					<Form.Control.Feedback type="invalid">
						Item name required
					</Form.Control.Feedback>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.onHide}>Close</Button>
				<Button variant="primary" onClick={handleSave}>Save</Button>
			</Modal.Footer>
		</Modal>
	);
}

const ProjectActions = ({ actions }) => {
	const globalState = useGlobalState();
	const history = useHistory();
	const match = useRouteMatch();
	const { id, action } = useParams();

	const [tab, setTab] = useState(action);
	const [search, setSearch] = useState('');
	const [modalShow, setModalShow] = useState(false);

	const selectTab = e => {
		setTab(e);
		let path = generatePath(match.path, { id: id, action: e });
		history.push(path);
	}

	const handleSearch = e => {
		setSearch(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
	}

	const handleModalToggle = e => {
		setModalShow(!modalShow);
	}

	return (
		<>
			<Tabs
				id="action-tabs"
				activeKey={tab}
				onSelect={selectTab}
			>
				{actions.map((action, i) => {
					const itemKeys = globalState.entities.projects[id].items;
					let actionLinks = itemKeys.map(itemKey => {
						const item = globalState.entities.items[itemKey];
						let path = generatePath(match.path, { id: id, action: action.id, item: item.id });
						return {
							name: item.name,
							path: path,
						}
					}).filter(item => {
						if (search) {
							let searchTerm = search.toLowerCase();
							return item.name.toLowerCase().indexOf(searchTerm) > -1;
						}
						else return true;
					});
					return (
						<Tab className="mt-1" eventKey={action.id} title={action.name} key={i}>
							<div className="action-bar d-flex mb-1">
								<Form onSubmit={handleSubmit}>
									<Form.Control
										type="text"
										placeholder="Search"
										value={search}
										onChange={handleSearch}
									/>
								</Form>
								<Button
									className="tab-action-btn ml-auto"
									variant="primary"
									onClick={handleModalToggle}
								>Add Item</Button>
							</div>
							<LinkPanel links={actionLinks} />
						</Tab>
					);
				})}
			</Tabs>
			<ActionModal
				show={modalShow}
				onHide={handleModalToggle}
			/>
		</>
	);
}

export default ProjectActions;
