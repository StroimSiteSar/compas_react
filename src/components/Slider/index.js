import React, { Component } from 'react'
import SliderItem from './SliderItem'

class Slider extends Component {
    render () {
        return (
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <div className="slider__control arrow-left">left</div>
                        </div>
                        <div className="col-10">
                            <SliderItem />
                        </div>
                        <div className="col-1">
                            <div className="slider__control arrow-right">right</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider