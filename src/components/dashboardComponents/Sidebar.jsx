
function Sidebar(){
    return ( <aside className="sidebar">
        <div className="sidebar__header">
            <h1 className="sidebar__logo">Logo</h1>
        </div>
        <nav className="sidebar__nav">
            <ul>
                <li><a href="#" className="nav-item active"><i className="icon-dashboard"></i> Dashboard</a></li>
                <li><a href="#" className="nav-item"><i className="icon-calendar"></i> Calendar</a></li>
                <li><a href="#" className="nav-item"><i className="icon-analytics"></i> Analytics</a></li>
                <li><a href="#" className="nav-item"><i className="icon-accountability"></i> Accountability </a></li>
                <li><a href="#" className="nav-item"><i className="icon-placeholder"></i> Placeholder </a></li>
            </ul>
        </nav>
        <div className="sidebar__footer">
            <a href="#" className="nav-item"><i className="icon-settings"></i> Settings</a>
            <a href="#" className="nav-item"><i className="icon-logout"></i> Logout</a>
        </div>
    </aside>);
}

export default Sidebar;