import React, { Component } from 'react'

export class DataFormApi extends Component {
    render() {
        return (
            this.props.apiData.map((ele, idx) => {
                return (
                    <div key={idx}>
                        <h1>{ele.title}</h1>
                        <h1>{ele.description}</h1>
                        <button onClick={e => this.props.addFav(ele)}>add to fav</button>

                    </div>
                );
            })
        );
    }
}

export default DataFormApi
