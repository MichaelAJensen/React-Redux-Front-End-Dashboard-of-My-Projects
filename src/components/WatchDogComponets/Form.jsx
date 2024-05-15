import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      
        return (            
                <div>
                    <h3 className="form-header"> 
                    {/* Movie Watchdog */}
                    </h3>
                    <form className="form" onSubmit={this.props.handleAddMovie}>
                        <input className="inputBox" type="text"
                            placeholder="Title"
                            name="title"
                            value={this.props.title}
                            onChange={this.props.handleInput}
                            required />
                        <input className="inputBox" type="text"
                            placeholder="Director"
                            name="director"
                            value={this.props.director}
                            onChange={this.props.handleInput}
                            required />
                        <input className="inputBox" type="text"
                            placeholder="Genre"
                            name="genre"
                            value={this.props.genre}
                            onChange={this.props.handleInput}
                            required />
                        <input className="button1" 
                        placeholder="Add"
                        type="submit" />
                    </form>
                      
                </div>
        )
    }
}
export default Form
            
                    







