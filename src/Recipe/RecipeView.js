import React from 'react'
import AddRecipe from './AddRecipe'
import RecipeList from './RecipeList'

export default () => {
    return (
        <div className="recipe-view">
            <RecipeList />
            <AddRecipe />
        </div>
    )
}