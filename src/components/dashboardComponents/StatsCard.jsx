import SingleStatCard from "./SingleStatCard";

function StatsCard(){
    return (<section className="stats-grid">
            <SingleStatCard title="Total Productivity Score" value="10,000" changeType="positive" change="+2.5%"/>
            <SingleStatCard title="Productivity Score Today" value="85" changeType="positive" change="+8%"/>
            <SingleStatCard title="Accountability Punishments" value="3" changeType="negative" change="+25%"/>
            <SingleStatCard title="Pending Tasks" value="14" changeType="" change="In 3 projects"/>
     
        </section>);
}

export default StatsCard;