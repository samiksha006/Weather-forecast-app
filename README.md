# Weather Forecast Application

A full-stack weather forecasting application built using:

- React.js
- Node.js
- Express.js
- OpenWeatherMap API

Features:
- Search weather by city
- Real-time weather updates
- Secure backend API integration
- Error handling
# Weather Forecast Application

A full-stack Weather Forecast Application built using React.js, Node.js, Express.js, and OpenWeatherMap API.

## Features

- Search weather by city
- Real-time weather updates
- Temperature display in Celsius
- Humidity information
- Wind speed information
- Weather condition display
- Secure backend API integration
- Environment-based configuration
- Error handling
- Responsive user interface

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- CORS
- Dotenv

### External API
- OpenWeatherMap API

## Project Structure

```text
weather-forecast-app/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd weather-forecast-app
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
OPENWEATHER_API_KEY=YOUR_API_KEY
BASE_URL=https://api.openweathermap.org/data/2.5
```

Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm start
```

## API Endpoint

### Get Weather by City

```http
GET /api/weather/:city
```

Example:

```http
GET /api/weather/chennai
```

## Future Enhancements

- 5-Day Weather Forecast
- Weather Icons
- Geolocation Support
- Dark Mode
- Search History
- Redis Caching
- Air Quality Index
- Weather Alerts

## Author

Samiksha PM
M.Sc Artificial Intelligence and Machine Learning
Coimbatore Institute of Technology