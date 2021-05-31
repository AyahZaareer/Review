import React, { Component } from 'react'
import axios from 'axios';
import FavFromDB from './FavFromDB';
import UpForm from './UpForm';

export class Favirot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curdData: [],
            url: process.env.REACT_APP_SERVAR,
            massge: '',
            showMassge: false,
            showCom: false,
            showForm: false,
            slugName: '',
            description: ''
        };
    }
    showForm = (des, slug) => {
        this.setState({
            showForm: true,
            slugName: slug,
            description: des
        })
    }
    updateDesc = (e) => { this.setState({ description: e.target.value }) };

    componentDidMount = async () => {
        const readreq = await axios.get(`${this.state.url}/art/fav`);
        this.setState({
            curdData: readreq.data
        })
    }
    deleteFav = async (slug) => {
        const delereq = await axios.delete(`${this.state.url}/art/fav/:${slug}`);
        this.setState({
            curdData: delereq.data
        });
    }
    updateFav = async (e) => {
        e.preventDefault();
        const upreq = await axios.put(`${this.state.url}/art/fav/:${this.state.slug}`, { description: this.state.description });
        this.setState({
            curdData: upreq.data
        })
    }
    render() {
        return (
            <div>
                {this.state.showForm &&
                    <UpForm updateFav={this.updateFav} updateDesc={this.updateDesc} description={this.state.description} />}
                <FavFromDB curdData={this.state.curdData} deleteFav={this.deleteFav} showForm={this.showForm} />


            </div>
        );
    }
}

export default Favirot
