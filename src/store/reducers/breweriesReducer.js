import {
  GET_BREWERIES_START,
  GET_BREWERIES_SUCCESS, GET_BREWERY_BEERS_START, GET_BREWERY_BEERS_SUCCESS,
  GET_BREWERY_START,
  GET_BREWERY_SUCCESS
} from "../actions/actionType";

const initialState = {
  breweries: [],
  brewery: {},
  breweryBeers: [],
  loading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_BREWERIES_START:
      return {
        ...state,
        loading: true
      };
    case GET_BREWERIES_SUCCESS:
      return {
        ...state,
        breweries: action.breweries.data,
        loading: false
      };
    case GET_BREWERY_START:
      return {
        ...state,
        loading: true
      };
    case GET_BREWERY_SUCCESS:
      return {
        ...state,
        brewery: action.brewery.data,
        loading: false
      };
    case GET_BREWERY_BEERS_START:
      return {
        ...state,
        loading: true
      };
    case GET_BREWERY_BEERS_SUCCESS:
      return {
        ...state,
        breweryBeers: action.breweryBeers.data,
        loading: false
      };

    default:
      return state
  }
};

export default postReducer