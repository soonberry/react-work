import React, {Component} from 'react'
import Resources from '../resources/recipes.json'

class RecipeItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const item = Resources[this.props.match.params.id];
        return (
            <div>
                <div>{item.name}</div>
                <div>{item.steps}</div>
            </div>
        )
    }
}

export default RecipeItem;