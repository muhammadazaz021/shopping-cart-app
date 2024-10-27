// src/components/CheckoutForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Address:</label>
        <input 
          type="text" 
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <button type="submit">Submit Order</button>
    </form>
  );
}

export default CheckoutForm;
