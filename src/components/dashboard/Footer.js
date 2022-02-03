// https://quotes-cyf.glitch.me/quotes/random
import React, { useState, useEffect } from 'react';
import '../../App.css';

const Footer = () => {

 const [quote, setQuote] = useState([]);

 // useEffect(() => {
 //  fetch('https://quotes-cyf.glitch.me/quotes/random')
 //  .then(response => response.json())
 //  .then(data => {setQuote(data)})
 //  .catch(err => console.error(err))
 // }, [])

 const fetchQuote = async () => {
  return await fetch('https://quotes-cyf.glitch.me/quotes/random')
  .then(response => response.json());
 }

 const newQuote = async () => {
  setQuote(await fetchQuote());
 }



 const pageModel = (
   <div className='footer container'>
    <div className='card-panel'>
     <div className="blue-text text-darken-2">
      <h5>{quote.quote}</h5>
      <p>{quote.author}</p>
     </div>
     <button className="waves-effect waves-light btn btn-quote" onClick={newQuote}>new quote</button>
     {/* <i class="material-icons">refresh</i> */}
     <button className="waves-effect waves-light btn btn-quote" onClick={() =>  navigator.clipboard.writeText(quote.quote)}
>
  Copy
</button>
    </div>
   </div>
 )
 return pageModel;
}

export default Footer;
