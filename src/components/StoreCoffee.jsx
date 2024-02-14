import { data } from "autoprefixer";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
      <div>
        {storedCoffee.map((coffee) => (
          <div key={coffee._id}>
            <img width={"500px"} src={coffee.photoURL} alt='' />
            <h1 className='font-semibold text-2xl'>{coffee.name}</h1>
            <button
              className='btn btn-warning'
              onClick={() => handleDelete(coffee._id)}
            >
              Delete Coffee
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCoffee;