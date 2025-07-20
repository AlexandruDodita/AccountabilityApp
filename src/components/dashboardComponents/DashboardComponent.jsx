import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import WidgetsArea from "./WidgetsArea";

function DashboardComponent(){
    return (<div><DashboardHeader />

        <StatsCard />

        <WidgetsArea />
        </div>);
}

export default DashboardComponent