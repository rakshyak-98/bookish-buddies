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
|5| [contributor](#contributors)|
|6| [api endpoints](#api-endpoints)|
|7| [LLD architecture](#lld)|
|8| [author](#author)|

## Installation
- backend (api/)
    - development dependencies
        - nodemon (npm run dev)
- frontend (pwa/)

### Environment variables (required)
```bash

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
## Author: 
[rakshyak-98](https://github.com/rakshyak-98)
## Contributors:
[yanicodeverse](https://github.com/yanicodeverse), [developerjay18](https://github.com/developerjay18), [Ambrish5211](https://github.com/Ambrish5211)

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
		- GET /api/teacher: Retrieve a list of teacher.
		- GET /api/teacher/:id: Retrieve details of a specific teacher.
		- POST /api/teacher: Create a new teacher.
		- PUT /api/teacher/:id: Update details of a teacher.
		- DELETE /api/teacher/:id: Delete a teacher.