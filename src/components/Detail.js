import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie, getCompanyDetails } from '../api/movie';
import moment from 'moment';


class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      companies: []
    }
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log(id);

    getMovie(id)
      .then(movie => {
        console.log(movie);
        this.setState({ movie: movie })

        movie.production_companies.map(company => {
          return getCompanyDetails(company.id)
            .then(res => {
              this.setState({ 
                companies: [...this.state.companies, res]
              }, () => {
                console.log(this.state);
              })
            })
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    let divStyle = {
      width: '500px',
      margin: '25px auto',
      padding: '25px',
      border: '1px solid black'
    }
    
    const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    return (
      <>
      <article style={divStyle}>
        {
          this.state.movie !== null &&
          <div>
            <img src={`${url_img}/${this.state.movie.poster_path}`} alt={this.state.movie.title} />
            <p>{this.state.movie.overview}</p>
            <p>{moment(this.state.movie.release_date).local('fr').format('LL')}</p>

            <ul>
              {this.state.companies.map(company => {
                return (
                  <li key={company.id}>
                    <a href={company.homepage}>{company.name}</a>
                    <p>{company.headquarters}</p>
                  </li>
                )
              })}
            </ul>
            
          </div>
        }
      </article>
      <Link to="/">Retour</Link>
      </>
    )
  }
}

export default Detail
