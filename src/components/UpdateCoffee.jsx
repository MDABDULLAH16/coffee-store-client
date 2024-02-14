import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const storedCoffee = useLoaderData();
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const CoffeeDetails = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photoURL,
    };
    console.log(CoffeeDetails);
    fetch(`http://localhost:5000/updateCoffee/${storedCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CoffeeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Coffee Details Update !!");
        }
      });
  };
  return (
    <div className='container w-3/4  bg-[#F4F3F0] mx-auto p-4'>
      <h1 className='font-bold text-center text-2xl mt-4'>
        Update Coffee {storedCoffee.name}
      </h1>
      <div>
        <form
          onSubmit={handleUpdateCoffee}
          className='grid  grid-cols-1 md:grid-cols-2 gap-4'
        >
          {/* First Column */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter name'
              defaultValue={storedCoffee.name}
            />

            <label
              htmlFor='supplier'
              className='block mt-4 text-sm font-medium text-gray-700'
            >
              Supplier
            </label>
            <input
              type='text'
              id='supplier'
              name='supplier'
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter supplier'
              defaultValue={storedCoffee.supplier}
            />

            <label
              htmlFor='category'
              className='block mt-4 text-sm font-medium text-gray-700'
            >
              Category
            </label>
            <input
              type='text'
              id='category'
              name='category'
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter category'
              defaultValue={storedCoffee.category}
            />

            {/* Add more fields as needed */}
          </div>

          {/* Second Column */}
          <div>
            <label
              htmlFor='chef'
              className='block text-sm font-medium text-gray-700'
            >
              Chef
            </label>
            <input
              type='text'
              id='chef'
              name='chef'
              defaultValue={storedCoffee.chef}
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter chef'
            />

            <label
              htmlFor='taste'
              className='block mt-4 text-sm font-medium text-gray-700'
            >
              Taste
            </label>
            <input
              type='text'
              id='taste'
              name='taste'
              defaultValue={storedCoffee.taste}
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter taste'
            />

            <label
              htmlFor='details'
              className='block mt-4 text-sm font-medium text-gray-700'
            >
              Details
            </label>
            <input
              type='text'
              id='details'
              name='details'
              defaultValue={storedCoffee.details}
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter details'
            />

            {/* Add more fields as needed */}
          </div>

          {/* Common Fields */}
          <div className='col-span-2'>
            <label
              htmlFor='photoURL'
              className='block mt-4 text-sm font-medium text-gray-700'
            >
              Photo URL
            </label>
            <input
              type='text'
              id='photoURL'
              name='photoURL'
              defaultValue={storedCoffee.photoURL}
              className='mt-1 p-2 w-full border rounded-md'
              placeholder='Enter photo URL'
            />
          </div>

          {/* Submit Button */}
          <div className='col-span-2  mt-4'>
            <button
              type='submit'
              className='bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600'
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
