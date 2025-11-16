const transporter = require("../config/emailConfig");
require("dotenv").config();


const sendConfirmationEmail = async (req, res) => {
    try {
        const { email, token } = req.body;

        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Confirm Your Email",
            html: `
                <h2>Email Confirmation</h2>
                <p>Click the link to confirm:</p>
                <a href="https://yourapp.com/confirm/${token}">Confirm Email</a>
            `
        });

        res.json({ message: "Confirmation email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
};


const sendWelcomeEmail = async (req, res) => {
    try {
        const { email, name } = req.body;

        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome!",
            html: `<h1>Welcome ${name}!</h1>`,
        });

        res.json({ message: "Welcome email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
};

const otps = new Map();

const sendResetOTP = async (req, res) => {
    try {
        const { email } = req.body;


        const otp = Math.floor(100000 + Math.random() * 900000);

        otps.set(email, {
            otp,
            createdAt: Date.now()
        });


        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Password Reset OTP",
            html: `<h2>Your OTP: <b>${otp}</b></h2><p>Valid for 10 minutes.</p>`,
        });


        res.json({
            success: true,
            message: "OTP sent successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email sending failed" });
    }
};


module.exports = { sendConfirmationEmail, sendWelcomeEmail, sendResetOTP };
