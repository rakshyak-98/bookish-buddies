import { Link, Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <div className="layout__grid">
            <aside className={"aside"}>
                <ul>
                    <li>
                        <span className="material-symbols-outlined">
                            dashboard
                        </span>
                        <Link to="/overview">Overview</Link>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            donut_small
                        </span>
                        <Link to="/analytics">Analytics</Link>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            speaker_notes
                        </span>
                        <Link to="/message">Message</Link>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            category
                        </span>
                        <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
                <div className={"aside__footer"}>
                    <span className="material-symbols-outlined">logout</span>
                    <a href="#logout">Log Out</a>
                </div>
            </aside>
            <Outlet />
        </div>
    );
}
