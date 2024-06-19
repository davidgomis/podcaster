import { useContext } from "react";
import { DataContext } from "@/app/context/DataContext";
import Image from "next/image";

export const PodcastDetailList = () => {
  const { data } = useContext(DataContext);

  if (!data || data.length === 0) {
    return <div>Cargando...</div>;
  }

  const detail = data[0];
  const { artistName, trackName, artworkUrl600 } = detail;

  console.log("data", data);

  return (
    <div className="podcast-detail">
      <Image
        src={artworkUrl600}
        alt="Vercel Logo"
        width={180}
        height={180}
        priority
        className="podcast-detail__image"
      />
      <p>{trackName}</p>
      <p>by {artistName}</p>
    </div>
  );
};
