const Message = ({ isReceived, isSent, type, img, message }) => {
  return (
    <div className="flex">
      {isReceived ? (
        <div className="flex-1 bg-gray-200 p-2 rounded-lg">
          <img src={`http://localhost:4000/${img}`} alt="" />
          <p className="text-sm text-gray-600">
            {type === "text" ? message : "offre"}
          </p>
        </div>
      ) : (
        <div className="flex-1 bg-gray-300 p-2 rounded-lg">
          <p className="text-sm text-gray-600">
            {type === "text" ? message : "offre"}
          </p>
          <img src={`http://localhost:4000/${img}`} alt="" />
        </div>
      )}
    </div>
  );
};

export default Message;
