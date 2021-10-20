import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

export const seachMoviesWithKeyWord = (ketword) => {
  let url = `https://api.themoviedb.org/3/search/movie?`;
  let query = `api_key=${api_key}&query=${ketword}`;

  return axios.get(url+query)
    .then((response) => {
      console.log(response.data);
      return response.data
    })
}

export const getMovie = (id) => {
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;

  return axios.get(url)
    .then(res => {
      console.log(res.data);
      return res.data
    })
}

export const getCompanyDetails = (id) => {
  let url_company = 'https://api.themoviedb.org/3/company/'+id+'?api_key='+api_key;

  return axios.get(url_company)
    .then(res => {
      console.log(res.data);
      return res.data
    })
}
