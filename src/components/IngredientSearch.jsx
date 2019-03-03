import React, { Component } from 'react'

export default class IngredientSearch extends Component {
  render() {
    const {searchValue, handleSubmit, handleChange} = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-font text-capitalize">
                search for ingredients with 
                <strong className="text-danger"> Food2Fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label className="text-capitalize" htmlFor="search">type ingredients separeted by comma</label>
                <div className="input-group">
                  <input 
                    className="form-control" 
                    type="text" 
                    name="search" 
                    placeholder="chocolate,cookies"
                    value={searchValue}
                    onChange={handleChange}/>
                  <div className="input-group-append">
                    <button 
                      type="submit" 
                      className="input-group-text bg-primary text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
