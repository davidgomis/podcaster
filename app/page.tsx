import styles from "./page.module.css";
import { ListOfPodcast } from "./components/ListOfPodcast/ListOfPodcast";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ListOfPodcast />
    </main>
  );
}
