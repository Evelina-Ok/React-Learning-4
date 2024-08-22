import style from './Team.module.scss';

export const Team = (props) => {
    return (
        <>
        <div className={style.teamStyle}>
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>
        </>
    )
}