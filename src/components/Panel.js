import React from 'react';
import classNames from 'classnames';

const Panel = ({ className, ...props }) => (
  <div className={classNames(className, 'panel')} {...props} />
);

export default Panel;
