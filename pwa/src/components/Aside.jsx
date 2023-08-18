export default function Aside() {
    return (
        <aside className={"aside"}>
            <ul>
                <li>
                    <span className="material-symbols-outlined">dashboard</span>
                    <a href="/">Overview</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        donut_small
                    </span>
                    <a href="/analytics">Analytics</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        speaker_notes
                    </span>
                    <a href="/message">Message</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">category</span>
                    <a href="/tools">Tools</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">settings</span>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
            <div className={"aside__footer"}>
                <span className="material-symbols-outlined">logout</span>
                <a href="#logout">Log Out</a>
            </div>
        </aside>
    );
}
