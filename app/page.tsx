import styles from "./page.module.css";
import stylin from "@/stylin";

const P = stylin("p");

export default function Home() {
  return (
    <main className={styles.main}>
      <P color="red" text-transform="uppercase" font-weight="700">
        Marco Pitra
      </P>
    </main>
  );
}
