export const Menu = ({dashboardLabel}) => {
    return (
        <div className="menu">
            <h3 className="hide-mobile mt-0">MyTrack</h3>

            <div className="menu-items">
                <div className="menu-item active">
                    <img src="/icons/icon-dashboard.svg" height={20}/>
                    <span className="pe-1">Dashboard</span>
                    {
                        dashboardLabel &&
                        <span className="menu-item-label">{dashboardLabel}</span>
                    }
                </div>
                <div className="menu-item">
                    <img src="/icons/icon-calendar.svg" height={20}/>
                    <span className="pe-1">Calendar</span>
                </div>
                <div className="menu-item">
                    <img src="/icons/icon-teams.svg" height={20}/>
                    <span className="pe-1">Team</span>
                </div>
                <div className="menu-item">
                    <img src="/icons/icon-charts.svg" height={20}/>
                    <span className="pe-1">Charts</span>
                </div>
                <div className="menu-item">
                    <img src="/icons/icon-settings.svg" height={20}/>
                    Settings
                </div>
            </div>

        </div>
    )
}