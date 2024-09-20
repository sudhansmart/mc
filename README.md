##Madras Campers - Adventure Booking Application
Madras Campers is a comprehensive adventure booking platform that allows users to explore and book exciting camping, trekking, and adventure experiences in nature. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and deployed on IIS.

##Features
Adventure Listings: View and explore various adventure packages, including nature escapes, team retreats, wilderness camping, and more.
Booking System: Users can book adventures and receive confirmation via email.
User Authentication: Secure login and registration system using token-based authentication (JWT).
Admin & Recruiter Dashboards: Separate dashboards for recruiters and admins, with role-based access control.
File Uploads: Support for uploading images and other files, such as itineraries, attractions, and amenities.
Responsive Design: Fully responsive across devices, optimized for mobile and desktop.
Search and Filter: Ability to search for adventures by location, activity type, and availability.
##Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
File Upload Handling: Multer
Email Service: Nodemailer (for booking confirmations)
Deployment: IIS (Internet Information Services)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/madrascampers.git
Navigate to the project directory:

bash
Copy code
cd madrascampers
Install dependencies for the backend:

bash
Copy code
cd backend
npm install
Install dependencies for the frontend:

bash
Copy code
cd ../frontend
npm install
Set up environment variables. Create a .env file in the backend directory with the following:

makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
Running the Application
Start the backend server:

bash
Copy code
cd backend
npm run dev
Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
Open the application in your browser at http://localhost:3000.

Deployment on IIS
Install Node.js on your server.
Set up IIS to host both the frontend (React) and backend (Node.js) applications.
Use the URL Rewrite module to configure redirects and routing as needed.
Use the IISNode module to run the Node.js backend.
Ensure that the environment variables are properly configured on the server.
API Endpoints
GET /api/adventures - Fetch a list of available adventures.
POST /api/bookings - Submit a booking request.
POST /api/login - User login.
POST /api/register - User registration.
GET /api/dashboard - Admin/recruiter dashboard data.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.
