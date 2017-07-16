import React, { Component } from 'react'
import Recipe from './Recipe'
import Resources from '../resources/recipes.json'

class RecipeList extends Component {
    render() {
        const list = Resources.map((resource, id) => {
                return <Recipe key={id} resource = {resource} />
            })
        return (
            <div>{list}</div>            
        )
    }
}

export default RecipeList;