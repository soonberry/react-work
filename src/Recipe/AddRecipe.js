import React, {Component} from 'react'

class AddRecipe extends Component {
    render() {
        return (
            <div className="addtodo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.refInput} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddRecipe;