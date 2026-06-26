import { useState } from "react";
import axios from "axios";

export default function AddProductForm({ onClose }) {
  // uploaded image ko input area me show karne ke liya
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // state for image upload progress
  const [uploadProgress, setUploadProgress] = useState(0);

  // Image select hote hi preview dikhane ke liye
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // state for take form data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    sale_price: null,
    weight: null,
    dimensions: null,
    stock: "",
    category: "",
  });

  // take form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    if (image) data.append("image", image);
    if (formData.sale_price) data.append("sale_price", formData.sale_price);
    if (formData.weight) data.append("weight", formData.weight);
    if (formData.dimensions) data.append("dimensions", formData.dimensions);
    data.append("stock", formData.stock);

    try {
      await axios.post("http://localhost:8000/products", data, {
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded * 100) / e.total);
          setUploadProgress(percent);
        },
      });

      alert("Product added!");
      onClose?.();
    } catch (err) {
      const message =
        err.response?.data?.detail || "Upload failed. Please try again.";
      console.error("Upload failed:", message);
      alert(message);
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <form
      className="mx-auto max-w-5xl bg-white absolute z-10 inset-0 lg:h-[90%] lg:mt-2 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      {/* Title */}
      <div className="border-b border-gray-200 px-6 lg:py-5 py-3">
        <h1 className="lg:text-xl font-bold text-gray-900">
          Add New Product
          <span className="font-normal text-gray-500">(Product Editor)</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {/* Left column */}
        <div className="px-6 py-6 lg:space-y-8 space-y-4">
          {/* Product Details */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Product Details
            </h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm text-gray-700">
                Product Name
              </label>
              <input
                title="must provide a product name"
                type="text"
                name="name"
                placeholder="Enter Product Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-700">
                Description & Meta
              </label>
              <textarea
                rows={4}
                placeholder="Detailed product description to add product comprention."
                value={formData.description}
                name="description"
                onChange={handleChange}
                className="w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 max-h-[100px] lg:max-h-[120px]"
              />
            </div>
          </div>

          {/* Pricing & Specs */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Pricing & Specs
            </h2>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Regular Price
                </label>
                <input
                  title="set price"
                  min="0"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Sale Price
                </label>
                <input
                  type="number"
                  name="sale_price"
                  onChange={handleChange}
                  value={formData.sale_price ?? ""}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  onChange={handleChange}
                  value={formData.weight ?? ""}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Dimensions
                </label>
                <input
                  type="text"
                  name="dimensions"
                  onChange={handleChange}
                  value={formData.dimensions ?? ""}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="px-6 py-6 lg:space-y-8 space-y-4">
          {/* Images & Stock */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Images & Stock
            </h2>

            <div className="flex flex-col">
              <label className="block text-sm text-gray-600 mb-1">
                Product image
              </label>

              <div className="rounded-md border-2 border-dashed border-gray-300 bg-gray-50 lg:h-60 h-30 text-gray-400 transition-colors hover:border-gray-400 hover:bg-gray-100 relative ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute cursor-pointer inset-0 h-full w-full"
                />

                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    className=" rounded-md absolute z-10 inset-0 h-full w-full "
                    onDoubleClick={() => {
                      setPreview(null);
                      setImage(null);
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Inventory
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Stock Level
                </label>
                <input
                  title="must provide stock"
                  type="number"
                  name="stock"
                  onChange={handleChange}
                  value={formData.stock}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">
                  Categories
                </label>

                <input
                  list="categories"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Select or type category"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required
                  title="must provide categorie"
                />

                <datalist id="categories">
                  <option value="Shoes" />
                  <option value="Apparel" />
                  <option value="Accessories" />
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
        <button
          type="button"
          className="rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          {loading ? `Uploading ${uploadProgress} ...` : "Add Product"}
        </button>
      </div>
    </form>
  );
}
