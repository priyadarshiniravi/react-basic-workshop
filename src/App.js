import React, {Component} from 'react';
import './App.css';
import Person from "./person/Person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person name="Priya" age={25} gender="female"/>
                <hr/>
                <Person name="Uday" age={25} gender="male">My Hobbies: Reading Books</Person>
            </div>
        );
    }
}

export default App;
