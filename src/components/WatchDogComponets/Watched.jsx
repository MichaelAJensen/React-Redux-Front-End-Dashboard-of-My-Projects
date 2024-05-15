import React from "react"

class Watched extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <h6 className="watchlist-header">Already Watched</h6>
                    <div>
                        {this.props.alreadyWatched.map((movie, i) => {
                            return (
                                <div className="watchlist" key={i}>
                                    <h6>Title:  {movie.title}</h6>
                                    <button className="button3" type="button" onClick={() => this.props.veryLastDelete(movie.id)}>Delete</button>                              
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}
export default Watched








