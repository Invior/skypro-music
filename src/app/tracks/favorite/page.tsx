"use client";
import { FavoriteTracks } from "@/components/FavoriteTracks/FavoriteTracks";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

export default function FavoritePage() {
  const user = useAppSelector((state) => state.user.user);
  const router = useRouter();
    if (user?.email) {
      return <FavoriteTracks />
    } else {
      return router.push("/tracks");
    }
}