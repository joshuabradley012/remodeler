import React, { useEffect } from 'react';
import { generatePath } from 'react-router';
import {
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import ProjectActions from './ProjectActions';
import useGlobalState from '../contexts/GlobalState';
import Breadcrumbs from './Breadcrumbs';

const Project = () => {
  const globalState = useGlobalState();
  const match = useRouteMatch();
  const { id } = useParams();

  let project = globalState.entities.projects[id];
  if (!project) return <h3>Project not found!</h3>;

  let subNavLinks = Object.entries(globalState.entities.projects)
    .map(([key, value]) => {
      let path = generatePath(match.path, { id: value.id });
      return { path: path, name: value.name };
  });
  // subNavLinks.unshift({ path: '/projects', name: 'All Projects' });

  useEffect(() => {
    globalState.updateSubNav(subNavLinks);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <h3>{project.name}</h3>
      <ProjectActions actions={globalState.result.projectActions} />
    </>
  );
}

export default Project;
