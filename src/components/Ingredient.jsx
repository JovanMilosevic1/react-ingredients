import React, { Component } from 'react'

export default class Ingredient extends Component {
  render() {
    const { handleDetailButton } = this.props;
    const { image_url, title, source_url, publisher } = this.props.ingredient;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <img style={{height:'14rem'}} className="img-card-top" src={image_url} alt="ingredient"/>   
                <div className="card-body text-capitalize">
                <h6>{title}</h6>
                <h6 className=" text-font">
                    provided by <span className="text-danger">{publisher} </span>   
                </h6>    
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary text-capitalize" onClick={handleDetailButton}>details</button>
                    <a href={source_url} className="btn btn-success mx-2 text-capitalize"  target="_blank"  rel="noopener noreferrer">Ingredient url</a>
                </div>
            </div>
        </div>    
      </React.Fragment>
    )
  }
}
