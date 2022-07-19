import { useEffect, useState } from "react";
import QuoteText from "./QuoteText";

const QuoteBox = () => {

    // States
    const [fade, setFade] = useState('fade-in');
    const [quote, setQuote] = useState({})
    const [tweetQuote, setTweetQuote] = useState('');
    const quotes = require("success-motivational-quotes");

    // useEffect
    useEffect(() => {
        newQuoteHandler();
        //eslint-disable-next-line
    }, []);

    // Event handlers
    const newQuoteHandler = () => {
        let color = randomColors();
        let quote = quotes.getTodaysQuote();
        setFade('fade-out');
        setTimeout(() => {
            colorChanged(color);
            setQuote(quote);
            setFade('fade-in');
            //eslint-disable-next-line
            setTweetQuote('https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quote.body + '" ' + quote.by);
        }, 800);
    }

    const randomColors = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const colorChanged = (color: string) => {
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        document.body.style.transition = "all .5s ease";
    }

    return (
        <div id='quote-box' className='quote-box'>
            <QuoteText quoteText={quote} fade={fade} />
            <div className='buttons'>
                <a className='button' id='tweet-quote' title='Tweet this quote'
                    target='_blank' rel='noreferrer' href={tweetQuote}>
                    <i className='fa fa-twitter'></i>
                </a>
                <button className='button' id='new-quote' onClick={newQuoteHandler}>New quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;