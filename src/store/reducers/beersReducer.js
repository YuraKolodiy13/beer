import {GET_BEER_START, GET_BEER_SUCCESS, GET_BEERS_START, GET_BEERS_SUCCESS} from "../actions/actionType";

const initialState = {
  beers: [],
  beer: {},
  loading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_BEERS_START:
      return {
        ...state,
        loading: action.page === 1
      };
    case GET_BEERS_SUCCESS:
      return {
        ...state,
        beers: [...state.beers, ...action.beers.data],
        loading: false
      };
    case GET_BEER_START:
      return {
        ...state,
        loading: true
      };
    case GET_BEER_SUCCESS:
      return {
        ...state,
        beer: action.beer.data,
        loading: false
      };

    default:
      return state
  }
};

export default postReducer