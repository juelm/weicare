import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 */
class Button extends Component {

    constructor(props) {
        super(props)
        this.padding = 30;
        this.height = 80;
        this.id = props.title;
        this.onClick = props.markSelected;
    }

    getStyle = () => {
        return {
            background: 'white',
            height: this.height,
            width: this.height,
            marginTop: 35,
            marginLeft: 20,
            marginRight: this.props.rightMargin,
            fontSize: 20,
            color: 'tan',
            fontWeight: 'bold',
            float: 'left',
            display: 'inline-block',
            borderRadius: '10px'


        };
    }

    render() {
        return (
            <Link to={this.props.destination}>
                <button name={this.props.title} style={this.getStyle()}>
                    {this.props.title}
                </button>
            </Link>
        );

    }
}

export default Button;
