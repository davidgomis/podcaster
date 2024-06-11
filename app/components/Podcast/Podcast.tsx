import Image from "next/image";
import Link from "next/link";
import { Podcast as PodcastType } from "../../types/types";
import styles from "./navigation.module.css";

interface PodcastProps {
  podcast: PodcastType[];
}

export const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  return podcast.map((item: PodcastType) => (
    <article key={item.id.attributes["im:id"]}>
      <Link href="/posts/[id]" as={`/posts/${item.id}`}>
        <Image
          src={item["im:image"][2]?.label}
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />

        <h2>{item["im:name"].label}</h2>
        <p>{item["im:artist"].label}</p>
      </Link>
    </article>
  ));
};
