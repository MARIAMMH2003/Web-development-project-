const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// app.post('/chatbot', (req, res) => {
//     const userMessage = req.body.message;
//     // Process user message and generate bot response
//     const botMessage = `You said: ${userMessage}`;
//     res.json({ message: botMessage });
// });

app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    let botMessage = '';

    // Simple example: respond with a predefined message based on user input
    if (userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('goodbye')) {
        botMessage = 'Goodbye! Have a great day!';
    } else {
        botMessage = "I'm sorry, I didn't understand that.";
    }

    res.json({ message: botMessage });
});


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Chatbot listening at http://localhost:${port}`);
});
