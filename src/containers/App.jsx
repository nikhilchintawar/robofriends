import React from 'react';
import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import "./App.css";
import Scroll from '../utiliy/scroll/Scroll';
import ErrorBoundry from '../components/error-boundry/ErrorBoundry';



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    handleSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        
        
    }
    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })
        return !robots.length 
            ?
            <h2>Loading...</h2>
            :
               ( <div className="App">
                <Scroll>
                <h1 className="heading">ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.handleSearchChange} />
                </Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                
                
                
                </div>
            )
        }
        
    }


export default App;