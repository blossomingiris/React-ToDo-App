import style from './Quote.module.css';
import React, { useEffect, useState } from "react";


function Quote() {

	//Generate quote

	const [text, setText] = useState();
	// const [author, setAuthor] = useState('');


	//Function to collect data from API

	const getQuotes = async () => {
		const response = await fetch(
			"https://type.fit/api/quotes"
		).then((response) => response.json());
		let dataQuotes = response;
		let randomNum = Math.floor(Math.random() * dataQuotes.length);
		let randomQuote = response[randomNum].text;
		// let randomQuoteAuthor = response[randomNum].author;
		setText(randomQuote)
		// setAuthor(randomQuoteAuthor)
	};

	//use effect shows a random quote just after mounting app
	useEffect(() => {
		getQuotes();
	}, []);


	return (
		<div className={style.quote}>
			<div><p onClick={getQuotes}>{text}</p></div>
		</div>
	)
}

export default Quote