import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  posts: [],
  singlePost: [],
  currentPage: 1,
  error: "",
  postId: null,
  totalPages: 5,
};

// Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk("/posts", (currentPage) => {
  return  axios
    .get(
      `https://sutandeji.com.ng/?rest_route=/wp/v2/posts&page=${currentPage}`
    )
    .then((result) => {
      let data = {
        result: result.data,
        page: currentPage,
        totalPages: result.headers["x-wp-totalpages"],
      };
      return data;
    });
});

// Generates pending, fulfilled and rejected action types
export const fetchSinglePost = createAsyncThunk("/posts/:id", async(id) => {
  let blogId = Number(id * 1);
  console.log(blogId.type)
  return await axios

    .get(`https://sutandeji.com.ng/?rest_route=/wp/v2/posts/${blogId}`)
    .then((result) => {
      let data = {
        result: result.data,
        postId: id,
      };
      return data;
    });
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.result;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPages;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchSinglePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.singlePost = action.payload.result;
      state.postId = action.payload.postId
      state.error = "";
    });
    builder.addCase(fetchSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.postId = null;
      state.singlePost = [];
    });
  },
});

export default blogSlice.reducer;
