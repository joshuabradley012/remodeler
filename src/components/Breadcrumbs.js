import React from 'react';
import { useRouteMatch } from 'react-router-dom';
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

    {for (let i = 0; i < filtered.length; i ++) {

            if (filtered.indexOf(filtered[i]) === filtered.length - 1) {
                breadcrumbs.push(<Breadcrumb.Item active>{filtered[i]}</Breadcrumb.Item>)
            } else breadcrumbs.push(<Breadcrumb.Item>{filtered[i]}</Breadcrumb.Item>)
    }};

    return (
        <Breadcrumb>
          {breadcrumbs}
        </Breadcrumb>
    )
}


export default Breadcrumbs
