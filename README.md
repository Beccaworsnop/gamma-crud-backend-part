# RFID Management Website

## Introduction

The **RFID Management Website** is a secure web application that enables administrators to manage access control using RFID cards. It provides a centralized dashboard to oversee users, doors, events, and access logs.

## Features

### 1. User Authentication & Role Management

- Secure login for administrators.
- Role-based access control (Super Admin, Admin).

### 2. Dashboard

- Overview of key metrics (total users, active doors, recent access logs).
- Quick actions for management.

### 3. User Management

- Add, edit, and delete users.
- Assign and revoke RFID cards.
- Set permissions for specific doors and time periods.

### 4. Door Management

- View, add, edit, and remove doors.
- Assign access permissions to users or groups.

### 5. Event Management

- Create and manage access events.
- Define periodic access permissions (e.g., weekdays, specific hours).

### 6. Access Logs

- View access event logs (who accessed which door and when).
- Filter logs by date, user, or door.
- Export logs in CSV format.

### 7. Admin Activity Logs

- Track administrative changes (user modifications, permission changes).
- Filter logs by admin, date, and affected entity.

## Backend Development

We are currently focusing on developing the backend server using **Express.js** with the following key components:

- **Authentication**: Secure login with JWT-based authentication.
- **Database**: PostgreSQL for storing user, door, and event data.
- **API Development**: RESTful API for handling user, door, and event management.
- **Logging & Security**: Implementing role-based access control (RBAC) and logging system actions.

## Technology Stack

- **Backend:** Express.js (Node.js)
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication
- **Hosting:** localhost

## API Endpoints

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| POST   | `/login`       | Authenticate admins       |
| GET    | `/users`       | Fetch all users           |
| POST   | `/users`       | Create a new user         |
| PATCH  | `/users/:uid`  | Edit user details         |
| DELETE | `/users/:id`   | Remove a user             |
| GET    | `/doors`       | Fetch all doors           |
| POST   | `/doors`       | Create a new door         |
| PATCH  | `/doors/:uid`  | Edit door details         |
| DELETE | `/doors/:uid`  | Remove a door             |
| GET    | `/logs/access` | Fetch access logs         |
| GET    | `/logs/admin`  | Fetch admin activity logs |
| GET    | `/events`      | Fetch all events          |
| POST   | `/events`      | Create a new event        |
| PATCH  | `/events/:uid` | Edit event details        |
| DELETE | `/events/:uid` | Remove an event           |

## Deployment & Maintenance

- Regular security updates and performance optimizations.
- Backup strategy to prevent data loss.

## Timeline & Budget

- **Development Phase:** 3 weeks
- **Testing & Deployment:** 5 days
- **Estimated Budget:** Zinou will pay everything

## Conclusion

The RFID Management Website will enhance security and provide an efficient way to track access permissions and activities. With role-based access, real-time monitoring, and an intuitive UI, administrators can manage access control effectively.

## Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/rfid-management-backend.git
   ```
2. Install dependencies:
   ```sh
   cd rfid-management-backend
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

## License

This project is licensed under the MIT License.
