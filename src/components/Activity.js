import React from 'react';
import { connect } from 'react-redux';

import {  getActivity } from '../actions/index';

const Activity = ({ active, isFetching, error, dispatch}) => {

    if (error) {
        return <h2>Finding activity error...</h2>
    }

    if (isFetching) {
        return <h2>Grabbing activity!</h2>
    }

    const handleClick = () => {
        dispatch(getActivity())
    }

    return (
        <>
        <div>
            <h2>Here's your activity: {active.activity}</h2>
        </div>
        <button onClick={handleClick}>Get new activity!</button>
    </>
    )
}

const mapStateToProps = state => {
    return {
        active: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Activity);


