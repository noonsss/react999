import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ReferInfo3({refer}){
    const  {id, title, desc2, returns} = refer;
    return (
        <div>
            <ul>
                <li>
                    <Link to={{pathname: "refer-detail3", state: {refer}}}>
                        <span className="num">{id}</span>
                        <span className="attr">{title}</span>
                        <span className="desc">{desc2}</span>
                        <span className="Inline">{returns}</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

ReferInfo3.propTypes = {
    refer : PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        desc2: PropTypes.string.isRequired,
        returns: PropTypes.string.isRequired,
        syntax: PropTypes.string.isRequired,
        definition: PropTypes.array.isRequired,
        link: PropTypes.string.isRequired
    })
}
export default ReferInfo3;