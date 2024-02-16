import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1 className='font-bold text-center text-2xl mt-4'>
        ALL Users Here {users.length}
      </h1>
      {users.map((user) => (
        <div key={user._id} className='overflow-x-auto mx-auto w-3/4'>
          <table className='table table-zebra'>
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Creation Time</th>
                <th>Last Log In</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Users;
