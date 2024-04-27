export function ViewDetails({ details }) {
  const {
    image,
    item_name,
    price,
    rating,
    short_description,
    processing_time,
    stockStatus,
    subcategory_Name,
    user_email,
    user_name,
    customization,
  } = details;
  return (
    <div className="grid md:gap-4 gap-2 md:grid-cols-2 grid-cols-1 place-items-center">
      <div className="col-span-2">
        <img className="h-[50vh] w-full" src={image} alt="card-image" />
      </div>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Name : {item_name}
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Subcategory : {subcategory_Name}
      </h2>
      <p className="col-span-2 text-xl font-medium p-2 bg-slate-300 ">
        Short Description : {short_description}
      </p>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Price : {price} <span className="text-2xl font-bold">&#2547;</span>
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Rating : {rating}
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Customization : {customization}
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Processing Time : {processing_time} weeks
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300">
        Stock Status : {stockStatus}
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300 col-span-2">
        User Email :{user_email}
      </h2>
      <h2 className="text-xl font-medium p-2 bg-slate-300 col-span-2">
        User Name : {user_name}
      </h2>
    </div>
  );
}
