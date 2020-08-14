import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import { generatePath } from 'react-router';
import {
  BrowserRouter as Router,
  Link,
  NavLink as ActiveLink,
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../assets/remodeler.svg';
import Bell from 'bootstrap-icons/icons/bell-fill.svg' ;
import Cart from 'bootstrap-icons/icons/cart-fill.svg' ;
import Person from 'bootstrap-icons/icons/person-fill.svg' ;
import Toggles from 'bootstrap-icons/icons/toggles.svg' ;

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
    image: 'https://i.pinimg.com/236x/80/44/4d/80444dc2cdd4468e96f071e700e4e409.jpg',
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

const products = [
  {
    id: 'bathroom-sink',
    name: 'Bathroom Sink',
    image: 'https://i.pinimg.com/236x/95/6c/cb/956ccb1ad964ea354f21f7897d844366.jpg',
    price: 400,
    supplier: 'Home depot',
  },
  {
    id: 'kitchen-counter',
    name: 'Kitchen Counter',
    image: 'https://i.pinimg.com/236x/80/44/4d/80444dc2cdd4468e96f071e700e4e409.jpg',
    price: 1400,
    supplier: 'Amazon',
  },
  {
    id: 'coffee-table',
    name: 'Coffee table',
    image: 'https://i.pinimg.com/236x/bd/73/b6/bd73b6c23df1721f47228746a0b2689f.jpg',
    price: 300,
    supplier: 'Wayfair',
  },
  {
    id: 'rug',
    name: 'Rug',
    image: 'https://i.pinimg.com/236x/83/02/d5/8302d507ff58af5e1593127c8f390106.jpg',
    price: 200,
    supplier: 'Pier 21',
  },
  {
    id: 'washer',
    name: 'Washer',
    image: 'https://i.pinimg.com/236x/d8/4d/51/d84d5185369604c2d0f368651dacb0b7.jpg',
    price: 900,
    supplier: 'Lowes',
  },
  {
    id: 'desk',
    name: 'Desk',
    image: 'https://i.pinimg.com/236x/9b/b1/85/9bb1852452d5a1e11098ebf3a3997465.jpg',
    price: 650,
    supplier: 'Ikea',
  },
  {
    id: 'patio-furniture-set',
    name: 'Patio furniture set',
    image: 'https://i.pinimg.com/236x/45/af/f5/45aff59cfd585a364febfc690c0fa310.jpg',
    price: 1400,
    supplier: 'ULINE',
  },
  {
    id: 'pavers',
    name: 'Pavers',
    image: 'https://i.pinimg.com/236x/44/ed/ed/44ededa34faf0f4e639c18fcb221aaa7.jpg',
    price: 400,
    supplier: 'Home depot',
  },
  {
    id: 'gravel',
    name: 'Gravel',
    image: 'https://i.pinimg.com/236x/88/a0/23/88a023e994f3c319ab2e0233a02dca9e.jpg',
    price: 100,
    supplier: 'Mission ready mix',
  },
];

const useResize = ref => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const styles = window.getComputedStyle(ref.current);
      const width = ref.current.clientWidth
        - parseInt(styles.paddingLeft)
        - parseInt(styles.paddingRight);
      const height = ref.current.clientHeight
        - parseInt(styles.paddingTop)
        - parseInt(styles.paddingBottom);
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
      setInnerWidth(width);
      setInnerHeight(height);
    };

    if (ref.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, height, innerWidth, innerHeight };
};

const ProjectItem = ({ item }) => {
  const { id, name, image, status, budgetSpent, budgetTotal } = item;
  return (
    <Link className="project-item" to={`/project/${id}`}>
      <div className="project-item-image-wrapper">
        <img className="project-item-image" src={image} />
      </div>
      <div className="project-item-text">
        <h3 className="project-item-name">{name}</h3>
        <span title="Project status" className={`project-item-status bg-${status}`} />
        <p className="project-item-budget">{`$${budgetSpent} / $${budgetTotal}`}</p>
      </div>
    </Link>
  )
};

const ShopItem = ({ item }) => {
  const { id, name, image, price, supplier } = item;
  return (
    <Link className="shop-item" to={`/shop/${id}`}>
      <div className="shop-item-image-wrapper">
        <img className="shop-item-image" src={image} />
      </div>
      <div className="shop-item-text">
        <span className="shop-item-price">{`$${price}`}</span>
        <h3 className="shop-item-name">{name}</h3>
        <p className="shop-item-supplier">{supplier}</p>
      </div>
    </Link>
  )
};

