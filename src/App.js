import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import components
// import {ingredients} from './tempList';
import IngredientList from './components/IngredientList';
import IngredientDetail from './components/IngredientDetail';

class App extends Component {
  // api key jmgmail cfc23da9927444e5b904cd6af18396fe
  state = {
    ingredients: [],
    url: "https://www.food2fork.com/api/search?key=3323cc0d3e242c33ce83925d3bb9c017",
    base_url:"https://www.food2fork.com/api/search?key=3323cc0d3e242c33ce83925d3bb9c017",
    details_id: 35386,
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: ''
  };

  async getIngredients() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: `Sorry, that ingredient doesn't exist.`}
        })
      }
      else {
        this.setState({
          ingredients: jsonData.recipes
        })
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getIngredients();
  }
  
  handleDetailId = (id) => {
    // console.log(id);
    this.setState({
      details_id: id
    })
  }

  // alternative for routes
  displayPage = (index) => {
    switch(index) {
      default:
      case 1: 
        return  <IngredientList 
                  ingredients= {this.state.ingredients} 
                  handleDetailButton={this.handleDetailButton}
                  searchValue={this.state.search}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  error={this.state.error} />;
      case 0:
        return  <IngredientDetail 
                  id={this.state.details_id} 
                  handlePageIndex={this.handlePageIndex}/>;
    }
  }

  // on click button goBack IN details , go back and display ingredient list
  handlePageIndex = (index) => {
    console.log(index)
    this.setState({
      pageIndex: index
    })
  };

  // when click on details, display details and pull data
  handleDetailButton = (index, id) => {
    // console.log(index, id);
    this.setState({
      pageIndex: index,
      details_id: id
    })
  };

  // for input
  handleChange = e => {
    this.setState({
      search: e.target.value
    }, () => {
      console.log(this.state.search);
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url ,query, search } = this.state;
    this.setState(()=> {
      return {url:`${base_url}${query}${search}`, search:""}
    }, 
    // after set state call again getIngredients 
     () => {
        this.getIngredients();
    })
  };

  render() {
    // console.log(this.state.ingredients);
    return (
      <div className="App">
        {this.displayPage(this.state.pageIndex)}
      </div>
    );
  }
}

export default App;
