import { useForm } from "react-hook-form";
import { FormGroup } from "../FormGroup/FormGroup";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

export function Craftitem() {
  const { user } = useContext(AuthContext);
  const displayName = user?.providerData[0].displayName;
  const displayEmail = user?.providerData[0].email;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      user_name: displayName,
      user_email: displayEmail,
    },
  });

  function onSubmit(data) {
    console.log("Submition", data);
    axios
      .post(
        "http://localhost:3000/create",
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("Added Successfully 😀");
        reset();
      })
      .catch((err) => {
        toast.error("Failed to add. Try Again!");
      });
  }

  return (
    <div className="flex justify-center items-center my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:gap-4 md:grid-cols-2 flex flex-col space-y-2 md:space-y-0">
          <FormGroup errorMessage={errors?.item_name?.message}>
            <label id="item_name">Name :</label>
            <input
              htmlFor="item_name"
              type="text"
              placeholder="Item Name"
              {...register("item_name", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.image?.message}>
            <label id="image">Image URL :</label>
            <input
              htmlFor="image"
              type="text"
              placeholder="Image URL"
              {...register("image", {
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^https?:\/\/\S+\.(?:png|jpg|jpeg|gif|bmp|svg)/,
                  message:
                    "Absolute link starts with http or https and ends with .png, .jpg, jpeg, .gif, .bmp",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.subcategory_name?.message}>
            <label id="subcategory_name">Subcategory Name :</label>
            <input
              htmlFor="subcategory_name"
              type="text"
              placeholder="Subcategory Name"
              {...register("subcategory_name", {
                required: { value: true, message: "Required" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.description?.message}>
            <label id="description">Description:</label>
            <textarea
              {...register("description", {
                required: { value: true, message: "Required" },
              })}
              id="description"
              cols="40"
              rows="3"
              className="input input-bordered w-full max-w-xs resize-none rounded-md"
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.price?.message}>
            <label id="price">
              Price :
              <input
                htmlFor="price"
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: { value: true, message: "Required" },
                  validate: {
                    positive: (v) => {
                      if (parseInt(v) <= 0) {
                        return "Must grater than 0";
                      }
                    },
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.rating?.message}>
            <label id="rating">
              Rating :
              <select
                {...register("rating", {
                  required: true,
                  message: "Selection required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.processing_time?.message}>
            <label id="processing_time">
              Processing Time :
              <select
                {...register("processing_time", {
                  required: true,
                  message: "Selection required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {[1.5, 2.3, 3.1].map((option) => (
                  <option key={option} value={option}>
                    {`${option + "h"}`}
                  </option>
                ))}
              </select>
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.customization?.message}>
            <label id="customization">
              Customization :
              <select
                {...register("customization", {
                  required: true,
                  message: "Selection required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {["yes", "no"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.stockStatus?.message}>
            <label id="stockStatus">
              Stock Status :
              <select
                {...register("stockStatus", {
                  required: true,
                  message: "Selection required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {["In stock", "Made to Order"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.user_email?.message}>
            <label id="user_email">
              User Email :
              <input
                disabled
                htmlFor="user_email"
                type="email"
                placeholder="Email"
                {...register("user_email", {
                  required: { value: true, message: "Required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="cursor-no-drop input input-bordered w-full max-w-xs"
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.user_name?.message}>
            <label id="user_name">
              User Name :
              <input
                disabled
                htmlFor="user_name"
                type="text"
                placeholder="Email"
                {...register("user_name", {
                  required: { value: true, message: "Required" },
                })}
                className="cursor-no-drop input input-bordered w-full max-w-xs"
              />
            </label>
          </FormGroup>
          <button className="btn btn-success text-white col-span-2 w-1/4 place-self-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
