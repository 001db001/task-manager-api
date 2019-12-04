/* #region  imports */
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');

/* #endregion */

const schema = new mongoose.Schema(taskSchema(),{timestamps: true});

function taskSchema() {
    return {
        description: {
            type: String,
            trim: true,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
}

/* #region  Schema */

/* #endregion */

const Task = mongoose.model('Task', schema);

module.exports = Task;