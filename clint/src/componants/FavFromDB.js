import React, { Component } from 'react'

export class FavFromDB extends Component {
    render() {
        console.log(this.props.curdData);
        return (

            this.props.curdData.map((ele, idx) => {
                return (
                    <div key={idx}>
                        <h1>{ele.title}</h1>
                        <h1>{ele.description}</h1>
                        <button onClick={e => this.props.deleteFav(ele.slug)}>delete from fav</button>
                        <button onClick={e => this.props.showForm(ele.slug, ele.description)}>show update form</button>

                    </div>
                );
            })



        )
    }
}

export default FavFromDB
