import React from 'react'
import { connect } from 'react-redux';
import { setFilter, visibilityFilters } from '../store/actions';

function Filter({ setFilter }) {
    return (
        <>
        <button className="btn btn-primary me-2" onClick={ () => setFilter(visibilityFilters.SHOW_ALL)} > Tout </button>
        <button className="btn btn-primary me-2" onClick={ () => setFilter(visibilityFilters.SHOW_DONE) } > Fini </button>
        <button className="btn btn-primary" onClick={ () => setFilter(visibilityFilters.SHOW_ACTIVE) } > En cours </button> 
        </>
    )
}

export default connect(null, {
    setFilter
})(Filter)
