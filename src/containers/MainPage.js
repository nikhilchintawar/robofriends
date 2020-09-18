import React from 'react';
import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import "./App.css";
import Scroll from '../utiliy/scroll/Scroll';
import ErrorBoundry from '../components/error-boundry/ErrorBoundry';

import Header from '../components/Header';



class MainPage extends React.Component{

    componentDidMount(){
       this.props.onRequestRobots();
    }

     filteredRobots = robots => robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.searchField.toLowerCase())
    })

    render(){
        
        const {handleSearchChange,robots, isPending} = this.props;

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
                    <CardList robots={this.filteredRobots(robots)}/>
                </ErrorBoundry>     
                        
                </div>
            )
        }
        
    }




export default MainPage;