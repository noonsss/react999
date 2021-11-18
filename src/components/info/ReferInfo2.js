import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ReferInfo2({refer}){
    const  {id, title, desc2, apply} = refer;

    return (
        <div>
            <ul>
                <li>
                    <Link to={{pathname: "refer-detail2", state: {refer}}}>
                        <span className="num">{id}</span>
                        <span className="attr">{title}</span>
                        <span className="desc">{desc2}</span>
                        <span className="Inline">{apply}</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
ReferInfo2.propTypes = {
    refer : PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        desc2: PropTypes.string.isRequired,
        basic: PropTypes.string.isRequired,
        apply: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        use: PropTypes.string.isRequired,
        definition: PropTypes.array.isRequired,
        property: PropTypes.array.isRequired,
    })

}

export default ReferInfo2;