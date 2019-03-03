import React, { Component } from 'react'
import Ingredient from './Ingredient';
import IngredientSearch from './IngredientSearch';

export default class IngredientList extends Component {
  render() {
    const { ingredients, handleDetailButton, searchValue, handleChange, handleSubmit, error} = this.props; 

    return (
      <React.Fragment>
        <IngredientSearch 
          searchValue={searchValue}                         
          handleChange={handleChange}
          handleSubmit={handleSubmit}/>

        <div className="container my-5">
        {/* title */}
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center mb-3">
                    <h1 className="text-font">Ingredients List</h1>
                </div>
            </div>
            <div className="row">
            {error ?  <div className="col-10 mx-auto col-md-6 col-lg-10 my-3">
                        <h1 className="text-center text-danger">{error}</h1>
                      </div> 
            : ingredients.map( ingredient => {
                return (
                    <Ingredient 
                        key={ingredient.recipe_id}
                        ingredient={ingredient}
                        handleDetailButton={() => handleDetailButton(0, ingredient.recipe_id )} 
                    />
                ) 
              }) 
            }        
            </div>
        </div>
      </React.Fragment>
    )
  }
}
