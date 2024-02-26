import Link from "next/link";
import styles from "./product-nav-bar.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProductNavBar(): React.ReactNode {
  return (
    <section className={inter.className}>
      <nav className={styles.productNav}>
        <Link className={styles.productLink} href="/">
          Home
        </Link>{" "}
        Product nav menu - shared between all pages in `/product`
      </nav>
    </section>
  );
}
