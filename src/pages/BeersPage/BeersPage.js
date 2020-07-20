import React, {Component} from 'react'
import {connect} from "react-redux";
import {getBeers} from "../../store/actions/beersAction";
import StackGrid from "react-stack-grid";
import PostItem from "../../components/PostItem/PostItem";
import Loader from "../../components/Loader/Loader";


class BeersPage extends Component{

  componentDidMount(){
    this.props.getBeers()
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='wrapper posts'>
        <StackGrid
          columnWidth={"25%"}
        >
          {this.props.beers && this.props.beers.map((item, key) => (
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
    beers: state.beers.beers,
    loading: state.beers.loading
  }
};

const mapDispatchToProps = {
  getBeers: getBeers
};


export default connect(mapStateToProps, mapDispatchToProps)(BeersPage);