import React from 'react';
import { Link } from 'react-router-dom';

function Filter(props) {
    return (
        <>
            <Link to="/all" className='btn btn-primary me-2'>Tout</Link>
            <Link to="/done" className='btn btn-primary me-2'>Fini</Link>
            <Link to="/active" className='btn btn-primary'>En cours</Link>
        </>
    )
}

export default Filter
