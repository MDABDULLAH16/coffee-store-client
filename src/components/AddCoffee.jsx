import React from "react";

const AddCoffee = () => {
  return (
    <div className='container w-3/4  bg-[#F4F3F0] mx-auto p-4'>
      <h1 className='font-bold text-center text-2xl mt-8'>Add New Coffee</h1>
      <p className='m-6'>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className='grid  grid-cols-1 md:grid-cols-2 gap-4'>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
