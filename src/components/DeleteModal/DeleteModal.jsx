import axios from "axios";
import { toast } from "react-toastify";

export function DeleteModal({ id, setToggle }) {
  function deletePost(id) {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/my-art-craft-list/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully!");
        setToggle();
      })
      .catch(() => {
        toast.error("Deletion failed!");
      });
  }
  return (
    <div>
      <button
        className="btn btn-error btn-sm"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        Delete
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are You sure to delete this item🤔🤔!
          </h3>
          <p className="py-4">
            Press ESC key or click the{" "}
            <span className="font-black text-green-600">No</span> button to
            cancel deletion
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  deletePost(id);
                }}
                className="btn btn-error"
              >
                Yes
              </button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-accent">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
