"use client";
import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

type CurrentTrackContextValue = {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
};
const CurrentTrackContext = createContext<CurrentTrackContextValue | undefined>(
  undefined
);

type CurrentTrackProviderProps = {
  children: ReactNode;
};

export function CurrentTrackProvider({ children }: CurrentTrackProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);


  return (
    <CurrentTrackContext.Provider
      value={{
        audioRef,
      }}
    >
      {children}
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  const context = useContext(CurrentTrackContext);
  if (context === undefined) {
    throw new Error("useCurrentTrack должен использоваться внутри провайдера");
  }
  return context;
}
