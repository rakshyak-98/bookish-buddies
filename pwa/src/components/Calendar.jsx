import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { styled } from "styled-components";
const Wrapper = styled.div`
    overflow: scroll;
    height: 100vh;
    padding: 2rem;
`;
export default function Calendar() {
    return (
        <Wrapper>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={[]}
            />
        </Wrapper>
    );
}
