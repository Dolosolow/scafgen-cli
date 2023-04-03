import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS</title>
        <meta name="description" content="Generated by gen-scaffold" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}>
        <Image src="/bonfire.png" alt="Next.js Logo" width={180} height={180} priority />
      </main>
    </>
  );
}
