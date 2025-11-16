const confirmationTemplate = (name, token) => `
  <div style="padding:20px;font-family:Arial;">
    <h2>Confirm Your Email, ${name}</h2>
    <p>Click the button below to confirm:</p>
    <a href="https://your-app.com/confirm/${token}" 
       style="background:#4CAF50;color:white;padding:10px 20px;text-decoration:none;">
       Confirm Email
    </a>
  </div>
`;

module.exports = confirmationTemplate;
