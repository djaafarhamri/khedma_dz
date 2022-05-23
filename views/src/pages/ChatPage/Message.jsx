
const Message = ({ user, messenger, message }) => {
  return (
    <>
      {message.sender === messenger._id ? (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
          <div className="flex flex-row items-center">
            <img
              src={`http://localhost:4000/${messenger.profile_image}`}
              alt=""
              className="h-10 w-10 rounded-full flex-shrink-0"
            />
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div>{message.message}</div>
            </div>
          </div>
        </div>
      ) : (
        <div class="col-start-6 col-end-13 p-3 rounded-lg">
          <div class="flex items-center justify-start flex-row-reverse">
          <img
              src={`http://localhost:4000/${messenger.profile_image}`}
              alt=""
              className="h-10 w-10 rounded-full flex-shrink-0"
            />
            <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
              <div>{message.message}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
