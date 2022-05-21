import { useState } from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import Users from "./Users";
import Message from "./Message";

const Chat = ({ user }) => {
    const [messages, setMessages] = useState();
    const [messenger, setMessenger] = useState();
    return ( 
        <div>
            <Users setMessenger={setMessenger} />
            <Messages user={user} messages={messages} setMessages={setMessages} messenger={messenger}  />
            <Message/>
        </div>
     );
}

const mapStateToProps = (state) => ({
    user: state.user
})

 
export default connect(mapStateToProps)(Chat);