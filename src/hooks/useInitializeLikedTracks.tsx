import { getFavoriteTrack } from "@/store/features/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

const useInitializeLikedTracks = () => {
  const tokens = useAppSelector((state) => state.user.tokens);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (tokens?.access) {
      dispatch(getFavoriteTrack(tokens));
    }
  }, [dispatch, tokens]);
};

export default useInitializeLikedTracks;
