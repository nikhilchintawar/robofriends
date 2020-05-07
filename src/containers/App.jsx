import React from 'react';
import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import "./App.css";
import Scroll from '../utiliy/scroll/Scroll';
import ErrorBoundry from '../components/error-boundry/ErrorBoundry';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import { searchRobotsReducer } from '../reducers';
import Header from '../components/Header';



class App extends React.Component{

    componentDidMount(){
       this.props.onRequestRobots();
    }


    render(){
        
        const {searchField, handleSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending 
            ?
            <h2>Loading...</h2>
            :
               ( <div className="App">
                <Scroll>
                <Header />
                <SearchBox searchChange = {handleSearchChange} />
                </Scroll> 
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>     
                        
                </div>
            )
        }
        
    }

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