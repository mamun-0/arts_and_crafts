import { useContext, useEffect, useState } from "react";
import { MyArtAndCraftCard } from "../../components/MyArtAndCraftCard/MyArtAndCraftCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import { useToggle } from "../../../hooks/useToggle";
import { Helmet } from "react-helmet";

export function MyArtAndCraft() {
  const { user } = useContext(AuthContext);
  const userEmail = user?.providerData[0].email;
  const [myArts, setMyArts] = useState([]);
  const [toggle, setToggle] = useToggle();
  //   const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/my-art-craft-list`,
        {
          user_email: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setMyArts(res.data);
      })
      .catch((err) => {
        // setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [toggle]);
  return (
    <>
      <Helmet>
        <title>My Arts & Crafts</title>
      </Helmet>
      <SectionTitle title="Personal Arts & Crafts" />
      {loading ? (
        <Loading />
      ) : myArts?.length == 0 ? (
        <h2 className="text-center text-red-500 text-2xl font-bold">
          Empty List
        </h2>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5 mx-2">
          <MyArtAndCraftCard myArtsAndCarts={myArts} setToggle={setToggle} />
        </div>
      )}
    </>
  );
}
