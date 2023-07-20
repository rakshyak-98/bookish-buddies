import style from "./Nav.module.css";

export default function Nav() {
    return (
        <nav>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">
                    space_dashboard
                </span>
                <h3>Dashboard</h3>
            </a>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">mail</span>
                <h3>Mail</h3>
            </a>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">group</span>
                <h3>Manage</h3>
            </a>
        </nav>
    );
}
