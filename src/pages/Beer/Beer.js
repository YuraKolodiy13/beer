import React, {Component} from 'react'
import './Beer.scss'
import {connect} from "react-redux";
import {getBeer} from "../../store/actions/beersAction";
import Loader from "../../components/Loader/Loader";

class Beer extends Component{
  componentDidMount(){
    this.props.getBeer(this.props.match.params.id);
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className="post">
        utyuty
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    beer: state.beers.beer,
    loading: state.beers.loading
  }
};
const mapDispatchToProps = {
  getBeer: getBeer
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer)