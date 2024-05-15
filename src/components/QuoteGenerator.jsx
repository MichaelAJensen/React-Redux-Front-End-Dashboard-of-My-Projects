
import React from 'react'
import quotes from '../assets/data/quotes.json'
// import './index.css'

// console.log(quotes)

class QuoteGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            quotes: [],
            quote: {},
            alreadySaid: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            quotes,
        })

    }
    handleClick() {
        let random = Math.floor(Math.random() * this.state.quotes.length)

        let quoteCheck = this.state.quotes[random]

        if (!this.state.alreadySaid.some(quote => quote.quoteText === quoteCheck)) {

            this.setState({
                ...this.state,
                quote: quoteCheck,
                alreadySaid: [this.state.quote, ...this.state.alreadySaid]
            })
        } else {
            this.handleClick()
        }
    }
    render() {
        //this is where you can do javaScript and build it!
        // console.log(this.state.alreadySaid)
        return (

            <div className='quoteWrapper'>             <div className='underWrapper'>
                <h3>Quote Generator</h3>
                {
                    // this.state.alreadySaid.length <= 5000  ?
                    <div className='quote-box'>
                        <button className='quoteBtn' onClick={this.handleClick}>CLICK ME

                            for a Quote</button>
                        <h3>My random quote is: </h3>

                        <h5>"{this.state.quote.quoteText}" </h5>


                        {(this.state.quote.quoteAuthor && <h4>My quote's author is: </h4>)}

                        <h5>{this.state.quote.quoteAuthor}</h5>
                        {/* </div> :
                        <div><h1>There are no more quotes to show!</h1> */}
                    </div>
                }
            </div>
            </div>
        )
    }

}
export default QuoteGenerator





