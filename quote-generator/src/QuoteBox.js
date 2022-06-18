import React from "react";

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            quotes: [{ quote: "this is quote one", author: "one" }, { quote: "this is quote two", author: "two" }, { quote: "this is quote three", author: "three" }, { quote: "this is quote four", author: "four" }]
        }
        this.handleClick = this.handleClick.bind(this);
        this.genQuote = this.genQuote.bind(this);
        this.updateQuote = this.updateQuote.bind(this);
    }

    genQuote(quotes) {
        const num = Math.floor(Math.random() * this.state.quotes.length);
        const quote = quotes[num].quote;
        const author = quotes[num].author;
        return { quote: quote, author: author }
    }

    updateQuote() {
        const data = this.genQuote(this.state.quotes);
        this.setState({ quote: data.quote, author: data.author });
    }

    handleClick(e) {
        e.preventDefault();
        this.updateQuote();
    }

    componentDidMount() {
        this.updateQuote();
    }

    render() {
        return (
            <div id="quote-box" >
                <blockquote id="text">{this.state.quote}</blockquote>
                <h4 id="author">{this.state.author}</h4>
                <button id="new-quote" type="button" onClick={this.handleClick}>New Quote</button>
                <a className="button" id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
            </div>
        );
    }
}

export default QuoteBox;