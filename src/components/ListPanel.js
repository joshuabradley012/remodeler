import React from 'react';
import Panel from './Panel';

const ListPanel = ({ list}) => (
  <Panel>
    {list.map((item, i) => (
      <div className="panel__row" key={i}>{item.name}</div>
    ))}
  </Panel>
);

export default ListPanel;
