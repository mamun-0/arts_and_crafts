import { Helmet } from "react-helmet";
import { Craftitem } from "../../components/CraftItem/Craftitem";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function AddCraft() {
  return (
    <div>
      <Helmet>
        <title>Add Craft</title>
      </Helmet>
      <SectionTitle title="Add Item" />
      <Craftitem />
    </div>
  );
}
