const TableBody = ({ user }) => {
  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={`http://localhost:4000/${user.profile_image}`}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {user.first_name + " " + user.last_name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{new Date(user.creation_date).getDate()}{"/"}{new Date(user.creation_date).getMonth()}{"/"}{new Date(user.creation_date).getFullYear()}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{user.verifiedd}</span>
          </span>
        </td>
        <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
          <button className="text-gray-900 whitespace-no-wrap">opti</button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
