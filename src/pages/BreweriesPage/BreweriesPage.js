import React, {Component} from 'react'
import {connect} from "react-redux";
import StackGrid from "react-stack-grid";
import PostItem from "../../components/PostItem/PostItem";
import Loader from "../../components/Loader/Loader";
import {getBreweries} from "../../store/actions/breweriesAction";

class BreweriesPage extends Component{

  componentDidMount(){
    this.props.getBreweries()
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='wrapper posts'>
        <StackGrid
          columnWidth={"33.33%"}
        >
          {this.props.breweries && this.props.breweries.map((item, key) => (
            <PostItem item={item} key={key}/>
          ))}
        </StackGrid>
        <button onClick={this.props.getBeers}>Load more</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    breweries: state.breweries.breweries,
    loading: state.breweries.loading
  }
};

const mapDispatchToProps = {
  getBreweries: getBreweries
};


export default connect(mapStateToProps, mapDispatchToProps)(BreweriesPage);