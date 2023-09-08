import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const response = await axios.get("http://localhost:8000/cars");
  return response.data;
});
export const deleteCars = createAsyncThunk("fdeleteCars", async (id) => {
  await axios.delete(`http://localhost:8000/cars/${id}`);
  // console.log(id);
  // return response.data;
  return id;
});
export const postCarts = createAsyncThunk("postCars", async (car) => {
  const response = await axios.post("http://localhost:8000/cars", car);
  return response.data;
});
export const putCarts = createAsyncThunk("putCars", async (car) => {
  const response = await axios.put(
    `http://localhost:8000/cars/${car.id}`,
    car.inputForm
  );
  return response.data;
});
const cartSlice = createSlice({
  name: "cars",
  initialState: { cars: [], status: "idle", error: null },
  // sử dụng để viết action
  reducers: {},
  // sử dụng để xử lý các api
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = "success";
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "Error";
      });
    builder.addCase(deleteCars.fulfilled, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.status = "success";
    });
    builder.addCase(postCarts.fulfilled, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(putCarts.fulfilled, (state, action) => {
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
    });
  },
});
export default cartSlice.reducer;
