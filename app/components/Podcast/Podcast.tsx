import Image from "next/image";
import Link from "next/link";
import { Podcast as PodcastType } from "../../types/types";

import "./podcast.scss";

interface PodcastProps {
  podcast: PodcastType[];
}

export const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  return podcast.map((item: PodcastType) => (
    <figure className="podcast" key={item.id.attributes["im:id"]}>
      <Link href={`/podcast/${item.id.attributes["im:id"]}`}>
        <Image
          src={item["im:image"][2]?.label}
          alt="Vercel Logo"
          width={100}
          height={100}
          priority
          className="podcast__image"
        />
        <div className="podcast__text">
          <h4>{item["im:name"].label}</h4>
          <p>{item["im:artist"].label}</p>
        </div>
      </Link>
    </figure>
  ));
};
