import React from 'react';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from './MainPage';



    const App = (props) => <MainPage {...props} />    

    const mapStateToProps = (state) => {
        return {
            searchField: state.searchRobotsReducer.searchField,
            robots: state.requestRobotsReducer.robots,
            isPending: state.requestRobotsReducer.isPending,
            error: state.requestRobotsReducer.error
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return{
        handleSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);