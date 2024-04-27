import { Link } from "react-router-dom";

export function ArtAndCraftTable(props) {
  const allArtsAndCrafts = props?.data;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Subcategory</th>
              <th>
                <span className="text-2xl font-bold">&#2547;</span> price
              </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row starts*/}

            {allArtsAndCrafts && allArtsAndCrafts?.length ? (
              allArtsAndCrafts.map((item, idx) => {
                const { item_name, subcategory_name, price } = item;
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{item_name}</td>
                    <td>{subcategory_name}</td>
                    <td>{price}</td>
                    <td>
                      <Link
                        to={`/all-art-craft/${item._id}`}
                        className="btn btn-sm"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="text-center font-bold text-red-500 text-2xl">
                <td className="col-span-3">Empty List</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
