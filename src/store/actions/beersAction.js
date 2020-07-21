import {GET_BEER_START, GET_BEER_SUCCESS, GET_BEERS_START, GET_BEERS_SUCCESS} from "./actionType";
import axios from "axios";
const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/proxy/' : '/proxy/';
const apiKey = 'b6410392f9a3d5c203e3ad32bcae0a71';
const proxyCorsService = 'https://thingproxy.freeboard.io/fetch';
let beersCurrentPage = 1;

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

export const getBeers = () => async dispatch => {
  dispatch({
    type: GET_BEERS_START,
    page: beersCurrentPage
  });
  const response = await axios.get(`${apiUrl}v2/beers/?key=${apiKey}&p=${beersCurrentPage}`);
  beersCurrentPage += 1;
  dispatch({
    type: GET_BEERS_SUCCESS,
    beers: response.data
  })
};

export const getBeer = id => async dispatch => {
  dispatch({
    type: GET_BEER_START
  });
  const response = await axios.get(`${proxyCorsService}/${apiUrl}beer/${id}?key=${apiKey}`);
  dispatch({
    type: GET_BEER_SUCCESS,
    beer: response.data
  })
};

