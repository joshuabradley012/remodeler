import React, { useEffect, useRef, useState } from 'react';
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
    id: 'kitchen',
    name: 'Kitchen',
    image: 'https://i.pinimg.com/474x/80/44/4d/80444dc2cdd4468e96f071e700e4e409.jpg',
    status: 'success',
    budgetSpent: 600,
    budgetTotal: 1400,
  },
  {
    id: 'living-room',
    name: 'Living room',
    image: 'https://i.pinimg.com/236x/bd/73/b6/bd73b6c23df1721f47228746a0b2689f.jpg',
    status: 'success',
    budgetSpent: 1000,
    budgetTotal: 2000,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://i.pinimg.com/236x/83/02/d5/8302d507ff58af5e1593127c8f390106.jpg',
    status: 'success',
    budgetSpent: 700,
    budgetTotal: 900,
  },
  {
    id: 'laundry-room',
    name: 'Laundry room',
    image: 'https://i.pinimg.com/236x/d8/4d/51/d84d5185369604c2d0f368651dacb0b7.jpg',
    status: 'success',
    budgetSpent: 900,
    budgetTotal: 1600,
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://i.pinimg.com/236x/9b/b1/85/9bb1852452d5a1e11098ebf3a3997465.jpg',
    status: 'warning',
    budgetSpent: 650,
    budgetTotal: 800,
  },
  {
    id: 'patio',
    name: 'Patio',
    image: 'https://i.pinimg.com/236x/45/af/f5/45aff59cfd585a364febfc690c0fa310.jpg',
    status: 'success',
    budgetSpent: 1400,
    budgetTotal: 2300,
  },
  {
    id: 'front-yard',
    name: 'Front yard',
    image: 'https://i.pinimg.com/236x/44/ed/ed/44ededa34faf0f4e639c18fcb221aaa7.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
  {
    id: 'backyard',
    name: 'Backyard',
    image: 'https://i.pinimg.com/236x/88/a0/23/88a023e994f3c319ab2e0233a02dca9e.jpg',
    status: 'success',
    budgetSpent: 100,
    budgetTotal: 400,
  },
];

const useResize = ref => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const styles = window.getComputedStyle(ref.current);
      const width = ref.current.clientWidth
        - parseInt(styles.paddingLeft)
        - parseInt(styles.paddingRight);
      const height = ref.current.clientHeight
        - parseInt(styles.paddingTop)
        - parseInt(styles.paddingBottom);
      setWidth(width);
      setHeight(height);
    };

    if (ref.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, height };
};

const Project = ({ item }) => {
  const { id, name, image, status, budgetSpent, budgetTotal } = item;
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

const MasonryGrid = ({ children = [], minColumns = 2, itemWidth = 240, gridGap = 16 }) => {
  const [columnCount, setColumnCount] = useState(0);
  const ref = useRef(null);
  const { width } = useResize(ref);

  const calculateColumnCount = () => {
    let columns = Math.floor(width / itemWidth);
    const widthWithGap = (itemWidth * columns) + (gridGap * (columns - 1));

    if (widthWithGap > width) {
      columns--;
    }

    setColumnCount(Math.max(columns, minColumns));
  };

  const itemsInColumns = () => {
    const childrenInColumns = [];
    for (let i = 0; i < children.length; i++) {
      const columnIndex = i % columnCount;

      if (!childrenInColumns[columnIndex]) {
        childrenInColumns[columnIndex] = [];
      }

      childrenInColumns[columnIndex].push(children[i]);
    }
    return childrenInColumns;
  };

  const renderColumns = () => {
    const childrenInColumns = itemsInColumns();

    return childrenInColumns.map((items, i) => {
      return (
        <div className="masonry-column" key={i}>
          {items}
        </div>
      );
    });
  };

  useEffect(() => {
    calculateColumnCount();
  }, [width]);

  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, ${itemWidth}px)`,
    gridGap: `${gridGap}px`,
  };

  return (
    <div ref={ref} style={gridStyle} className="masonry-grid">
      {renderColumns()}
    </div>
  );
};

const NavButton = ({ className, ...props }) => (
  <button className={classNames(className, 'nav-button')} {...props} />
);

const AppBar = () => (
  <div className="app-bar">
    <NavButton className="logo">
      <Logo className="button-icon" />
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
      <MasonryGrid>
        {projects.map((project, i) => <Project item={project} key={i} />)}
      </MasonryGrid>
    </div>
  );
};

export default AppShell;
