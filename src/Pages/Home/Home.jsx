import { Helmet } from "react-helmet";
import { Extra_1 } from "../../components/Extra_1/Extra_1";
import { Extra_2 } from "../../components/Extra_2/Extra_2";
import { Hero } from "../../components/Hero/Hero";
import { Craft_items } from "../../components/Craft_items/Craft_items";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import CraftCategory from "../../components/CraftCategory/CraftCategory";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/craft-items`)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Painting & Drawing</title>
      </Helmet>
      <Hero />
      {loading ? <Loading /> : <Craft_items data={data} />}
      <Extra_1 />
      <Extra_2 />
      <CraftCategory />
    </div>
  );
}
