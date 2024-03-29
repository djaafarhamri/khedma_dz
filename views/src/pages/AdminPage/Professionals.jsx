import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import axios from "axios";

const Professionals = () => {
  const [users, setUsers] = useState([]);

  const get_professionals = async () => {
    axios
      .get("http://localhost:4000/get_professionals")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_professionals();
  }, []);

  const get_professionals_by_seach = (value) => {
    axios
      .get("http://localhost:4000/get_professionals_by_seach/" + value)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-white flex rounded-md w-full">
      <div className="w-[calc(100%-250px)] mx-auto">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h1 className="text-gray-600 font-semibold">Professionals</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                placeholder="search..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log(e.target.value);
                    if (e.target.value !== "") {
                      get_professionals_by_seach(e.target.value);
                    } else {
                      get_professionals();
                    }
                  }
                }}
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                New Report
              </button>
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <TableHead />
                {users &&
                  users.map((user, id) => <TableBody id={id} user={user} />)}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
