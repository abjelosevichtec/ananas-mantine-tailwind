import Layout from "../components/Layout";

import MobileTopList from "components/pages/home/MobileTopList";
import Hero from "components/pages/home/Hero";

export default function Home() {
  return (
    <Layout BeforeContent={MobileTopList}>
      <Hero />
    </Layout>
  );
}
