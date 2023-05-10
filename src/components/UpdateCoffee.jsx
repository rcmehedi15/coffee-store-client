import React from 'react';
import Swal from "sweetalert2";

const UpdateCoffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    return (
        <div>
            <h1>Update Coffee</h1>
        </div>
    );
};

export default UpdateCoffee;