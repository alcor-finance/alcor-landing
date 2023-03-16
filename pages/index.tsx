import Head from "next/head";
import { Home } from "pages/home/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | DeltaDex</title>
      </Head>
      <Home />
    </>
  );
}
