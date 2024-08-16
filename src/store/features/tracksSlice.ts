import { fetchFavoriteTracks } from "@/api/tracks";
import { Tokens } from "@/types/tokens";
import { TrackType } from "@/types/tracks";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getFavoriteTrack = createAsyncThunk(
  "tracks/getFavoriteTracks",
  async ({ access, refresh }: Tokens) => {
    const favoriteTracks = fetchFavoriteTracks({ access, refresh });
    return favoriteTracks;
  }
);

type InitialStateType = {
  currentPlaylist: TrackType[];
  initialPlaylist: TrackType[];
  favoritePlaylist: TrackType[];
  filteredPlaylist: TrackType[];
  filterOptions: {
    author: string[],
    genre: string[],
    sort: string,
    searchString: string;
  };
  currentTrack: TrackType | null;
  isPlaying: boolean;
  initialTracks: TrackType[];
  isShuffle: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  currentPlaylist: [],
  initialPlaylist: [],
  favoritePlaylist: [],
  filteredPlaylist: [],
  filterOptions: {
    author: [],
    genre: [],
    sort: "по умолчанию",
    searchString: "",
  },
  currentTrack: null,
  isPlaying: false,
  initialTracks: [],
  isShuffle: false,
  isLoading: true,
  error: "",
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlaylist = action.payload;
      state.filteredPlaylist = action.payload;
      state.initialTracks = action.payload;
    },
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.initialPlaylist = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPrev: (state) => {
      const currentIdx = state.currentPlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      if (!currentIdx) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx - 1];
      state.isPlaying = true;
    },
    setNext: (state) => {
      const currentIdx = state.currentPlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      if (currentIdx >= state.currentPlaylist.length - 1) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx + 1];
      state.isPlaying = true;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
      const shuffleTracks = state.currentPlaylist.toSorted(
        () => Math.random() - 0.5
      );
      state.currentPlaylist = state.isShuffle
        ? shuffleTracks
        : state.initialTracks;
    },
    setDislikeTrack: (state, action: PayloadAction<TrackType>) => {
      const index = state.favoritePlaylist.findIndex(
        (track) => track._id === action.payload._id
      );
      state.favoritePlaylist.splice(index, 1);
    },
    setLikeTrack: (state, action: PayloadAction<TrackType>) => {
      state.favoritePlaylist.push(action.payload);
    },
    setFilters: (state, action: PayloadAction<{
      author?: string[];
      genre?: string[];
      sort?: string;
      searchString?: string;
    }>) => {
      state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,
        sort: action.payload.sort || state.filterOptions.sort,
        searchString:
          action.payload.searchString || state.filterOptions.searchString,
      }
      const filterTracks = [...state.currentPlaylist].filter((track) => {
        const hasSearchString = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchString.toLowerCase());
        const hasAuthor =
          state.filterOptions.author.length > 0
            ? state.filterOptions.author.includes(track.author)
            : true;
        const hasGenre =
          state.filterOptions.genre.length > 0
            ? state.filterOptions.genre.includes(track.genre[0])
            : true;

        return hasAuthor && hasGenre && hasSearchString;
      });
      switch (state.filterOptions.sort) {
        case "Сначала новые":
          filterTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filterTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );

        default:
          filterTracks;
          break;
      }
      state.filteredPlaylist = filterTracks;
    },
    resetFilters: (state) => {
      state.filterOptions = {
        author: [],
        genre: [],
        sort: "По умолчанию",
        searchString: "",
      };
      state.filteredPlaylist = state.currentPlaylist;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(
        getFavoriteTrack.fulfilled,
        (state, action: PayloadAction<TrackType[]>) => {
          state.favoritePlaylist = action.payload;
        }
      )
      .addCase(getFavoriteTrack.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
          console.error("Error:", action.error.message);
        }
      });
  },
});

export const {
  setCurrentPlaylist,
  setInitialPlaylist,
  setCurrentTrack,
  setFilters,
  setPrev,
  setNext,
  setShuffle,
  setIsPlaying,
  setDislikeTrack,
  setLikeTrack,
  resetFilters,
  setIsLoading
} = tracksSlice.actions;
export const tracksReducers = tracksSlice.reducer;
