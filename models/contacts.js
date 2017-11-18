const express = require('express');
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const contact = module.exports = mongoose.model('contact', contactSchema);