📧 Email Sending System (Node.js + Express.js)

A professional Email Sending System built with Node.js, Express.js, and Nodemailer.
This project fulfills the assignment requirements of sending 3 types of emails for user actions.

🚀 Features
🔹 1. Confirmation Email

Sent immediately after user signup.

Contains a unique token or verification link.

🔹 2. Welcome Email

Sent automatically after successful email confirmation.

🔹 3. Password Reset OTP

Sends a 6-digit OTP for password reset.

OTP expires automatically after 10 minutes.

🛠 Technologies Used

Node.js – Backend runtime

Express.js – API routing

Nodemailer – Sending emails via SMTP

dotenv – Environment variables

HTML & CSS – Email templates

JavaScript (CommonJS) – Backend logic

⚡ Project Structure (Example)
email-system/
│
├─ index.js                # Main server file
├─ controllers/            # Email sending functions
├─ routes/                 # API routes
├─ .env                    # SMTP credentials
└─ package.json

📦 Installation & Usage

Clone Repository

git clone https://github.com/ahsan20051/email-system.git
cd email-system


Install Dependencies

npm install


Configure Environment Variables
Create .env file:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=4000


Run Server
node index.js

📌 API Routes
Route	Method	Description
/api/send-confirmation	POST	Send confirmation email
/api/send-welcome	POST	Send welcome email
/api/send-reset-otp	POST	Send password reset OTP

All APIs return JSON response indicating success/failure.


⚡ Notes

Use Gmail App Password if using Gmail SMTP.

OTPs are temporarily stored on server memory and expire after 10 minutes.

This project does not include a frontend, all emails can be tested via Postman / API clients.