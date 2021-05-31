import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorit">Favorit</a></li>
                    </ul>
                </>

            </div>
        )
    }
}

export default Header

