import axios from "axios";
import Message from "./Message";

const Messages = ({ user, messenger, setMessages, messages }) => {
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

  return (  
    <div>
        {messages?.map((message, key) => (
            <div key={key}>
                <Message message={message} />
            </div>
        ))}
    </div>
  );
};

export default Messages;
