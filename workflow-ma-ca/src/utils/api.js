import axios from 'axios';

export const BASE_URL = 'https://ma3-strapi.herokuapp.com/';
export const MAKEUP_URL = 'makeup-brands';
// export const POPULATE = '?populate=*';

export const getData = (url) => {
  axios.get(url).then((response) => console.log(response.data.data));
};

export const getAnimals = getData(BASE_URL + MAKEUP_URL);