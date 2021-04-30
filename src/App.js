import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchBox/searchbox.component';
import {TimePicker} from "antd";
import 'antd/dist/antd.css'
import moment from 'moment';
import BubbleURL from "./BubbleURL";

class App extends Component{
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        return(
        <div><BubbleURL/></div>
        /*const {monsters, searchField} = this.state

        const  filteredMonsters  = monsters.filter( monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        const format = 'HH:mm';

        return(

            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <div className='m-5'>
                <TimePicker
                    className='time-picker'
                    defaultValue={moment('10:00',format)}
                    format={format}/>
                </div>
                <SearchBox
                placeholder='search monsters'
                handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        )*/
        )}
}


export default App



