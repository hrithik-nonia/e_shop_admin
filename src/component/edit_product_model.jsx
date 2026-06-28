import { useState } from "react";
import { Check, X } from "lucide-react";

export default function EditProductModal({
  onClose,
  product = {
    name: "iPhone 13 Pro",
    description:
      "iPhone 13 Pro is dolor sit amet, consectetur marketing text, and trarite rooming. Emnurtent marketing for mercbeauty brepltramcin! It the exambient branrss in oppomar's ettaa solusions and soviting brand.then.smartmarketing mooh.",
    image:
      "https://images.unsplash.com/photo-1632661674596-618858cba98b?w=300&q=80",
    category: "Smartphones",
    brand: "Apple",
    sku: "A-102",
    skuSecondary: "A-102",
    price: "899",
    salePrice: "0",
    stock: "50",
    active: true,
  },
  onSave,
}) {
  const [form, setForm] = useState(product);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 pt-5 pb-4">
          <h2 className="text-lg text-gray-800">
            Edit Product:{" "}
            <span className="font-semibold text-gray-900">{form.name}</span>
          </h2>
        </div>

        {/* Scrollable body */}
        <div className="px-6 overflow-y-auto flex-1 space-y-5 pb-2">
          {/* Image + name */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2 shrink-0">
              <img
                src={form.image}
                alt={form.name}
                className="w-24 h-24 object-cover rounded-lg border border-gray-200 bg-gray-50"
              />
              <button
                type="button"
                className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              >
                Change Image
              </button>
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">
                Product Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />

              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Product Description
              </label>
              <textarea
                value={form.description}
                onChange={update("description")}
                rows={4}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
              />
            </div>
          </div>

          {/* Category / Brand */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category
              </label>
              <select
                value={form.category}
                onChange={update("category")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
              >
                <option>Smartphones</option>
                <option>Laptops</option>
                <option>Tablets</option>
                <option>Audio</option>
                <option>Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Brand</label>
              <input
                type="text"
                value={form.brand}
                onChange={update("brand")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          {/* SKU / SKU */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">SKU</label>
              <input
                type="text"
                value={form.sku}
                onChange={update("sku")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">SKU</label>
              <input
                type="text"
                value={form.skuSecondary}
                onChange={update("skuSecondary")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          {/* Price / Sale Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Price</label>
              <input
                type="text"
                value={`$${form.price}`}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    price: e.target.value.replace(/^\$/, ""),
                  }))
                }
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Sale Price
              </label>
              <input
                type="text"
                value={`$${form.salePrice}`}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    salePrice: e.target.value.replace(/^\$/, ""),
                  }))
                }
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          {/* Stock / Status */}
          <div className="grid grid-cols-2 gap-4 pb-2">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                value={form.stock}
                onChange={update("stock")}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Product Status
              </label>
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({ ...prev, active: !prev.active }))
                }
                className="flex items-center gap-2 mt-1.5"
              >
                <span
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    form.active ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                      form.active ? "translate-x-4.5" : "translate-x-0.5"
                    }`}
                  />
                </span>
                <span className="text-sm text-gray-700">
                  {form.active ? "Active" : "Inactive"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => onSave?.(form)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
          >
            <Check className="h-4 w-4" strokeWidth={2.5} />
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
