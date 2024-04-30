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
  const [selectedOption, setSelectedOption] = useState("");
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
  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/filter/my-art-craft-list`,
        { search: selectedOption, user_email: userEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setMyArts(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedOption]);
  const handleChange = (event) => {
    setLoading(true);
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>My Arts & Crafts</title>
      </Helmet>
      <SectionTitle title="Personal Arts & Crafts" />
      <div className="text-center">
        <label htmlFor="yesno" className="text-xl font-bold">
          Filter :{" "}
        </label>
        <select
          id="yesno"
          value={selectedOption}
          onChange={handleChange}
          className="text-lg"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
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
