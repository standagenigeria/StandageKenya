import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface IPost  {
  id: number,
  name: string,
  content: {
    rendered: string
  },
  title: {
    rendered: string
  },
}

const Posts: IPost[] = [
  {
      id: 1,
      name: '',
      content: {
        rendered: ""
      },
      title: {
        rendered: ""
      }
  },
  {
      id: 2,
      name: '',
      content: {
        rendered: ""
    },
    title: {
      rendered: ""
    }
  }
]

type InitialState = {
  loading: boolean
  posts: IPost[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  posts: Posts,
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('/posts', () => {
  return axios
    .get('https://sutandeji.com.ng/?rest_route=/wp/v2/posts&_embed')
    .then(response => response.data)
})

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.loading = false
        state.posts = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default blogSlice.reducer