const MasonryGrid = ({ children = [], className, minColumns = 2, itemWidth = 240, gridGap = 16 }) => {
  const [columnCount, setColumnCount] = useState(0);
  const ref = useRef(null);
  const { innerWidth } = useResize(ref);

  const calculateColumnCount = () => {
    let columns = Math.floor(innerWidth / itemWidth);
    const widthWithGap = (itemWidth * columns) + (gridGap * (columns - 1));

    if (widthWithGap > innerWidth) {
      columns--;
    }

    setColumnCount(Math.max(columns, minColumns));
  };

  const itemsInColumns = () => {
    const items = [];
    for (let i = 0; i < children.length; i++) {
      const columnIndex = i % columnCount;

      if (!items[columnIndex]) {
        items[columnIndex] = [];
      }

      items[columnIndex].push(children[i]);
    }
    return items;
  };

  const renderColumns = () => {
    const columns = itemsInColumns();

    return columns.map((items, i) => {
      return (
        <div className="masonry-column" key={i}>
          {items}
        </div>
      );
    });
  };

  useEffect(() => {
    calculateColumnCount();
  }, [innerWidth]);

  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, ${itemWidth}px)`,
    gridGap: `${gridGap}px`,
  };

  return (
    <div ref={ref} style={gridStyle} className={classNames(className, 'masonry-grid')}>
      {renderColumns()}
    </div>
  );
};

const Home = () => (
  <MasonryGrid className="home">
    {projects.map((project, i) => <ProjectItem item={project} key={i} />)}
  </MasonryGrid>
);

const Projects = () => (
  <div className="project-dashboard all">
    <h1 className="project-title">Projects</h1>
    <div className="project-actions">
      <NavLink exact to="/account">Active</NavLink>
      <NavLink to="/account/finished">Finished</NavLink>
    </div>
    <MasonryGrid className="projects">
      {projects.map((project, i) => <ProjectItem item={project} key={i} />)}
    </MasonryGrid>
  </div>
);

const Shop = () => (
  <div className="shop-dashboard all">
    <h1 className="shop-title">Shop</h1>
    <div className="shop-actions">
      <NavLink exact to="/shop">All</NavLink>
      <NavLink to="/shop/popular">Popular</NavLink>
      <NavLink to="/shop/deals">Deals</NavLink>
      <NavButton className="toggle">
        <Toggles className="button-icon black" />
      </NavButton>
    </div>
    <MasonryGrid className="shop">
      {products.map((product, i) => <ShopItem item={product} key={i} />)}
    </MasonryGrid>
  </div>
);

const NavButton = ({ to, className, ...props }) => (
  <Link to={to} className={classNames(className, 'nav-button')} {...props} />
);

const NavLink = ({ to, className, ...props }) => (
  <ActiveLink to={to} className={classNames(className, 'nav-link')} {...props} />
);

const Project = () => {
  const match = useRouteMatch();
  const { id } = useParams();

  const project = projects.find(project => project.id === id);
  const actions = [
    {
      id: 'ideas',
      name: 'Ideas',
    },
    {
      id: 'orders',
      name: 'Orders',
    },
    {
      id: 'status',
      name: 'Status',
    },
  ];

  return (
    <div className="project-dashboard single">
      <h1 className="project-title">{project.name}</h1>
      <div className="project-actions">
        {actions.map((action, i) => {
          const actionLink = generatePath(match.path, { id: project.id, action: action.id });
          return <NavLink to={actionLink} key={i}>{action.name}</NavLink>;
        })}
      </div>
      <MasonryGrid>
        {projects.map((project, i) => <ProjectItem item={project} key={i} />)}
      </MasonryGrid>
    </div>
  );
};

const AppBar = () => (
  <div className="app-bar">
    <NavButton to="/" className="logo">
      <Logo className="button-icon" />
    </NavButton>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="/hire">Hire</NavLink>
    <form id="search">
      <input placeholder="Search" />
    </form>
    <NavButton to="/notifications">
      <Bell className="button-icon" />
    </NavButton>
    <NavButton to="/cart">
      <Cart className="button-icon" />
    </NavButton>
    <NavButton to="/account">
      <Person className="button-icon" />
    </NavButton>
  </div>
);

const AppShell = () => {
  return (
    <Router>
      <div className="app-shell">
        <AppBar />
        <Switch>
          <Redirect exact from="/project/:id" to="/project/:id/ideas" />
          <Route path="/project/:id/:action?" component={Project} />
          <Route path="/shop" component={Shop} />
          <Route path="/account" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppShell;
