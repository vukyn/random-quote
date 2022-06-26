import React from 'react';
const quotes = require("success-motivational-quotes");

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: {},
            fade: 'fade-in',
            color: '',
            tweetQuote: ''
        }
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    handleNewQuote = () => {
        let color = this.randomColors();
        let quote = quotes.getTodaysQuote()
        this.setState({
            fade: 'fade-out'
        });
        setTimeout(() => {
            this.colorChanged(color);
            this.setState({
                quoteText: quote,
                fade: 'fade-in',
                // eslint-disable-next-line
                tweetQuote: 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quote.body + '" ' + quote.by
            })
        }, 800);
    }

    colorChanged = (color) => {
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        document.body.style.transition = "all .5s ease";
        document.body.style.WebkitTransition = "all .5s ease";
        document.body.style.MozTransition = "all .5s ease";
    }

    randomColors = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    componentDidMount() {
        let color = this.randomColors();
        let quote = quotes.getTodaysQuote()
        this.setState({
            fade: 'fade-out'
        });
        setTimeout(() => {
            this.colorChanged(color);
            this.setState({
                quoteText: quote,
                fade: 'fade-in',
                // eslint-disable-next-line
                tweetQuote: 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quote.body + '" ' + quote.by
              })
        }, 800);
    }

    render() {
        return (
            <div id='quote-box' className='quote-box'>
                <QuoteText quoteText={this.state.quoteText} fade={this.state.fade} />
                <div className='buttons'>
                    <a className='button' id='tweet-quote' title='Tweet this quote'
                        target='_blank' href={this.state.tweetQuote}>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <button className='button' id='new-quote' onClick={this.handleNewQuote}>New quote</button>
                </div>
            </div>
        );
    }
}

const QuoteText = (props) => {
    return (
        <div className={props.fade}>
            <div className='quote-text'>
                <i className='fa fa-quote-left'></i>
                <span id='text'>{props.quoteText.body}</span>
            </div>
            <div className='quote-author'>
                <span id='author'>{props.quoteText.by}</span>
            </div>
        </div>
    );
}

export default QuoteBox;