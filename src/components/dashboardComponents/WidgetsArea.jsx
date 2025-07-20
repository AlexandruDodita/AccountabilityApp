

function WidgetsArea(){
    return (<div className="widgets-area">
            
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
                    <div className="chart-placeholder">Chart Goes Here</div> {// TODO REPLACE WITH DYNAMIC CHART LOADING
                                                                            }
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
                                <th>Task</th>
                                <th>Difficulty</th>
                                <th>Score</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Do the dishes</td>
                                <td>Medium</td>
                                <td>70</td>
                                <td><span className="status shipped">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Placeholder Task </td>
                                <td>Placeholder Dif</td>
                                <td>99</td>
                                <td><span className="status processing">In course</span></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default WidgetsArea