# mycs260startup- The Nesting Network
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
- **HTML** - Uses correct HTMl structure for application. Two HTML pages. One for login and one for voting.
- **CSS** - Application styling that looks good on different screen sizes, uses good whatespace, color choice and contrast.
- **React** - Provides login, channel display, display other users messages, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving messages
  - retrieving active status
- **DB/Login** - Store users, messages, and channel history in database. Register and login users. Credentials securely stored in database. Can't message unless authenticated.
- **WebSocket** - As each user messages, their messages are broadcast to all other users.
