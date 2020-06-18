import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



const Breadcrumbs = () => {

    const match = useRouteMatch();
    const params = match.params;
    let id = params.id;
    let action = params.action;
    let item = params.item;
    

    let array = [id, action, item];
    var filtered = array.filter(function (el) {
        return el != null;
      });

    let breadcrumbs = [];

    
    let uniqueUrl = ['/projects']
    
    for (let i = 0; i < filtered.length; i ++) {

            uniqueUrl.push(`/${filtered[i]}`);
            let finalPath = uniqueUrl.join('');
            let name = filtered[i].replace('-', ' ');
            let newestName = name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

            if (filtered.indexOf(filtered[i]) === filtered.length - 1) {
                breadcrumbs.push(<Breadcrumb.Item active>{newestName}</Breadcrumb.Item>)
            } else breadcrumbs.push(
                
                  <Breadcrumb.Item><Link to={finalPath}>{newestName} </Link></Breadcrumb.Item>
    
            )
    };

    return (
        <Breadcrumb>
          {breadcrumbs}
        </Breadcrumb>
    )
}


export default Breadcrumbs
