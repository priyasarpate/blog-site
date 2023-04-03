import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import IntroPage from ".././components/HomePage/IntroPage";
import Footer from "../components/Footer/Footer";
import BlogPost from "../components/BlogPost";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Navbar />
        <IntroPage />
        <Footer />
        {/* <BlogPost /> */}
      </main>
    </div>
  );
}
