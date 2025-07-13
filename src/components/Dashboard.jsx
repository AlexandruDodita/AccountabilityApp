import DashboardHeader from "./dashboardComponents/DashboardHeader";
import Sidebar from "./dashboardComponents/Sidebar";
import StatsCard from "./dashboardComponents/StatsCard";
import WidgetsArea from "./dashboardComponents/WidgetsArea";

function Dashboard(){
    return (<div className="dashboard">

    <Sidebar />

    <main className="main-content">

        <DashboardHeader />

        <StatsCard />

        <WidgetsArea />
        
    </main>
</div>)
}

export default Dashboard;