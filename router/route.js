const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retrieve data
router.get('/contacts', (req, res, next) => {
    Contact.find({},"first_name last_name phone", function(err, contacts) {
        if (err)
            console.log(err);
        res.json(contacts);
    })
});

//add data
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if (err) {
            res.json({msg: "Failed to add contact"});
        } else {
            res.json({msg: "Contact added successfully"});
        }
    });
});

//delete contact
router.delete('/contacts/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result) {
        if (err) {
            res.json({msg: err});
        } else {
            res.json({msg: "success"});
        }
    });
});

module.exports = router;