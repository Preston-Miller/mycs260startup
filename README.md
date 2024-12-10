# mycs260startup- Bumptalk
# Elevator Pitch
A dedicated online forum designed for women who are currently pregnant. It offers a safe, supportive space where women at the same stage of pregnancy can connect, share experiences, and discuss their unique journeys. With easy-to-navigate discussions tailored to trimesters, this platform fosters meaningful connections during this special time.

# Design
<img width="643" alt="Screenshot 2024-09-14 at 7 22 34 PM" src="https://github.com/user-attachments/assets/a9981e96-4930-449a-a9da-0df1fa604085">

# Key Features
- Secure login over HTTPS
- Ability to select different forum channels
- Ability to see past forum chats
- Display of different trimester channels
- Ability to have one on one conversations with other users
- Ability to see which other users are currently active
- Ability for admin to create and delete questions

# Technologies
- **HTML** - Uses correct HTMl structure for application. Four HTML pages. A home page, chat page, notifications page, and about page. 
- **CSS** - Application styling that looks good on different screen sizes, uses good whatespace, color choice and contrast.
- **React** - Provides login, channel display, display other users messages, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving messages
  - retrieving active status
- **DB/Login** - Store users, messages, and channel history in database. Register and login users. Credentials securely stored in database. Can't message unless authenticated.
- **WebSocket** - As each user messages, their messages are broadcast to all other users.

# HTML deliverable
For this deliverable I built out the structure of my application using HTML.
- [x] **HTML** pages - Four HTML pages: a home page, talking page, notifications page, and about page.
- [x] **Links** - All HTML pages contain navigation to each other, the login/create account buttons also links the user to the chat page.
- [x] **Text** - There is textual content throughout the entire startup, most importantly represented in the messages sent and recieved on the talk page, and the information on the about page.
- [x] **Images** - I will have a rotating image on the about page, powered by a third party service. It is currently held by a placeholder.
- [x] **DB/Login** - Input box and submit button for login. The messages sent and recieved as well as the notifications represent data pulled from the database.
- [x] **WebSocket** - The realtime communication will be taking place in both the message center on the talk page as well as the notifications on the updates page.

# CSS deliverable
For this deliverable I properly styled the application into its final appearance.
- [x] **Header, footer, and main content body.** 
- [x] **Navigation Elements** - I made the underline appear when hovering, and changed the color for anchor elements.
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices.
- [x] **Application elements** - Used good contrast and white space.
- [x] **Application text content** - Consistent fonts, text colors.
- [x] **Application images** - I had a placeholder on my about page but replaced it with an actual image.

## React deliverable

For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.

- [x] **Bundled and transpiled**
- [x] **Components** - Login, talk, updates, and about all components with mocks for login, WebSocket, and 3rd party services.
  - [x] **login** - When you press the login button or create account it takes you to the talking page.
  - [x] **database** - Displayed the messages sent, currently stored locally but will be replaced with the database data later. Register and login users.
  - [x] **WebSocket** - I hardcoded some messages in talk, these will be replaced with WebSocket messages later.
  - [x] **application logic** - Messages and updates are given ordered based upon time recieved.
- [x] **Router** - Routing between all components. Specifically between login and talk.
- [x] **Hooks** - I used UseState and UseEffect.
