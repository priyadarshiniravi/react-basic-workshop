import React, {Component} from 'react';
import styles from './App.module.css';
import PersonList from "./persons/PersonList";

class App extends Component {
    state = {
        showPerson: true
    }

    hidePerson = () => {
        this.setState({showPerson: !this.state.showPerson})
    };

    render() {
        let buttonColor = this.state.showPerson? styles["button-red"] : styles["button-green"];
        let buttonStyle = [styles.button, buttonColor].join(' ');
        return (
            <div className={styles.App}>
                <button onClick={this.hidePerson} className={buttonStyle}>Toggle showing Person</button>
               <PersonList showPerson={this.state.showPerson} />
            </div>
        );
    }
}

export default App;
