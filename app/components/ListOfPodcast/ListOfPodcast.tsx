"use client";

import { useEffect, useState } from "react";
import { Podcast } from "../Podcast/Podcast";
import { Podcast as PodcastType } from "../../types/types";
import { usePodcastContext } from "../../context/PodcastContext";

import "./listOfPodcast.scss";

export function ListOfPodcast() {
  const [podcasts, setPodcasts] = useState<PodcastType[]>([]);
  const [searchText, setSearchText] = useState("");
  const { setData } = usePodcastContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/podcast");
        const data = await response.json();
        setPodcasts(data.feed.entry);
        setData(data.feed.entry);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPodcasts = podcasts.filter((podcast) => {
    return (
      podcast["im:name"].label
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  });
  return (
    <>
      <div className="podcast-searcher">
        <p className="podcast-searcher__counter">{filteredPodcasts.length}</p>
        <input
          type="text"
          placeholder="Filter podcast..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="podcast-list">
        <Podcast podcast={filteredPodcasts} />
      </div>
    </>
  );
}
