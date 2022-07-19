interface IQuoteText {
    fade: string;
    quoteText: any;
}

const QuoteText = (props: IQuoteText) => {
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

export default QuoteText