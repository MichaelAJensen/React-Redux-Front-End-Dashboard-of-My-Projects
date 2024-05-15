import Quotes from './quotes.json'

let quoteArr = Quotes

function randomQuotes() {

const quote = quoteArr[Math.floor(Math.random()* quoteArr.length)]
return quote;
}

export default randomQuotes
