import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../src/components/Loading/Loading";

export function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios
        .get(url)
        .then(({ data }) => {
          setData(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
    if (isLoading) return <Loading />;

    return <Element {...props} data={data} />;
  };
}
