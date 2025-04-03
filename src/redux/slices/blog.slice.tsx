import { Blog } from '@/types/blog.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blogs as initialData } from '@/components/blog.data';

interface BlogState {
  blogs: Blog[];
}

const initialState: BlogState = {
  blogs: [...initialData],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action: PayloadAction<Blog>) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action: PayloadAction<string>) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
