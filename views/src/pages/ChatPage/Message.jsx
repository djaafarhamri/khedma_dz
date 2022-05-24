import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";
import ShowOfferModal from "./ShowOfferModal";

const Message = ({ user, messenger, message, messenger_id }) => {
  const socket = useContext(SocketContext);
  const [showOffer, setShowOffer] = useState(false);
  const [offer, setOffer] = useState();
  const [userF, setUserF] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/get_user/${user?.user}`)
      .then((res) => {
        setUserF(res.data);
      }
      );
  }, [user]);

  const acceptOffer = async (offer) => {
    await axios
      .get(`http://localhost:4000/acceptOffer/${offer}`)
      .then((res) => {
        socket.emit("sendMessage", {
          room: messenger_id,
          sender: user?.user,
          message: `${userF?.first_name} ${userF?.last_name} accepted your offer`,
          messageType: "text",
        });
        axios
          .post(`http://localhost:4000/sendMessage`, {
            user: user?.user,
            messenger,
            message: `${user?.user} accepted your offer`,
            messageType: "text",
          })
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {showOffer && (
        <ShowOfferModal
          setShowOffer={setShowOffer}
          offer={offer}
          acceptOffer={acceptOffer}
        />
      )}
      {message.sender !== user?.user ? (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
          <div className="flex flex-row items-center">
            <img
              src={`http://localhost:4000/${messenger.profile_image}`}
              alt=""
              className="h-10 w-10 rounded-full flex-shrink-0"
            />
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              {message.messageType === "text" ? (
                <div>{message.message}</div>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setOffer(message.message);
                      console.log("offer: ", message.message);
                      setShowOffer(true);
                    }}
                  >
                    View Offer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
          <div className="flex items-center justify-start flex-row-reverse">
            <img
              src={`http://localhost:4000/${messenger.profile_image}`}
              alt=""
              className="h-10 w-10 rounded-full flex-shrink-0"
            />
            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
              {message.messageType === "text" ? (
                <div>{message.message}</div>
              ) : (
                <div>Offer sent</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
