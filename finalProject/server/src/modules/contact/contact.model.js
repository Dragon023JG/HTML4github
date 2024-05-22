'use strict';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class Contact {

    initSchema() {
        const schema = new Schema({
            'first': {
                'type': String,
                'required': true,
            },
            'last': {
                'type': String,
                'required': true,
            },
            // 'createdBy': {
            //     'type': Schema.Types.ObjectId,
            //     'ref': 'user'
            // },
            // 'updatedBy': {
            //     'type': Schema.Types.ObjectId,
            //     'ref': 'user'
            // }
            'twitter': {
                'type': String,
                'required': true,
            },

            'avatar': {
                'type': String,
                'default': 'noImage.png',
            },
            'notes': {
                'type': String,
                'required': false,
            },
        }, { 'timestamps': true });

        schema.plugin(uniqueValidator);
        try {
            mongoose.model('contact', schema);
        } catch (e) {

        }

    }

    getInstance() {
        this.initSchema();
        return mongoose.model('contact');
    }
}

module.exports = { Contact };
