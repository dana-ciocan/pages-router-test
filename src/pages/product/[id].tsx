import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import ProductNavBar from "@/components/product-nav-bar/ProductNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Product() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductNavBar />
      <main className={`${styles.main} ${inter.className}`}>
        Product page: {router.query.id}
      </main>
    </>
  );
}
