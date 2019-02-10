import React, {Component} from 'react';
import styles from './App.module.css';
import Person from "./person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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

    delete = (index) => {
        let newPeople = [...this.state.people];
        newPeople.splice(index, 1)
        this.setState({
            people: newPeople
        })
    }

    hidePerson = () => {
        this.setState({showPerson: !this.state.showPerson})
    };

    renderPerson = () => {
        return this.state.people.map((person, index) => {
            return (
                this.state.showPerson ? (<ErrorBoundary  key={index}>
                        <Person name={person.name}
                                age={person.age}
                                gender={person.gender}
                                onNameClick={this.switchNameHandler.bind(this, index)}
                                delete={this.delete.bind(this, index)}
                        />
                </ErrorBoundary>) : null

            )
        })
    };

    render() {
        let buttonColor = this.state.showPerson? styles["button-red"] : styles["button-green"];
        let buttonStyle = [styles.button, buttonColor].join(' ');
        return (
            <div className={styles.App}>
                <button onClick={this.hidePerson} className={buttonStyle}>Toggle showing Person</button>
                {this.renderPerson()}
            </div>
        );
    }
}

export default App;
