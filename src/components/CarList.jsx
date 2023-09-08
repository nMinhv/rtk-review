import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, fetchCars } from "../redux/carSlice";
import CarForm from "./CarForm";
function CarList() {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cars.status);
  const [selected, setSelected] = useState("");
  const handleEditCar = (car) => {
    setSelected(car);
  };
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  if (status === "loading") {
    return <div>loading...</div>;
  }
  return (
    <div>
      <SideBar />
      <h2>Car List</h2>
      <table
        border={1}
        style={{ margin: "0 auto", borderCollapse: "collapse" }}
        width={"80%"}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars
            ? cars.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.brand}</td>
                  <td>{e.price}</td>
                  <td>
                    <button onClick={() => dispatch(deleteCars(e.id))}>
                      Delete
                    </button>
                    <button onClick={() => handleEditCar(e)}>Edit</button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      <CarForm selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default CarList;
