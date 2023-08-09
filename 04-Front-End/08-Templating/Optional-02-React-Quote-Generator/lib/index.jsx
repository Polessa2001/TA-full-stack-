const Quote = ({ quote }) => {
  if (quote === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quote">
      <p className="quote-text">
        <span>“</span>
        {quote.text}
        <span>“</span>
      </p>
      <span className="quote-author">- {quote.author}</span>
    </div>
  );
};

const App = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [currentQuote, setCurrentQuote] = React.useState(null);

  const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const getNewQuote = (quotes) => {
    const newQuote = getRandomQuote(quotes);
    setCurrentQuote(newQuote);
  };

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        getNewQuote(data);
      });
  }, []);

  return (
    <div className="container">
      <Quote quote={currentQuote} />
      <button
        className="btn btn-primary mt-3"
        onClick={() => getNewQuote(quotes)}
      >
        More inspiration
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
