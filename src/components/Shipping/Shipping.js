import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} =useAuth();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
               
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                
                <input defaultValue="address" {...register("address", { required: true })} />
                <input defaultValue="city" {...register("city", { required: true })} />
                <input defaultValue="phone" {...register("phone", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;