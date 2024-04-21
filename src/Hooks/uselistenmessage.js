import { useEffect } from "react";
import { useConversationContext } from "../Context/ConsevationContextProvider";
import { useSocketContext } from "../Context/SocketContext"


const uselistenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversationContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");

    }, [socket, setMessages, messages])


}

export default uselistenMessages