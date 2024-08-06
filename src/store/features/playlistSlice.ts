import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
    currentTrack: null | TrackType,
    playlist: TrackType[],
    shuffledPlaylist: TrackType[],
    isShuffle: boolean,
    isPlaying: boolean
}

const initialState: PlaylistStateType = {
    currentTrack: null,
    playlist: [],
    shuffledPlaylist: [],
    isShuffle: false,
    isPlaying: false
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<{ track: TrackType, tracks: TrackType[] }>) => {
            state.currentTrack = action.payload.track;
            state.playlist = action.payload.tracks;
            state.shuffledPlaylist = [...action.payload.tracks].sort(() => 0.5 - Math.random());
        },
        setNextTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
            const newTrack = (currentTrackIndex + 1) % playlist.length;
            if (newTrack) {
                state.currentTrack = playlist[newTrack];
            } else {
                state.currentTrack = playlist[0];
            }
        },
        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            state.isShuffle = action.payload;
        },
        setPrevTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
            const newTrack = (currentTrackIndex - 1);
            if (newTrack) {
                state.currentTrack = playlist[newTrack];
            }
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setCurrentTrack, setNextTrack, setIsShuffle, setPrevTrack, setIsPlaying } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;