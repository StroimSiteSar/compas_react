import React, { Component } from 'react'
import {aboutInfo, navigate} from '../../datapull'
import Nav from './Nav'

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
                            <div className="row justify-content-between">
                                <div className="col">
                                    <p>{aboutInfo.phones[0]}</p>
                                    <p>{aboutInfo.phones[1]}</p>
                                </div>
                                <div className="col">
                                    <p>Работаем с {aboutInfo.worktime.from} до {aboutInfo.worktime.to}</p>
                                    <p>{aboutInfo.worktime.weekend}</p>
                                </div>
                                <div className="col">
                                    <button>Корзина</button>
                                </div>
                            </div>
                            <Nav navigate={navigate}/>
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