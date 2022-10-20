import Layout from "../components/Layout";

import MobileTopList from "components/pages/home/MobileTopList";
import Hero from "components/pages/home/Hero";
import Aces from "components/pages/home/Aces";

export default function Home() {
  return (
    <Layout BeforeContent={MobileTopList}>
      <Hero />
      <Aces />
    </Layout>
  );
}
