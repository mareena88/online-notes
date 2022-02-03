// https://quotes-cyf.glitch.me/quotes/random
import React, { useState, useEffect } from 'react';
import '../../App.css';

const Footer = () => {

 const [quote, setQuote] = useState([]);

 useEffect(() => {
  fetch('https://quotes-cyf.glitch.me/quotes/random')
  .then(response => response.json())
  .then(data => {setQuote(data)})
  .catch(err => console.error(err))
 }, [])


 const pageModel = (
   <div className='footer container'>
     <h6>{quote.quote}</h6>
     <p>{quote.author}</p>
   </div>
 )
 return pageModel;
}

export default Footer;
