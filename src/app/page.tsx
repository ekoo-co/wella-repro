"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";

import EkooWidget from "@/lib/EkooWidget";

export default function Home() {
  const allProductIds = ["000000099350184513", "000000099350184411"];
  const [productId, setProductId] = useState(allProductIds[0]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <EkooWidget productId={productId} />
        </div>
        <div className={styles.ctas}>
          {allProductIds.map((id) => (
            <button
              type="button"
              onClick={() => setProductId(id)}
              key={id}
              style={{ fontWeight: id === productId ? "bold" : "normal" }}
            >
              {id || "no id"}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
