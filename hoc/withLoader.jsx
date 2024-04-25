import axios from "axios";
import { useEffect, useState } from "react";

export function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios
        .get(url)
        .then(({ data }) => {
          setData(data);
        })
        .catch(({ message }) => {
          setError(message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
    if (isLoading) return <Loading />;
    if (error) return <Error msg={error} />;

    return <Element {...props} data={data} error={error} />;
  };
}
