import { clsx } from 'clsx';

export default function Languages({items, count}) {

     const languageElements = items.map((item) => {
        const styles = {
            backgroundColor: item.backgroundColor,
            color: item.color
        }

        const isLost = item.id <= count 
        const className = clsx({
            lost: isLost
        })
        return (
            <span 
                className={className}  
                style={styles}
                key={item.name}
            >
                {item.name}
            </span>
        )
     })
    return(
        <section className="language-chips">
            {languageElements}
        </section>
    )
}