import { dislikeTrack, likeTrack } from "@/api/tracks";
import { setDislikeTrack, setLikeTrack } from "@/store/features/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";

const useLikeTrack = (track: TrackType) => {
  const { tokens } = useAppSelector((state) => state.user);
  const trackId = track._id;
  const dispatch = useAppDispatch();
  const likedTracks = useAppSelector((state) => state.tracks.favoritePlaylist);
  const isLiked = !!likedTracks.find(
    (track: TrackType) => track._id === trackId
  );

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!tokens?.access || !tokens?.refresh) return alert("Вы не авторизованы");

    const action = isLiked ? dislikeTrack : likeTrack;

    try {
      await action({ trackId, access: tokens.access, refresh: tokens.refresh });
      if (isLiked) {
        dispatch(setDislikeTrack(track));
      } else {
        dispatch(setLikeTrack(track));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLike, isLiked };
};

export default useLikeTrack;
