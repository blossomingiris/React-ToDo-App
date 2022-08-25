import style from './Quote.module.css'
import { useEffect, useState } from 'react'

function Quote() {
  //Generate quote

  const [text, setText] = useState()

  const getQuotes = async () => {
    const response = await fetch('https://type.fit/api/quotes').then(
      (response) => response.json()
    )
    let dataQuotes = response
    let randomNum = Math.floor(Math.random() * dataQuotes.length)
    let randomQuote = response[randomNum].text
    setText(randomQuote)
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className={style.quote}>
      <div>
        <p onClick={getQuotes}>{text}</p>
      </div>
    </div>
  )
}

export default Quote
