import { clsx } from 'clsx';

export default function Keyboard({alphabet, handleClick, guessedLetters, currentWord, isGameOver}) {

    const keyboard = [...alphabet].map((key, index) => {

        const isGuessed = guessedLetters.includes(key)
        const isCorrect = isGuessed && currentWord.includes(key)
        const isWrong = isGuessed && !currentWord.includes(key)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button className={className} key={index} onClick={ () => handleClick(key) } disabled={isGameOver}> {key} </button>
        )
    })

    return (
        <section className="keyboard">
            {keyboard}
        </section>
    )
}