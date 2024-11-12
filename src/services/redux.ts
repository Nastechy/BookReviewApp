// import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './features/booksSlice';

// export const store = configureStore({
//   reducer: {
//     books: booksReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// interface Book {
//   id: string;
//   title: string;
//   author: string;
//   coverImage: string;
//   description: string;
//   reviews: Array<{ user: string; content: string }>;
// }

// interface BooksState {
//   books: Book[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: BooksState = {
//   books: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
//   // const res = await import('@/data/books.json');
//   return res.default;
// });

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addReview: (state, action: PayloadAction<{ bookId: string; review: { user: string; content: string } }>) => {
//       const book = state.books.find(book => book.id === action.payload.bookId);
//       if (book) {
//         book.reviews.push(action.payload.review);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBooks.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBooks.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.books = action.payload;
//       })
//       .addCase(fetchBooks.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || 'Failed to fetch books';
//       });
//   },
// });

// export const { addReview } = booksSlice.actions;
// export default booksSlice.reducer;

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from '/store';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;