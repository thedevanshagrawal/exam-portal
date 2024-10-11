
# Exam Portal

This project is an online examination system developed by Devansh Agrawal and Pratiksha Maurya .

## Features

- **Admin Dashboard:** Manage schools, create question papers, view reports.
- **School Dashboard:** Enroll students, schedule exams, send reports to admin.
- **Student Dashboard:** Take exams on scheduled dates.

## Technologies Used

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Other Tools:** EmailJS for email notifications

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/thedevanshagrawal/exam-portal.git
   cd exam-portal
   ```

2. **Install dependencies:**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```


3. **Set up environment variables:**

   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     ```
     PORT=your port number
     MONGODB_URI=your mongo db connection url
     CORS_ORIGIN=*
     ACCESS_TOKEN_SECRET=jwt access token
     ACCESS_TOKEN_EXPIRY=1d
     REFRESH_TOKEN_SECRET=jwt refresh token
     REFRESH_TOKEN_EXPIRY=10d
     CLOUDINARY_CLOUD_NAME=cloudinary name
     CLOUDINARY_API_KEY=CLOUDINARY_API_KEY
     CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
     ```


4. **Run the application:**

   ```bash
   # Start the backend server
   cd ../backend
   npm start

   # Start the frontend
   cd ../frontend
   npm start
   ```

## API Endpoints

- `/api/v1/users/createquestionBank`: Create a question bank.
- `/api/v1/users/scheduleQuestionPaper`: Schedule a question paper.
- `/api/v1/users/viewSubjectAndTopic`: View subjects and topics.

## Contributors

- [Devansh Agrawal](https://github.com/thedevanshagrawal)
- [Pratiksha Maurya](#)
