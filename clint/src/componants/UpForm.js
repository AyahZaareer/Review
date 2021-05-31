import React, { Component } from 'react'

export class UpForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateFav}>
                    <input onChange={this.props.updateDesc} type="text" value={this.props.description} />
                    <input type="submit" value="Update Data" />
                </form>

            </div>
        )
    }
}

export default UpForm
