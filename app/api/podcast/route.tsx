import { NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

const cache = new LRUCache({
  max: 500,
  ttl: 1000 * 60 * 60 * 24,
});

const fetchPodcastData = async () => {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch podcasts");
  }
  const data = await res.json();
  return data;
};

export async function GET() {
  const cachedData = cache.get("podcastData");
  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  const data = await fetchPodcastData();
  cache.set("podcastData", data);

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
