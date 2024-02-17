import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user.email;
        const creationTime = result.user?.metadata?.creationTime;
        // const creationTime = createUser?.metadata?.UserMetadata?.creationTime;
        console.log(createdUser);

        //user has been created
        const user = { email, creationTime };
        fetch("https://coffee-store-server-kv6b.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "success",
                icon: "success",
                text: "User Create Successfully",
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
        });
        console.log(error.message);
      });
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>SignUp First!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleCreateUser} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
