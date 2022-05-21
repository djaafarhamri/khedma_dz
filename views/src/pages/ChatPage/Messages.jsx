import axios from "axios";
import { useState } from "react";
import Message from "./Message";

const Messages = ({ user, messenger, setMessages, messages }) => {
  const [message, setMessage] = useState("");
  axios
    .post("http://localhost:4000/get_messages", {
      user,
      messenger,
    })
    .then((res) => {
      setMessages(res.data.messages);
    })
    .catch((err) => {
      console.log(err);
    });
  const testMessages = [
    {
      id: 1,
      type: "text",
      sender: "other",
      senderImage: "",
      message: "salut",
    },
    {
      id: 1,
      type: "text",
      sender: user.user,
      senderImage: "",
      message: "salut",
    },
    {
      id: 1,
      type: "text",
      sender: "other",
      senderImage: "",
      message: "salut",
    },
    {
      id: 1,
      type: "text",
      sender: user.user,
      senderImage: "",
      message: "salut",
    },
    {
      id: 1,
      type: "text",
      sender: user.user,
      senderImage: "",
      message: "salut",
    },
  ];
  return (
    <div className="messages">
      <div className="messages">
        {messages &&
          messages.map((msg, index) => {
            return (
              <div key={index}>
                <Message
                  msg={msg}
                />
              </div>
            );
          })}
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Aa"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Messages;
