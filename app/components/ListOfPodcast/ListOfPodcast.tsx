import Link from "next/link";
import { Podcast as PodcastType } from "../../types/types";
import { Podcast } from "../Podcast/Podcast";

const fetchPodcast = () => {
  return fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  ).then((res) => res.json());
};

export async function ListOfPodcast() {
  const podcast = await fetchPodcast();
  return <Podcast podcast={podcast.feed.entry} />;
}
