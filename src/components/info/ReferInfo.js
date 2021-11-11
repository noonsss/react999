import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfo({link,id,title,desc1,desc2,element,definition,tag,use,version,view}) {
    return (
        <li>
            <Link to={{ pathname: "ReferDetail", state: {link,id,title,desc1,desc2,element,definition,tag,use,version,view}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}

ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
}

export default ReferInfo;