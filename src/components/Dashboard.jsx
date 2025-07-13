import Sidebar from "./dashboardComponents/Sidebar";
import StatsCard from "./dashboardComponents/StatsCard";

function Dashboard(){
    return (<div className="dashboard">

    <Sidebar />

    <main className="main-content">

        <header className="main-header">
            <div className="main-header__title">
                <h2>Welcome Back, Alex!</h2>
                <p>Here's what your stats are for today.</p>
            </div>
            <div className="main-header__actions">
                <input type="search" placeholder="Search..." className="search-bar" />
                <button className="action-button notification-button"><i className="icon-bell"></i></button>
                <div className="user-profile">
                    <img src="https://i.pravatar.cc/40" alt="User Avatar" className="user-avatar" />
                    <span className="user-name">A. Dodita</span>
                </div>
            </div>
        </header>

    <StatsCard />

        <div className="widgets-area">
            
            <div className="widget">
                <div className="widget__header">
                    <h4>Performance</h4>
                    <select className="widget__filter">
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Year</option>
                    </select>
                </div>
                <div className="widget__body">
                    <div className="chart-placeholder">Chart Goes Here</div>
                </div>
            </div>

            <div className="widget">
                <div className="widget__header">
                    <h4>Recent Activity</h4>
                    <a href="#" className="widget__link">View All</a>
                </div>
                <div className="widget__body">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#87F34</td>
                                <td>Jane Cooper</td>
                                <td>$250.00</td>
                                <td><span className="status shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>#91A2B</td>
                                <td>John Doe</td>
                                <td>$135.50</td>
                                <td><span className="status processing">Processing</span></td>
                            </tr>
                            <tr>
                                <td>#44C8F</td>
                                <td>Cody Fisher</td>
                                <td>$89.99</td>
                                <td><span className="status shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>#19B45</td>
                                <td>Robert Fox</td>
                                <td>$450.75</td>
                                <td><span className="status cancelled">Cancelled</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</div>)
}

export default Dashboard;