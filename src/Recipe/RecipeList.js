import React, { Component } from 'react'
import Recipe from './Recipe'
import Resources from '../resources/recipes.json'
import './RecipeList.css'

class RecipeList extends Component {
    render() {
        const list = Resources.map((resource, id) => {
                return <Recipe key={id} id={id} resource = {resource} />
            })
        return (
            <ul className="RecipeList">{list}</ul>            
        )
    }
}

export default RecipeList;