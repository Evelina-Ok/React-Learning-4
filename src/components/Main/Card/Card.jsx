import style from './Card.module.scss'

export const Card = ({headerText, cardContent}) => {
    return (
        <>
        <div className={style.cardsStyle}>
            <header>
                <h3>{headerText}</h3>
            </header>
            <p>
                {cardContent}
            </p>
        </div>
        </>
    )
}