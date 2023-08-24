import { useState } from "react";
import CustomModal from "../components/Modal";
export default function Dashboard() {
    const [showTeacherModal, setTeacherModal] = useState(false);
    const [showStudentModal, setStudentModal] = useState(false);
    return (
        <>
            <main className={"section__main"}>
                <div className={"main__wrapper"}>
                    <header>
                        <div className={"main__searchBar"}>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </header>
                    <section className={"content"}>
                        <h2>Overview</h2>
                    </section>
                    <section className={"overview__manage__actions"}>
                        <a
                            href="#add-teacher"
                            onClick={() => setTeacherModal(true)}>
                            Add Teacher
                        </a>
                        <a href="#add-subject" onClick={() => setStudentModal(true)}>Add Subject</a>
                    </section>
                    <section className={"section__overview__data"}>
                        <div className={"table__control"}>
                            <div className={"input__group"}>
                                <label htmlFor="date">Class Date</label>
                                <input type="date" id="data" name="date" />
                            </div>
                            <div className={"input__group"}>
                                <label htmlFor="class">Class</label>
                                <select name="class" id="class">
                                    <option value="chemistry">chemistry</option>
                                    <option value="chemistry">biology</option>
                                    <option value="chemistry">
                                        ML Algorithms
                                    </option>
                                    <option value="chemistry">
                                        Javascript
                                    </option>
                                </select>
                            </div>
                            <div className={"input__group"}>
                                <label htmlFor="class">Subject</label>
                                <select name="class" id="class">
                                    <option value="chemistry">computer</option>
                                    <option value="chemistry">science</option>
                                    <option value="chemistry">
                                        data science
                                    </option>
                                    <option value="chemistry">
                                        programming
                                    </option>
                                </select>
                            </div>
                            <div className={"table__control__paging"}>
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
            <CustomModal
                variant="teacher"
                open={showTeacherModal}
                onClose={() => setTeacherModal(false)}
            />
            <CustomModal
                variant="student"
                open={showStudentModal}
                onClose={() => setStudentModal(false)}
            />
        </>
    );
}
