import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Recipe.css'

class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {resource, id} = this.props;
        return (
            <li className="Recipe-item">
                <Link key={id} to={{pathname: `/recipe/${id}`}}>{resource.name}</Link>
            </li>
        )
    }
}

export default Recipe;