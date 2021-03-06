import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import quotesData from "./quotes.json";

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            quotes: [...quotesData]
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
            <div id="quote-box" className="container" >
                <figure className="text-center">
                    <blockquote id="text" className="blockquote">
                        <p>"{this.state.quote}"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer" id="author"><cite title={this.state.author}>{this.state.author}</cite></figcaption>
                </figure>
                <div className="row">
                    <div className="col"><a className="button" id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"><i className="bi bi-twitter"></i></a></div>
                    <div className="col"><button id="new-quote" type="button" className="btn btn-primary" onClick={this.handleClick}>New Quote</button></div>
                </div>
            </div >
        );
    }
}

export default QuoteBox;