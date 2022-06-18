const quotes = [{ quote: "this is quote one", author: "one" }, { quote: "this is quote two", author: "two" }, { quote: "this is quote three", author: "three" }, { quote: "this is quote four", author: "four" }];

const QuoteBox = () => {
    return (
        <div id="quote-box">
            <blockquote id="text">{quotes[0].quote}</blockquote>
            <h4 id="author">{quotes[0].author}</h4>
            <button id="new-quote" type="button">New Quote</button>
            <a className="button" id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
        </div>
    )
}

export default QuoteBox;