import React from 'react'

class MagicEightBall extends React.Component {
    constructor() {
        super()
        this.state = {
            answers: ["Yes", "No", "Maybe so", "Not today", "Not a chance", "Never!", "Maybe tomorrow", "Forget about it!"],
            answer: "8"         
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        let random = Math.floor(Math.random() * this.state.answers.length)
        this.setState({
            ...this.state,
            answer: this.state.answers[random]
        })
    }

    render() {
        return (
            <div className="magicEightBall" >            

                <div className="magicEightBallHeader"><h3>Magic Eight Ball</h3></div>
                <button className="ball"
                    onClick={this.handleClick}>
                 
                    <h3 className={this.state.answer==="8"?"eight":null}>{this.state.answer}</h3>
                </button>
                <h6>Ask the magicEightBall a question and click it for your answer!</h6>
            </div >
        )
    }
}
export default MagicEightBall