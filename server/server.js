const express = require('express');
const postgres = require('postgres');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    alowedHeaders: ['Content-Type', 'Authorization'],
    credential: true
}))

const connectionString = process.env.DATABASE_URL;