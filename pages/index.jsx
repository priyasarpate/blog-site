import Head from "next/head";
import IntroPage from ".././components/HomePage/IntroPage";
import BlogPost from "../components/BlogPost";


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <IntroPage />
      </main>
    </div>
  );
}

