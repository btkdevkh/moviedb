import React from 'react';
import MoviesList from './MoviesList';
import { seachMoviesWithKeyWord } from '../api/movie';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      movies: [],
      borderVisible: false,
      error: null
    }
  }

  onClickSubmit() {

    if(!this.state.search) {
      this.setState({ error: 'Le champ de recherche est vide' });
    } else {
      seachMoviesWithKeyWord(this.state.search)
      .then(res => {
        console.log(res.results);
        this.setState({ movies: res.results });
        this.setState({ borderVisible: true });
        this.setState({ search: '' });
        this.setState({ error: null });
      })
    }
    
  }

  render() {
    const formStyle = {
      padding: '10px',
      width: '325px'
    }

    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.onClickSubmit();
          }}
        >
          <input
            style={formStyle}
            type="text"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value })
            }}
            placeholder="Trouver un film"
          />

          <input type="submit" value="Envoyer" />
          
        </form>

        <p>{this.state.error && this.state.error}</p>

        <MoviesList movies={this.state.movies} borderVisible={this.state.borderVisible} />
      </>
    )
  }
}

export default Form;