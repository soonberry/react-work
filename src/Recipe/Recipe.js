import React, { Component } from 'react'


class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {resource} = this.props;
        return (
            <li>{resource.name}</li>
        )
    }
}

export default Recipe;