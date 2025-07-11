

function StatsCard(){
    return (<section className="stats-grid">
            <div className="stat-card">
                <div className="stat-card__icon revenue"></div>
                <h3 className="stat-card__title">Total Revenue</h3>
                <p className="stat-card__value">$54,233</p>
                <p className="stat-card__change positive">+2.5%</p>
            </div>
            <div className="stat-card">
                <div className="stat-card__icon orders"></div>
                <h3 className="stat-card__title">Total Orders</h3>
                <p className="stat-card__value">1,250</p>
                <p className="stat-card__change positive">+5.1%</p>
            </div>
            <div className="stat-card">
                <div className="stat-card__icon customers"></div>
                <h3 className="stat-card__title">New Customers</h3>
                <p className="stat-card__value">82</p>
                <p className="stat-card__change negative">-1.2%</p>
            </div>
            <div className="stat-card">
                <div className="stat-card__icon pending"></div>
                <h3 className="stat-card__title">Pending Tasks</h3>
                <p className="stat-card__value">14</p>
                <p className="stat-card__change">In 3 projects</p>
            </div>
        </section>);
}

export default StatsCard;