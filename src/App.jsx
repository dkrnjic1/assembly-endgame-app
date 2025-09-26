import Header from './components/Header.jsx'
import Languages from './components/Languages.jsx'
import {useState} from 'react'
import {languages} from './js/languagesData.js'
import Word from './components/Word.jsx'
import Keyboard from './components/Keyboard.jsx'
import Message from './components/Message.jsx'
import { getRandomWord } from './js/utils.js'
import Confetti from 'react-confetti'

export default function AssemblyEndgame() {

  const [ languagesList, setLanguagesList ] = useState(languages)
  const [ currentWord, setCurrectWord ] = useState(() => getRandomWord())
  const [ keyboardKeys, setKeyboardKeys ] = useState("abcdefghijklmnopqrstuvwxyz")
  const [ guessedLetters, setGuessedLetters ] = useState([])
  const [ countWrongGuesses, setCountWrongGuesses ] = useState(0)
  const isGameLost = countWrongGuesses >= languages.length - 1 
  const isGameWon = [...currentWord].every(letter => guessedLetters.includes(letter))
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  
  const letterClick = (letter) => {
    setGuessedLetters(prevGuessedLetters => 
      prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter]
    );
    currentWord.includes(letter) ? countWrongGuesses : setCountWrongGuesses(prevCount => prevCount + 1)
  }
  function startNewGame() {
    setCurrectWord(getRandomWord())
    setGuessedLetters([])
  }
  return (
    <>
    {
      isGameWon && <Confetti recycle={false} numberOfPieces={1000} />
    }
      <Header />
      <Message isGameLost={isGameLost} isGameWon={isGameWon} languages={languagesList} count={countWrongGuesses} isLastGuessIncorrect={isLastGuessIncorrect}/>
      <Languages items={languagesList} count={countWrongGuesses}/>
      <Word word={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost}/>
      <Keyboard alphabet={keyboardKeys} handleClick={letterClick} guessedLetters={guessedLetters} currentWord={currentWord} isGameOver={isGameLost || isGameWon}/>
      {(isGameLost || isGameWon) ? <button className='newGame' onClick={startNewGame}>New Game</button> : undefined}
    </>
  )
}