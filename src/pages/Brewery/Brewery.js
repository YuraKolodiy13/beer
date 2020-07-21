import React, {Component} from 'react'
import './Brewery.scss'
import {connect} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {getBrewery, getBreweryBeers} from "../../store/actions/breweriesAction";
import PostItem from "../../components/PostItem/PostItem";
import StackGrid from "react-stack-grid";

class Brewery extends Component{
  componentDidMount(){
    this.props.getBrewery(this.props.match.params.id);
    this.props.getBreweryBeers(this.props.match.params.id);
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div>
        <PostItem item={this.props.brewery} />

        <StackGrid
          columnWidth={"20%"}
        >
          {this.props.breweryBeers && this.props.breweryBeers.map((item, key) => (
            <PostItem item={item} key={key}/>
          ))}
        </StackGrid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    brewery: state.breweries.brewery,
    breweryBeers: state.breweries.breweryBeers,
    loading: state.breweries.loading
  }
};
const mapDispatchToProps = {
  getBrewery: getBrewery,
  getBreweryBeers: getBreweryBeers
};

export default connect(mapStateToProps, mapDispatchToProps)(Brewery)