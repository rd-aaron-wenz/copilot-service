# Coffee Bean Management System

A full-stack application for managing and rating coffee beans, built with Spring Boot and Angular.

## Features

- ✨ Add, edit, and delete coffee beans
- ⭐ Rate coffee beans from 1 to 5 stars
- 📝 Track coffee bean details: name, origin, roast level, description
- 🎨 Beautiful, responsive UI with coffee-themed styling
- 🔄 Real-time updates using RESTful API

## Technology Stack

### Backend
- **Spring Boot 3.2.0** - Java framework
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database for development
- **Maven** - Build tool

### Frontend
- **Angular 17** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **CSS3** - Styling

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 20.x or higher
- Maven 3.6+

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build and run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:4200`

## API Endpoints

- `GET /api/coffee-beans` - Get all coffee beans
- `GET /api/coffee-beans/{id}` - Get a specific coffee bean
- `POST /api/coffee-beans` - Create a new coffee bean
- `PUT /api/coffee-beans/{id}` - Update a coffee bean
- `PATCH /api/coffee-beans/{id}/rating` - Update rating only
- `DELETE /api/coffee-beans/{id}` - Delete a coffee bean

## Screenshots

### Coffee Bean Manager
![Coffee Bean Manager](https://github.com/user-attachments/assets/8c9b382f-615b-4332-821b-ed4550efeb0d)

### Managing Multiple Coffee Beans
![Multiple Coffee Beans](https://github.com/user-attachments/assets/87edbf03-aed0-4e2d-820d-3f3735579b25)

## Development

### Database Console
Access the H2 database console at `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:coffeebeandb`
- Username: `sa`
- Password: (leave empty)

### Project Structure
```
copilot-service/
├── backend/                  # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/copilot/service/
│   │   │   │       ├── model/        # Entity classes
│   │   │   │       ├── repository/   # JPA repositories
│   │   │   │       └── controller/   # REST controllers
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
└── frontend/                 # Angular frontend
    ├── src/
    │   ├── app/
    │   │   ├── components/   # Angular components
    │   │   ├── models/       # TypeScript models
    │   │   └── services/     # HTTP services
    │   └── styles.css
    └── package.json
```

## License

This project was built with and by LLMs as a demonstration application. 
