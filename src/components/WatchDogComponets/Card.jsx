import React from "react"

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      
        return (
            <div>
                <h6 className="watchlist-header">Movies To Watch</h6>
                <div>
                    {this.props.movies.map((movie, i) => {
                        return (
                            <div className="watchlist" key={i}>
                                <h6>Title:  {movie.title}</h6>
                                <h6>Director: {movie.director} </h6>
                                <h6>Genre: {movie.genre} </h6>
                                <div>
                                    <button className="button2" onClick={() => this.props.handleDeleteMovie(movie.id)}>Watched</button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Card




