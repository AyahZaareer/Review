import React, { Component } from 'react';
import axios from 'axios';
import DataFormApi from './dataFormApi';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            url: process.env.REACT_APP_SERVAR,
            massge: '',
            showMassge: false,
            showCom: false
        };
    }
    addFav = async (ele) => {
        const addreq = await axios.post(`${this.state.url}/art/fav`, ele);
        console.log(addreq);
        this.setState({
            massge: addreq.data,
            showMassge: true

        });

    }

    componentDidMount = async () => {
        const reqApi = await axios.get(`${this.state.url}/art`);
        console.log(reqApi);
        this.setState({
            apiData: reqApi.data,
            showCom: true
        });
        console.log(this.state.apiData);
    }
    render() {
        return (

            <div>
                {this.state.showMassge &&
                    <h1>{this.state.massge}</h1>
                }

                <DataFormApi apiData={this.state.apiData} addFav={this.addFav} />






            </div>
        )
    }
}

export default Main
