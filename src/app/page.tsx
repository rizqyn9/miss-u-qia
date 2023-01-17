import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p className={inter.className}>
          Miss u qia
          <span
            style={{
              whiteSpace: "nowrap",
            }}
          >
            💕💕💕
          </span>
        </p>
      </div>
    </main>
  );
}
