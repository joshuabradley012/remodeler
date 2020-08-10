import React from 'react';
import {
  Link,
  Router,
} from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../assets/remodeler.svg';
import Bell from 'bootstrap-icons/icons/bell-fill.svg' ;
import Person from 'bootstrap-icons/icons/person-fill.svg' ;

const projects = [
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
];

const Project = ({ project }) => {
  const { id, name, image, status, budgetSpent, budgetTotal } = project;
  return (
    <div className="project">
      <a className="project-link" href={`/project/${id}`}>
        <img className="project-image" src={image} />
        <div className="project-text">
          <h3 className="project-name">{name}</h3>
          <span title="Project status" className={`project-status bg-${status}`} />
          <p className="project-budget">{`$${budgetSpent} / $${budgetTotal}`}</p>
        </div>
      </a>
    </div>
  )
};

const Dashboard = () => (
  <div className="dashboard container-fluid">
    <div className="dashboard-inner row">
      {projects.map(project => <Project project={project} key={project.id} />)}
    </div>
  </div>
);

const NavButton = ({ className, ...props }) => (
  <button className={classNames(className, 'nav-button')} {...props} />
);

const AppBar = () => (
  <div className="app-bar">
    <NavButton>
      <Logo className="button-icon logo" />
    </NavButton>
    <form id="search">
      <input placeholder="Search" />
    </form>
    <NavButton>
      <Bell className="button-icon" />
    </NavButton>
    <NavButton>
      <Person className="button-icon" />
    </NavButton>
  </div>
);

const AppShell = () => {
	return (
    <div className="app-shell">
      <AppBar />
      <Dashboard />
    </div>
	);
};

export default AppShell;
