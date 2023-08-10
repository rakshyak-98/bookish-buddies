# bookish-buddies

## Motivation
Booking appointment systems, either online or through traditional queueing systems, are now popular. Several businesses, such as scheduling an appointment, employ various Web-based appointment systems for their patients, which improve the efficiency of the appointment process, reducing patient wait times and increasing the total number of patients treated. This research proposes a web-based appointment booking system that allows students and lecturers to be aware of their appointment time regardless of where they are by using the web or mobile devices. By connecting to the Internet, students and instructors can easily access the system. It also permits students to send any message, including the appointment's purpose and timing.

## Quick Start

## Application features
- scheduling appointment, web-based appointment system.
- appointment timing, schedules.
- student can send message (appointment's details)
- send email alert.
## Table of contents
| index | content |
|-----|:--------:|
|1| [Installation](#installation) |
|2| [Deployment](#deployment) |
|3| [Run test](#run-test)|
|4| [High Level Design](#high-level-design)|
|5| [LLD architecture](#lld)|
|6| [api endpoints](#api-endpoints)|
|7| [author](#author)|
|8| [contributor](#contributors)|

## Installation
- backend (api/)
    - development dependencies
        - nodemon (npm run dev)
- frontend (pwa/)

### Environment variables (required)
```bash
GOOGLE_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGO_URI=
JWT_SECRET=
API_PORT=
```
## Deployment
- api
    - production branch [main](https://bookish-buddies-api-nlzu.onrender.com/ping)
    - development branch [stage-main](https://bookish-buddies-api.onrender.com/ping)
- pwa
    - production branch [main](https://bookish-buddies-lfosjxrwn-rakshyak-98.vercel.app/?vercelToolbarCode=2j5zuHGmXZEwydl)
    - development branch [stage-main](https://bookish-buddies-stage-nob5za4o8-rakshyak-98.vercel.app/?vercelToolbarCode=8rJlnyAIYF8zu3n)
## Run test

## High Level Design
1. Frontend (Client-Side):

    The frontend will be responsible for presenting the user interface to students and teachers and handling their interactions.
    It will be built using JavaScript, HTML, and CSS, possibly utilizing a frontend framework like React.
    Features:
        User authentication and authorization.
        Displaying available teachers and their schedules.
        Allowing students to browse and select available time slots for booking appointments.
        Managing user profiles, settings, and notifications.

2. Backend (Server-Side):

    The backend will handle data processing, business logic, and communication with databases and other services.
    Built using a server-side runtime, such as Node.js, and api framework Express.js.
    Features:
        API endpoints for user authentication, appointment booking, teacher availability, and user management.
        Authentication and authorization using jwt tokens.
        Business logic for scheduling appointments, checking teacher availability, and handling conflicts.

3. Database:

    Store user information, teacher profiles, appointment schedules, and booking data.
    Use a database system MongoDB NoSQL database.
    Features:
        User data storage (students and teachers).
        Teacher availability schedules.
        Appointment bookings with associated metadata.

4. Authentication and Authorization:

    Ensure secure user authentication and authorization for both students and teachers.
    Use authentication mechanisms JWT (JSON Web Tokens) and OAuth.
    Features:
        Registration and login for students and teachers.
        Role-based access control to restrict actions (e.g., only teachers can set their availability).

5. Availability and Scheduling:

    Implement logic to manage teacher availability and appointment scheduling.
    Ensure conflict resolution and prevent double bookings.
    Features:
        Display teacher availability to students.
        Allow teachers to define their availability and update it.
        Real-time updates and notifications for availability changes and bookings.

6. Notifications:

    Implement a notification system to keep users informed of important events.
    Use mechanisms like email, SMS, or in-app notifications.
    Features:
        Appointment confirmation and reminders.
        Notifications for availability changes, cancellations, or rescheduling.

7. External Integrations:

    Integrate with external services if needed, such as calendar APIs for synchronization.
    Features:
        Syncing appointments with teachers' external calendars (Google Calendar, Outlook, etc.).

8. Scalability and Performance:

    Design the architecture to handle a growing number of users and bookings.
    Consider using load balancers, caching mechanisms, and optimizing database queries.

9. Security:

    Implement security measures like input validation, data sanitization, and secure API endpoints.
    Protect against common web vulnerabilities (SQL injection, XSS, CSRF, etc.).

10. Deployment:

    Deploy the application to a production environment using platforms like AWS, Azure, Heroku, or others.
    Set up proper monitoring, logging, and error handling for the deployed application.
## LLD
1. Server:
	Node.js runtime to execute JavaScript code.
	Express.js to handle routing, middleware, and request/response handling.

2. Database:
	MongoDB as the NoSQL database to store data.

3. Authentication:
	JSON Web Tokens (JWT) for user authentication and authorization.

4. Logging and Monitoring:
	Winston for logging application events.
	Prometheus and Grafana for monitoring performance and resource utilization.

5. API Endpoints:
	- User Management:
		- POST /api/auth/register: Register a new user.
		- POST /api/auth/login: Authenticate a user and return a JWT token.

	- Resource Management (Example: teacher):
        - teacher
            - GET /api/teacher id Retrieve a list of teacher.
            - GET /api/teacher/:id: Retrieve details of a specific teacher.
            - PUT /api/teacher/:id: Update details of a teacher.
            - DELETE /api/teacher/:id: Delete a teacher.
        - student
            - GET /api/student id Retrieve a list of student.
            - GET /api/student/:id: Retrieve details of a specific student.
            - PUT /api/student/:id: Update details of a student.
            - DELETE /api/student/:id: Delete a student.

## Author: 
[rakshyak-98](https://github.com/rakshyak-98)
## Contributors:
[yanicodeverse](https://github.com/yanicodeverse), [developerjay18](https://github.com/developerjay18), [Ambrish5211](https://github.com/Ambrish5211)
