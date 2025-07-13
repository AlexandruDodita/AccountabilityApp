

function SingleStatCard(props){
    const card_change = `stat-card__change ${props.changeType}`;


    return ( <div className="stat-card">
                <div className="stat-card__icon revenue"></div>
                <h3 className="stat-card__title">{props.title}</h3>
                <p className="stat-card__value">{props.value}</p>
                <p className={card_change}>{props.change}</p>
            </div>)
}


export default SingleStatCard;