import React, {Component} from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
//import {weather} from "./weather";
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            myWeatherInfo: [],
            searchValue: ''
        }
    }

    componentDidMount() {
        fetch("https://api.data.gov.sg/v1/environment/air-temperature")
        .then(response => {return response.json()})
        .then(weather => {
            const updatedWeather = [];
            for (let i = 0; i < weather.metadata.stations.length; i++) {
                updatedWeather.push({ ...weather.metadata.stations[i], ...weather.items[0].readings[i] })
            }
            this.setState({ myWeatherInfo: updatedWeather})
        })
    }

    onSearchChange = (event) => {
        //console.log(event.target.value)
        this.setState({searchValue: event.target.value})
    }

    render() {
        let filteredWeather = this.state.myWeatherInfo.filter(eachWeatherInfo => eachWeatherInfo.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
        
        return (
            <div className="tc">
                <h1>Weather App</h1>
                <SearchBox onSearchChange = {this.onSearchChange} />
                <Scroll>
                    <CardList weatherinfo = {filteredWeather} />
                </Scroll>
            </div>
        )
    }
}

export default App;