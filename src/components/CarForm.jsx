import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCarts, putCarts } from "../redux/carSlice";
// import SideBar from "./SideBar";

function CarForm({ selected, setSelected }) {
  console.log(selected);
  const [inputForm, setInputForm] = useState({ brand: "", price: "" });
  console.log(inputForm);
  const { brand, price } = inputForm;
  const dispatch = useDispatch();
  const hangleChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
    // console.log(brand, price);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selected) {
      dispatch(putCarts({ inputForm: inputForm, id: selected.id }));
    } else {
      dispatch(postCarts(inputForm));
    }
    setInputForm({ brand: "", price: "" });
    setSelected("");
  };
  useEffect(() => {
    if (selected) {
      setInputForm({
        brand: selected.brand,
        price: selected.price,
      });
    }
  }, [selected]);
  return (
    <div>
      {/* <SideBar /> */}
      <h2>Cars Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Brand</label>
        <input
          value={brand}
          onChange={hangleChangeInput}
          name="brand"
          type="text"
        />
        <br />
        <label htmlFor="">Price</label>
        <input
          value={price}
          onChange={hangleChangeInput}
          name="price"
          type="text"
        />
        <br />
        <button type="submit">{selected ? "Update Car" : "Add Car"}</button>
      </form>
    </div>
  );
}

export default CarForm;
