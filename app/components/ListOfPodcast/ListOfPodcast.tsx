import { Podcast } from "../Podcast/Podcast";
import "./listOfPodcast.scss";

const fetchPodcast = () => {
  return fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  ).then((res) => res.json());
};

export async function ListOfPodcast() {
  const podcast = await fetchPodcast();
  return (
    <div className="podcast-list">
      <Podcast podcast={podcast.feed.entry} />
    </div>
  );
}
