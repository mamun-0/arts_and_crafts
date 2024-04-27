import { Helmet } from "react-helmet";
import { withLoader } from "../../../hoc/withLoader";
import { ArtAndCraftTable } from "../../components/ArtAndCraftTable/ArtAndCraftTable";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

function AllArtsCrafts(props) {
  return (
    <>
    <Helmet>
        <title>All Arts And Crafts</title>
      </Helmet>
      <SectionTitle title="Arts & Crafts" />
      <ArtAndCraftTable {...props} />
    </>
  );
}

export default withLoader(AllArtsCrafts, `${import.meta.env.VITE_BASE_URL}/all-art-craft`);
