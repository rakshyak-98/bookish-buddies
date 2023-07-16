import {
    DashboardRounded,
    LogoutRounded,
    PeopleRounded,
    SettingsRounded,
} from "@mui/icons-material";
import Link from "next/link";
import "./style.css";
import ProgressCard from "./components/ProgressCard";

export default function Home() {
    return (
        <div className="container">
            <aside>
                <div className="sidebar__dashboard">
                    <div className="sidebar__dashboard__settings">
                        <Link href={"/dashboard"} as={"a"} className="active">
                            <DashboardRounded />
                            <h3>Dashboard</h3>
                        </Link>
                        <Link href={"/dashboard"}>
                            <PeopleRounded />
                            <h3>Manage User</h3>
                        </Link>
                        <Link href={"/dashboard"}>
                            <SettingsRounded />
                            <h3>Settings</h3>
                        </Link>
                    </div>
                    <div className="profile__settings">
                        <Link href={"/logout"}>
                            <LogoutRounded />
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
            </aside>
            <main>
                <div className="analyses">
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                </div>
            </main>
            <div className="right__section">
              
            </div>
        </div>
    );
}
