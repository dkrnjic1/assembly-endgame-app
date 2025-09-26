import {getFarewellText} from '../js/utils.js'
import { clsx } from 'clsx'
import {useRef} from 'react'

export default function Message({isGameLost, isGameWon, count, languages, isLastGuessIncorrect}) {

    const lastFarewellRef = useRef(null)

    const determineMessage = () => {
            if(isGameLost) {
                return "You lose! Better start learning Assembly 😭"
            } else if (isGameWon) {
                return "Well done!"
            } else if(!(isGameWon || isGameLost) && isLastGuessIncorrect) {
                lastFarewellRef.current = getFarewellText(languages.at(count - 1).name)
                return lastFarewellRef.current
            }
            else return lastFarewellRef.current
        }

    const messageElement = (
        <>
        {(isGameLost || isGameWon) ? (
            <h2>{isGameWon ? "You won!🎉" : "You lost!"}</h2>
        ) : null
        }
        <p className={clsx({ itallicText: !isGameLost && !isGameWon })}>
            {determineMessage()}
        </p>
        </>
    ) 
    const sectionClass = clsx("message", {
        won: isGameWon,
        lost: isGameLost,
        neutral: !isGameLost && !isGameWon && count != 0,
    })

    return(
        <section className={sectionClass}>
            {messageElement}
        </section>
    )
}