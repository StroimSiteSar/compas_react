import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            Logo
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col">phones</div>
                                <div className="col">worktime</div>
                                <div className="col">basket</div>
                            </div>
                            <ul className="nav d-flex justify-content-around">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">link</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">Catalog</div>
                        <div className="col">Search</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header