import React, {Component} from 'react';
import Person from "./person/Person";

class PersonList extends Component {
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
        ]
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

    render() {
        return this.props.showPerson ? this.state.people.map((person, index) => {
            return (

                    <Person name={person.name}
                            age={person.age}
                            gender={person.gender}
                            onNameClick={this.switchNameHandler.bind(this, index)}
                            delete={this.delete.bind(this, index)}
                            key={index}
                    />

            )
        }) : null
    }

}

export default PersonList;
