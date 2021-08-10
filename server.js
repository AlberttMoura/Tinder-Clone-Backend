import express from 'express';
import mongoose from 'mongoose';

// App config
const app = express();
const port = process.env.PORT || 8001;

// Middleware



// DB config



// API endpoints
app.get('/', (request, response) => res.status(200).send("Hello World"));


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))
