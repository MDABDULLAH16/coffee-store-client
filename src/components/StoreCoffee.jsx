import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const StoreCoffee = () => {
  const loadedStoredCoffee = useLoaderData();
  const [storedCoffee, setStoredCoffee] = useState(loadedStoredCoffee);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/storeCoffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete done a coffee from store!!");
        }
        const remainingCoffee = loadedStoredCoffee.filter(
          (coffee) => coffee._id !== _id
        );
        setStoredCoffee(remainingCoffee);
      });
  };
  return (
    <div>
      <h1 className='font-bold text-center text-2xl mt-4'>
        Available Coffee {storedCoffee.length}{" "}
      </h1>
      <div className='grid grid-cols-3 gap-4'>
        {storedCoffee.map((coffee) => (
          <div className='flex text-center'>
            <div className='' key={coffee._id}>
              <img
                width={"500px"}
                className='h-3/4'
                src={coffee.photoURL}
                alt=''
              />
              <h1 className='font-semibold text-2xl'> Name: {coffee.name}</h1>
              <p>Supplier: {coffee.supplier}</p>
              <p>Category: {coffee.category}</p>
              <p>Taste: {coffee.taste}</p>
              {/* <p>Details: {coffee.details}</p> */}

              <div className='flex'>
                <button
                  className='btn w-1/2 text-white font-bold btn-warning'
                  onClick={() => handleDelete(coffee._id)}
                >
                  Delete Coffee
                </button>
                <button className='btn w-1/2 btn-success'>
                  <Link to={`/updateCoffee/${coffee._id}`}>Update Coffee</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCoffee;
