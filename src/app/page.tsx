import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={styles.center}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          ...inter.style,
        }}
      >
        <p className={styles.title}>
          Miss u qia
          <span
            style={{
              whiteSpace: "nowrap",
            }}
          >
            &nbsp;💕💕💕
          </span>
        </p>
        <p className={styles.desc} style={inter.style}>
          No matter what happens,
          <span
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {" "}
            I will stand for you
          </span>
        </p>
      </div>
    </main>
  );
}
