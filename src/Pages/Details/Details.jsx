import { useEffect, useState } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ViewDetails } from "../../components/ViewDetails/ViewDetails";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

export function Details() {
  const [loading, setLodaing] = useState(true);
  const [data, setData] = useState(null);
  const { pathname } = useLocation();
  const url = `${import.meta.env.VITE_BASE_URL}${pathname}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLodaing(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <SectionTitle title="Details" />
          <div className="p-2 my-4">
            <ViewDetails details={data} />
          </div>
        </div>
      )}
    </>
  );
}
