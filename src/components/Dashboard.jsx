import AccountabilityComponent from "./accountabilityComponents/AccountabilityComponent";
import AnalyticsComponent from "./analyticsComponents/AnalyticsComponent";
import CalendarComponent from "./calendarComponents/CalendarComponent";
import DashboardComponent from "./dashboardComponents/DashboardComponent";
import Sidebar from "./dashboardComponents/Sidebar";
import StatsCard from "./dashboardComponents/StatsCard";
import WidgetsArea from "./dashboardComponents/WidgetsArea";
import { useState } from "react";


function Dashboard(){

    const [activeView, setActiveView] = useState('dashboard');

    return (<div className="dashboard">

    <Sidebar activeView={activeView} onNavigate={setActiveView}/>

    <main className="main-content">

        {activeView==='dashboard' && <DashboardComponent />}
        {activeView==='calendar' && <CalendarComponent />}
        {activeView==='analytics' && <AnalyticsComponent />}
        {activeView==='accountability' && <AccountabilityComponent />}

    </main>
</div>)
}

export default Dashboard;