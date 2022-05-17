const TTableBody = ({ transaction }) => {
  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={`http://localhost:4000/${transaction.professional.profile_image}`}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.professional.first_name + " " + transaction.professional.last_name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={`http://localhost:4000/${transaction.client.profile_image}`}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.client.first_name + " " + transaction.client.last_name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{new Date(transaction.created_at).getDate()}{"/"}{new Date(transaction.creation_at).getMonth()}{"/"}{new Date(transaction.creation_at).getFullYear()}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{transaction.price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{transaction.completed ? "Completed":"On Gonig"}</span>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default TTableBody;
