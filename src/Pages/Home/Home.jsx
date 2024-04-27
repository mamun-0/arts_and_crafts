import { Helmet } from "react-helmet";
import { Extra_1 } from "../../components/Extra_1/Extra_1";
import { Extra_2 } from "../../components/Extra_2/Extra_2";
import { Hero } from "../../components/Hero/Hero";

export function Home() {
  return (
    <div>
      <Helmet>
        <title>Art & Craft</title>
      </Helmet>
      <Hero />
      <Extra_1 />
      <Extra_2 />
    </div>
  );
}
