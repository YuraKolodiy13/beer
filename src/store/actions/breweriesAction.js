import {
  GET_BREWERIES_START,
  GET_BREWERIES_SUCCESS,
  GET_BREWERY_BEERS_START, GET_BREWERY_BEERS_SUCCESS,
  GET_BREWERY_START,
  GET_BREWERY_SUCCESS
} from "./actionType";
import axios from "axios";
const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/proxy/' : '/proxy/';
const apiKey = 'b6410392f9a3d5c203e3ad32bcae0a71';

export const getBreweries = () => async dispatch => {
  dispatch({
    type: GET_BREWERIES_START
  });
  const response = await axios.get(`${apiUrl}v2/breweries/?key=${apiKey}`);
  dispatch({
    type: GET_BREWERIES_SUCCESS,
    breweries: response.data
  })
};

export const getBrewery = id => async dispatch => {
  dispatch({
    type: GET_BREWERY_START
  });
  const response = await axios.get(`${apiUrl}v2/brewery/${id}?key=${apiKey}`);
  dispatch({
    type: GET_BREWERY_SUCCESS,
    brewery: response.data
  })
};

export const getBreweryBeers = id => async dispatch => {
  dispatch({
    type: GET_BREWERY_BEERS_START
  });
  const response = await axios.get(`${apiUrl}v2/brewery/${id}/beers?key=${apiKey}`);
  dispatch({
    type: GET_BREWERY_BEERS_SUCCESS,
    breweryBeers: response.data
  })
};

