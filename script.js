// REMOVED: Frontend JavaScript for scroll effect does not belong in the backend file.

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});


// Middleware
app.use(cors()); // Allows requests from your frontend

// UPDATED: Use the modern, built-in Express middleware instead of the deprecated body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit-quotation', (req, res) => {
    const formData = req.body;
    console.log("New Quotation Received:");
    console.log(formData);

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
        return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    // In a real application, you would save this to a database or send an email here.

    // Send a success response back to the frontend
    res.status(200).json({ message: 'Quotation submitted successfully!' });
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});

