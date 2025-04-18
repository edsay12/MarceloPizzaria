import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredentials: { email: string; senha: string }) => {
    // const request = ""; // Fazer a requisição
    return localStorage.setItem("user", JSON.stringify(userCredentials));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        (state.loading = true), (state.user = null), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload!),
          (state.error = null);
      })
      .addCase(loginUser.rejected, (state) => {
        (state.loading = false),
          (state.user = null),
          (state.error = null);
      });
  },
  reducers: {},
});

export default userSlice.reducer;
