import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { SocketContext } from "../../contexts/socket";
import Message from "./Message";
import User from "./User";

const Chat = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [messenger_id, setMessenger_id] = useState(null);
  const [messenger, setMessenger] = useState(null);
  const socket = useContext(SocketContext);
  useEffect(() => {
    console.log("please work");
    socket.emit("online_user", { user: user?.user });
    console.log("did it work");
  }, [socket, user]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getMessengers/${user?.user}`)
      .then((res) => {
        setUsers(res.data.messengers);
      });
  }, [user]);

  useEffect(() => {
    if (messenger_id) {
      socket.emit("join", {
        room: messenger_id,
        user: user.user,
      });
    }
  }, [messenger_id, socket, user]);

  useEffect(() => {
    if (messenger) {
      axios
        .post(`http://localhost:4000/getMessenger_id`, {
          user: user?.user,
          messenger,
        })
        .then((res) => {
          setMessenger_id(res.data.messenger_id);
        });
    }
  }, [messenger, user]);

  useEffect(() => {
    if (messenger) {
      axios
        .post(`http://localhost:4000/getMessages`, {
          user: user?.user,
          messenger,
        })
        .then((res) => {
          setMessages(res.data.messages);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [messenger, user]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((old) => [
        ...old,
        { message: data.message, sender: data.sender },
      ]);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, [setMessages, socket]);

  const sendMessage = () => {
    if (message) {
      socket.emit("sendMessage", {
        room: messenger_id,
        sender: user.user,
        message,
      });
    }
    axios
      .post(`http://localhost:4000/sendMessage`, {
        user: user?.user,
        messenger,
        message,
        messageType: "text",
      })
      .then((res) => {
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 mt-14">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-dark-blue bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-80 overflow-y-auto">
              {users &&
                users.map((u, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setMessenger(u);
                    }}
                  >
                    <User user={u} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages &&
                    messages.map((m, i) => (
                      <Message
                        message={m}
                        key={i}
                        user={user}
                        messenger={messenger}
                      />
                    ))}
                </div>
              </div>
            </div>
            {messenger && (
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button className="flex items-center justify-center bg-dark-blue hover:bg-black rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>request</span>
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      value={message}
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => {
                      sendMessage();
                    }}
                    className="flex items-center justify-center bg-dark-blue hover:bg-black rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Chat);
