import { withLoader } from "../../../hoc/withLoader";
import { SectionTitle } from "../SectionTitle/SectionTitle";

function CraftCategory({ data }) {
  return (
    <div>
      <SectionTitle title="Art & Craft Categories" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5 mx-2">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="border bg-white border-gray-200 rounded-lg p-2 shadow-xl hover:scale-[1.01] transition-transform duration-600">
                <img
                  className="h-52 w-full object-cover rounded-lg"
                  src={item.image}
                  alt="card-photo"
                />
                <ul className="space-y-2 p-2">
                  <li className="border-b py-1">{item.subcategory_name}</li>
                  <li className="border-b py-1">{item.key_elements}</li>
                  <li className="border-b py-1">{item.origins}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default withLoader(
  CraftCategory,
  `${import.meta.env.VITE_BASE_URL}/craft-category`
);
