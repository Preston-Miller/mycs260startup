import React from 'react';
import './about.css';

export function About(props) {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    React.useEffect(() => {
        fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
      }, []);
      
  return (
    <main>
        <div className="picture-box">
            <img src="mother.avif" width ="100%" alt="random" />
        </div>
        <div id="quote" className="quote-box bg-light text-dark">
            <h1>Quote of the Day</h1>
            <p className="quote">{quote}</p>
            <p className="author">{quoteAuthor}</p>
        </div>
        <div id="about-us">
            <h1>About Us</h1>
            <p>Bumptalk is a community platform specifically designed for expecting women to connect, 
            share experiences, and support one another. It aims to provide a safe and engaging 
            space for conversations and resource sharing during pregnancy.</p>
        </div>
    </main> 
  );
}