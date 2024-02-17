import { data } from "autoprefixer";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user delete Successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h1 className='font-bold text-center text-2xl mt-4'>
        ALL Users Here {users.length}
      </h1>

      <div className='overflow-x-auto mx-auto w-3/4'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>User_Id</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last Log In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>Blue</td>
                <td onClick={() => handleDeleteUser(user._id)} className='btn '>
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
