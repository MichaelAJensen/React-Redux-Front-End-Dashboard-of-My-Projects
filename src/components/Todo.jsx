
import React from "react"
import Form from "../components/WatchDogComponets/Form"
import Card from "../components/WatchDogComponets/Card"
import Watched from "../components/WatchDogComponets/Watched"
import img3 from "../assets/data/pexels-matej-1074882.jpg"

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            alreadyWatched: [],
            title: "",
            director: "",
            genre: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleAddMovie = this.handleAddMovie.bind(this)
        this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
        this.veryLastDelete = this.veryLastDelete.bind(this)
    }
    handleInput(e) {
        let { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    componentDidUpdate() {

    }
    handleAddMovie(e) {
        e.preventDefault()
        let movie = {
            title: this.state.title,
            director: this.state.director,
            genre: this.state.genre,
        }
        movie.id = Math.floor(Math.random() * 900000)

        this.setState({
            ...this.state,
            movies: [movie, ...this.state.movies],
            title: "",
            director: "",
            genre: ""
        })

    }
    handleDeleteMovie(id) {
        let deletedMovie = this.state.movies.filter(movie => movie.id !== id)
        let theChosenOne = this.state.movies.filter(movie => movie.id === id)[0]
        this.setState({
            movies: deletedMovie,
            alreadyWatched: [theChosenOne, ...this.state.alreadyWatched]
        })

    }
    veryLastDelete(id) {
        let deletedMovie = this.state.alreadyWatched.filter(movie => movie.id !== id)
        this.setState({
            alreadyWatched: deletedMovie,
        })
    }
    render() {
        return (
            //Good template for a form
            
                <div className="wrapper2">
                   
                    <h3>Movie Watch Dog</h3>
                    {/* <img src={img3} className="dogPic" /> */}
                    <div className="input">
                        <Form
                            title={this.state.title}
                            genre={this.state.genre}
                            director={this.state.director}
                            handleAddMovie={this.handleAddMovie}
                            handleInput={this.handleInput}
                        />
                        <br />
                        <Card
                            movies={this.state.movies}
                            handleDeleteMovie={this.handleDeleteMovie}
                        />
                        <hr className="hr"/>
                        <br />
                        <Watched
                            alreadyWatched={this.state.alreadyWatched}
                            veryLastDelete={this.veryLastDelete} />
                        <br />
                       
                    </div>
                </div>        

        )
    }
}
export default Todo














