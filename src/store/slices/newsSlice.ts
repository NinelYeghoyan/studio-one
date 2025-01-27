import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { News } from '@services/db.ts';
import { db } from '@services/db.ts';

interface NewsState {
  items: News[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  page: number;
  hasMore: boolean;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
  searchTerm: '',
  page: 1,
  hasMore: true,
};

const ITEMS_PER_PAGE = 6;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { news: NewsState };
      const { page, searchTerm } = state.news;

      const allNews = await db.getNews();
      const filteredNews = allNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      const paginatedNews = filteredNews.slice(0, page * ITEMS_PER_PAGE);
      const hasMore = paginatedNews.length < filteredNews.length;

      return { news: paginatedNews, hasMore };
    } catch {
      return rejectWithValue('Failed to fetch news');
    }
  },
);

export const addNews = createAsyncThunk(
  'news/addNews',
  async (news: Omit<News, 'id' | 'createdAt'>, { rejectWithValue }) => {
    try {
      const result = await db.addNews(news);
      return result;
    } catch {
      return rejectWithValue('Failed to add news');
    }
  },
);

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id: number, { rejectWithValue }) => {
    try {
      await db.deleteNews(id);
      return id;
    } catch {
      return rejectWithValue('Failed to delete news');
    }
  },
);

export const updateNews = createAsyncThunk(
  'news/updateNews',
  async (
    {
      id,
      updates,
    }: { id: number; updates: Partial<Omit<News, 'id' | 'createdAt'>> },
    { rejectWithValue },
  ) => {
    try {
      const result = await db.updateNews(id, updates);
      return result;
    } catch {
      return rejectWithValue('Failed to update news');
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.items = action.payload.news;
        state.hasMore = action.payload.hasMore;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchTerm, setPage, clearError } = newsSlice.actions;
export default newsSlice.reducer;
