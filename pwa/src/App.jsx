import className from "./App.module.css";
import reactIcon from "./assets/react.svg";
function App() {
    return (
        <>
            <section className={className.dashboard__grid}>
                <aside className={className.aside}>
                    <ul>
                        <li>
                            <span className="material-symbols-outlined">
                                dashboard
                            </span>
                            <a href="#overview">Overview</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                donut_small
                            </span>
                            <a href="#analytics">Analytics</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                speaker_notes
                            </span>
                            <a href="#message">Message</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                category
                            </span>
                            <a href="#tools">Tools</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                            <a href="#settings">Settings</a>
                        </li>
                    </ul>
                    <div className={className.aside__footer}>
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                        <a href="#logout">Log Out</a>
                    </div>
                </aside>
                <main className={className.section__main}>
                    <div className={className.main__wrapper}>
                        <header>
                            <div className={className.main__searchBar}>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                                <input type="text" placeholder="Search..." />
                            </div>
                        </header>
                        <section className={className.content}>
                            <h2>Overview</h2>
                            <div className={className.overview__cards}>
                                <div className={className.overview__card__1}>
                                    <header>
                                        <span className="material-symbols-outlined">
                                            public
                                        </span>
                                        <h3>Subject</h3>
                                    </header>
                                    <div className={className.content}>
                                        <div className="left">
                                            <span>10,328</span>
                                            <p>Stars rated</p>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className={className.overview__card__1}>
                                    <header>
                                        <span className="material-symbols-outlined">
                                            public
                                        </span>
                                        <h3>Subject</h3>
                                    </header>
                                    <div className={className.content}>
                                        <div className="left">
                                            <span>10,328</span>
                                            <p>Stars rated</p>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className={className.overview__card__1}>
                                    <header>
                                        <span className="material-symbols-outlined">
                                            public
                                        </span>
                                        <h3>Subject</h3>
                                    </header>
                                    <div className={className.content}>
                                        <div className="left">
                                            <span>10,328</span>
                                            <p>Stars rated</p>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className={className.overview__manage__actions}>
                            <a href="#add-teacher">Add Teacher</a>
                            <a href="#add-teacher">Add Subject</a>
                            <a href="#add-teacher">Manage Appointment</a>
                        </section>
                        <section className={className.section__overview__data}>
                            <div className={className.table__control}>
                                <div className={className.input__group}>
                                    <label htmlFor="date">Class Date</label>
                                    <input type="date" id="data" name="date" />
                                </div>
                                <div className={className.input__group}>
                                    <label htmlFor="class">Class</label>
                                    <select name="class" id="class">
                                        <option value="chemistry">
                                            chemistry
                                        </option>
                                        <option value="chemistry">
                                            biology
                                        </option>
                                        <option value="chemistry">
                                            ML Algorithms
                                        </option>
                                        <option value="chemistry">
                                            Javascript
                                        </option>
                                    </select>
                                </div>
                                <div className={className.input__group}>
                                    <label htmlFor="class">Subject</label>
                                    <select name="class" id="class">
                                        <option value="chemistry">
                                            computer
                                        </option>
                                        <option value="chemistry">
                                            science
                                        </option>
                                        <option value="chemistry">
                                            data science
                                        </option>
                                        <option value="chemistry">
                                            programming
                                        </option>
                                    </select>
                                </div>
                                <div className={className.table__control__paging}>
                                    <span>1-100 of 609</span>
                                    <span className="material-symbols-outlined">
                                        arrow_back_ios
                                    </span>
                                    <span className="material-symbols-outlined">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Subject id</th>
                                        <th>Grade</th>
                                        <th>Class id</th>
                                        <th>Subject name</th>
                                        <th>Teacher</th>
                                        <th>Student Number</th>
                                        <th>Class Date</th>
                                    </tr>
                                </thead>
                            </table>
                        </section>
                    </div>
                </main>
                <aside className={className.aside__right}>
                    <header>
                        <a href="#quit">Quit</a>
                        <a href="#personal">Personal</a>
                        <span className={className.profile__image}>
                            <img src={reactIcon} alt="user image" />
                        </span>
                    </header>
                    <h2>Top rated</h2>
                    <div className={className.aside__right__cards}>
                        <div className={className.aside__right__card__1}>
                            <header>
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </header>
                            <div className={className.content}>
                                <div className="left">
                                    <p>David miller</p>
                                    <span>10,328</span>
                                </div>
                                <div className="right"></div>
                            </div>
                        </div>
                        <div className={className.aside__right__card__1}>
                            <header>
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </header>
                            <div className={className.content}>
                                <div className="left">
                                    <p>David miller</p>
                                    <span>10,328</span>
                                </div>
                                <div className="right"></div>
                            </div>
                        </div>
                        <div className={className.aside__right__card__1}>
                            <header>
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </header>
                            <div className={className.content}>
                                <div className="left">
                                    <p>David miller</p>
                                    <span>10,328</span>
                                </div>
                                <div className="right"></div>
                            </div>
                        </div>
                        <div className={className.aside__right__card__1}>
                            <header>
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </header>
                            <div className={className.content}>
                                <div className="left">
                                    <p>David miller</p>
                                    <span>10,328</span>
                                </div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </>
    );
}

export default App;
