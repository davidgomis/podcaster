import Link from "next/link";
import styles from "../../page.module.css";

export default function PodcastPage() {
  return (
    <main className={styles.main}>
      <Link
        as={`/podcast/[podcastId]/episode/[epidoseId]`}
        href={`/podcast/item.id.attributes["im:id"]`}
      >
        LINK
      </Link>
    </main>
  );
}
