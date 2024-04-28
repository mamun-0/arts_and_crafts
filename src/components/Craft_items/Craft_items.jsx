import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

export function Craft_items({ data }) {
  return (
    <div>
      <SectionTitle title="Craft Items" />
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
                  <li className="border-b py-1">Item : {item.item_name}</li>
                  <li className="border-b py-1">
                    Price: {item.price} <span className="text-2xl">৳</span>
                  </li>
                  <li className="border-b py-1">Rating: {item.rating}</li>
                  <li className="border-b py-1">
                    Customization: {item.customization}
                  </li>
                  <li className="border-b py-1">
                    Stock Status: {item.stockStatus}
                  </li>
                </ul>
                <div className="text-right">
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/all-art-craft/${item._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
