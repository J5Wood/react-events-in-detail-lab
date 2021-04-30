import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClickEvent = (e) => {
        const coordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickEvent}>I'm a button</button>
            </div>
        )
    }
}