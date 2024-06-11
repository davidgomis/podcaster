"use client";

import { useEffect, useState } from "react";
import { Podcast } from "../Podcast/Podcast";
import { Podcast as PodcastType } from "../../types/types";

import "./listOfPodcast.scss";

export function ListOfPodcast() {
  const [podcasts, setPodcasts] = useState<PodcastType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/podcast");
        const data = await response.json();
        setPodcasts(data.feed.entry);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="podcast-list">
      <Podcast podcast={podcasts} />
    </div>
  );
}
