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
|5| [Low Level Design](#low-level-design)|
|6| [author](#author)|
|7| [contributor](#contributors)|
|8| [keywords](#keywords)|


## Installation
- backend (api/)
    - development dependencies
        - nodemon (npm run dev)
- frontend (pwa/)
## Deployment
- api
    - production branch [main](https://bookish-buddies-api-nlzu.onrender.com/ping)
    - development branch [stage-main](https://bookish-buddies-api.onrender.com/ping)
- pwa
    - production branch [main](https://bookish-buddies-lfosjxrwn-rakshyak-98.vercel.app/?vercelToolbarCode=2j5zuHGmXZEwydl)
    - development branch [stage-main](https://bookish-buddies-stage-nob5za4o8-rakshyak-98.vercel.app/?vercelToolbarCode=8rJlnyAIYF8zu3n)
## Run test

## High Level Design
![overview](assets/overview-hld.png)
## Low Level Design
### HTTP basic access authentication
HTTP basic access authentication requires a web browser to 
provide a username and a password when requesting a protected resource. 
The credentials are encoded using the Base64 algorithm and included in 
the HTTP header field Authorization: Basic.
how it works:
1. The client sends a request to access a protected resource on the server.
2. If the client has not yet provided any authentication credentials, the server responds with a 401 Unauthorized status code and includes the WWW-Authenticate: Basic header to indicate that it requires basic authentication.
3. The client then prompts the user to enter their username and password, which are combined into a single string in the format username:password.
4. The combined string is Base64 encoded and included in the "Authorization: Basic" header in the subsequent request to the server, e.g., Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=.
5. Upon receiving the request, the server decodes the Base64-encoded credentials and separates the username and password. The server then checks the provided credentials against its user database or authentication service.
6. If the credentials match, the server grants access to the requested resource. If not, the server responds with a 401 Unauthorized status code.
![http basic access authentication](assets/http-basic-access-authenticatio.png)
## Author: 
[rakshyak-98](https://github.com/rakshyak-98)
## Contributors:
[yanicodeverse](https://github.com/yanicodeverse), [developerjay18](https://github.com/developerjay18), [Ambrish5211](https://github.com/Ambrish5211)

## keywords
