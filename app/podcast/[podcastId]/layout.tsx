"use client";
import { DataProvider } from "../../context/DataContext";
import { PodcastDetail } from "../../components/PodcastDetail/PodcastDetail";
import { usePodcastContext } from "../../context/PodcastContext";
import { usePodcastId } from "../../hooks/usePodcastId";

import "../../globals.scss";

export default function Podcast({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, filterById, filteredData } = usePodcastContext();
  const podcastId = usePodcastId();

  filterById(podcastId);

  console.log("oleoleDATA", data);
  console.log("oleoleFilter", filteredData);

  return (
    <DataProvider>
      <div>
        <PodcastDetail />
        {children}
      </div>
    </DataProvider>
  );
}
