import React, { Component } from 'react'

class Nav extends Component {
    render () {
        const link = this.props.navigate.map(link =>
            <li key={link.id}>
                <a href={link.href}>
                    {link.title}
                    </a>
            </li>
        );
        return (
            <ul className="nav d-flex justify-content-around">
                {link}
            </ul>
        )
    }
}

export default Nav