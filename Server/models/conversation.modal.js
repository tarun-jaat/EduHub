const mongoose = require('mongoose');

const conversationSchema = new Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default:[]
        }
    ],
}, { timestamps: true })


const Conversation = model("Conversation", conversationSchema);

module.exports = Conversation;
