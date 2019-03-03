import React, { Component } from 'react'
// import { ingredients} from '../tempDetails';
import axios from 'axios'
export default class IngredientDetail extends Component {
  // example {"publisher": "The Pioneer Woman", "f2f_url": "http://food2fork.com/view/47024", "ingredients": ["1 pound Ground Coffee (good, Rich Roast)", "8 quarts Cold Water", "Half-and-half (healthy Splash Per Serving)", "Sweetened Condensed Milk (2-3 Tablespoons Per Serving)", "Note: Can Use Skim Milk, 2% Milk, Whole Milk, Sugar, Artificial Sweeteners, Syrups...adapt To Your Liking!"], "source_url": "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/", "recipe_id": "47024", "image_url": "http://static.food2fork.com/icedcoffee5766.jpg", "social_rank": 100.0, "publisher_url": "http://thepioneerwoman.com", "title": "Perfect Iced Coffee"}
  state = {
    ingredient: {}
    // url:`https://www.food2fork.com/api/get?key=cfc23da9927444e5b904cd6af18396fe&rId=${this.props.id}`
  }
  componentDidMount() {
    const id = this.props.id;
    console.log(id);
    axios.get(`https://www.food2fork.com/api/get?key=3323cc0d3e242c33ce83925d3bb9c017&rId=${id}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          ingredient: res.data.recipe
        })
      })
  }
  
  render() {
    const {handlePageIndex} = this.props;
    const { image_url, publisher, publisher_url, source_url, title } = this.state.ingredient;
    // console.log(this.state.ingredient);
    // console.log(this.props.id);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" style={{color:'#fff'}} className="btn btn-warning mb-5 text-capitalize" onClick={() => handlePageIndex(1)}>back to ingredients list</button>
              <img src={image_url} className="d-block w-100" style={{borderRadius: '1rem'}} alt="food-image"/>
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className=" text-capitalize text-font">
                provided by 
                <span className="text-danger"> {publisher} </span>
              </h6>
              <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">
                publisher webpage
              </a>
              <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize">
                ingredient url
              </a>
              {/* ingredients  */}
              <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">Ingredients</h2>
                   {this.state.ingredient.ingredients && this.state.ingredient.ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item text-font">
                        {item}
                      </li>
                    );
                  })} 
                </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
