import React, {Component} from 'react';
import './App.css';
import Person from "./person/Person";

class App extends Component {
    state = {
        people: [
            {
                name: "Priya",
                age: 25,
                gender: "Female"
            },
            {
                name: "Uday",
                age: 25,
                gender: "Male"
            },
            {
                name: "RandomName",
                age: 25,
                gender: "Male"
            }
        ],
        showPerson: true
    };

    switchNameHandler = (index, name) => {
        let newPeople = [...this.state.people];
        newPeople[index].name = name;
        this.setState({
            people: newPeople
        })
    };

    hidePerson = () => {
        this.setState({showPerson: !this.state.showPerson})
    };

    renderPerson = () => {
        return this.state.people.map((person, index) => {
            return (
                this.state.showPerson ?
                    <div>
                        <Person name={person.name}
                                age={person.age}
                                gender={person.gender}
                                onNameClick={this.switchNameHandler.bind(this, index)}/>
                    </div> : null
            )
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.hidePerson}>Toggle showing Person</button>
                {this.renderPerson()}
            </div>
        );
    }
}

export default App;
