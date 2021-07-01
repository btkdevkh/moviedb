import React from 'react';
import { Link } from 'react-router-dom';

class MoviesList extends React.Component {

  render() {
    const { movies } = this.props;

    let divStyle = {
      width: '500px',
      margin: '25px auto',
      padding: '25px',
      borderRadius: '5px'
    }

    !this.props.borderVisible ? 
    divStyle.border = '' : 
    divStyle.border = '1px solid brown';

    return (
      <section style={divStyle}>
        {
          movies.map(movie => {
            return <div key={movie.id}><Link to={`/detail/${movie.id}`}>{movie.title}</Link></div>
          })
        }
      </section>
    )
  }
}

export default MoviesList;
