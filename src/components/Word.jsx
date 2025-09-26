import {clsx} from 'clsx'

export default function Word({word, guessedLetters, isGameLost}) {
    const letters = [...word].map((item, index) => {

        const className = clsx({
            revealedLetters: isGameLost && !guessedLetters.includes(item)
        })

        return (
            <span 
                key={index}
                className={className}
            >
                {guessedLetters.includes(item) || isGameLost ? item : ""} 
            </span>
        )
     })
    return(
        <section className="letters">
            {letters}
        </section>
    )
}