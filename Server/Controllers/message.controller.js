const Conversation = require("../models/message.modal.js");
const Message = require("../models/message.modal.js");
const { getReceiverSocketId, io } = require("../Socket/socket.js");

 const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // this will run in parallel
        await Promise.all([await conversation.save(),await newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(<socket_id>).emit() this message is used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log(`Error in sending message: ${error.message}`);
        res.status(500).json({ error: "Internal server error" });
    }
}

 const getMessages = async(req, res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log(`Error in getMessages: ${error.message}`);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports= {
    getMessages,
    sendMessage

}
