import { useAuth } from "../../context/AuthContext";


function DashboardHeader(){
    const {user, logout} = useAuth();


    return(<header className="main-header">
            <div className="main-header__title">
                <h2>Welcome Back, {user.username} !</h2>
                <p>Here's what your stats are for today.</p>
            </div>
            <div className="main-header__actions">
                <input type="search" placeholder="Search..." className="search-bar" />
                <button className="action-button notification-button"><i className="icon-bell"></i></button>
                <div className="user-profile">
                    <img src="https://i.pravatar.cc/40" alt="User Avatar" className="user-avatar" />
                    <span className="user-name">{user.username}</span>
                </div>
                <button className="btt-logout" onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>
            </div>
        </header>);
}

export default DashboardHeader;