import React from "react";
import { Link } from "react-router-dom";
import { DeleteModal } from "../DeleteModal/DeleteModal";

export function MyArtAndCraftCard({ myArtsAndCarts, setToggle }) {
  return (
    <>
      {myArtsAndCarts.map((item, idx) => {
        const { image, item_name, price, rating, customization, stockStatus } =
          item;
        return (
          <div key={idx}>
            <div className="border bg-white border-gray-200 rounded-lg p-2 shadow-xl hover:scale-[1.01] transition-transform duration-600">
              <img
                className="h-52 w-full object-cover rounded-lg"
                src={image}
                alt="cart-heading-image"
              />
              <ul className="space-y-2 p-2">
                <li className="border-b py-1">Item : {item_name}</li>
                <li className="border-b py-1">
                  Price: {price} <span className="text-2xl">&#x09F3;</span>
                </li>
                <li className="border-b py-1">Rating: {rating}</li>
                <li className="border-b py-1">
                  Customization: {customization}
                </li>
                <li className="border-b py-1">Stock Status: {stockStatus}</li>
              </ul>
              <div className="text-right flex space-x-2">
                <Link
                  className="btn btn-info btn-sm"
                  to={`/my-art-craft-list/${item._id}`}
                >
                  Update
                </Link>
                <DeleteModal id={item._id} setToggle={setToggle} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
