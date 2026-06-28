import { useState, useEffect, useContext } from "react";
import {
  Package,
  PieChart,
  TrendingDown,
  DollarSign,
  Search,
  ChevronDown,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import CategoryFilterSidebar from "../component/filter_category_dropdown";
import AddProductForm from "../component/add_product";
import axios from "axios";
import { AppContext } from "../app_context/context";
import EditProductModal from "../component/edit_product_model";
const products = [
  {
    id: 1,
    name: "iPhone 13",
    sku: "A-101",
    price: "$799",
    stock: 50,
    status: "In Stock",
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    sku: "A-102",
    price: "$899",
    stock: 50,
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "iPhone 13 Mafk",
    sku: "A-103",
    price: "$999",
    stock: 50,
    status: "Draft",
  },
  {
    id: 4,
    name: "iPhone 13 Pro Mash",
    sku: "A-104",
    price: "$799",
    stock: 50,
    status: "In Stock",
  },
  {
    id: 5,
    name: "iPhone 13 Lilop",
    sku: "A-101",
    price: "$799",
    stock: 50,
    status: "Draft",
  },
];

const statusStyles = {
  "In Stock": "bg-green-100 text-green-700",
  "Out of Stock": "bg-red-100 text-red-600",
  Draft: "bg-amber-100 text-amber-700",
};

export default function ProductsDashboard() {
  // take value from context
  const {
    showAddProductForm,
    setShowAddProductForm,
    showEditProductModel,
    setShowEditProductModel,
  } = useContext(AppContext);
  // state for show add product panel
  const [selected, setSelected] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(false);

  // product count
  // total product count
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/products/count",
        );

        setProductCount(response.data); // ya jo bhi key ho response mein
      } catch (err) {
        console.error("Failed to fetch product count:", err);
      }
    };
    fetchProductCount();
  }, []);

  // active product count
  const [activeProductCount, setActiveProductCount] = useState(0);

  useEffect(() => {
    const fetchActiveProductCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/products/active_count",
        );

        setActiveProductCount(response.data); // ya jo bhi key ho response mein
      } catch (err) {
        console.error("Failed to fetch active product count:", err);
      }
    };
    fetchActiveProductCount();
  }, []);

  // low stock product count
  const [lowStockProductCount, setLowStockProductCount] = useState(0);

  useEffect(() => {
    const fetchLowStockProductCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/products/low_stock_count",
        );

        setLowStockProductCount(response.data); // ya jo bhi key ho response mein
      } catch (err) {
        console.error("Failed to fetch low stock product count:", err);
      }
    };
    fetchLowStockProductCount();
  }, []);

  const stats = [
    {
      label: "Total Products",
      value: productCount,
      icon: Package,
      bg: "bg-blue-50",
      color: "text-blue-500",
    },
    {
      label: "Active Products",
      value: activeProductCount,
      icon: PieChart,
      bg: "bg-blue-50",
      color: "text-blue-500",
    },
    {
      label: "Low Stock",
      value: lowStockProductCount,
      icon: TrendingDown,
      bg: "bg-amber-50",
      color: "text-amber-500",
    },
    {
      label: "Total Sales",
      value: "$34,890",
      icon: DollarSign,
      bg: "bg-green-50",
      color: "text-green-500",
    },
  ];

  // --------------------------------

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8 mb-10 md:mb-0 relative">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>

        {/* Stat cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6 ">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3"
              >
                <div className={`${stat.bg} ${stat.color} rounded-lg p-2.5`}>
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product list card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-4 flex-wrap gap-3">
            <h2 className="font-semibold text-gray-900">Product List</h2>
            <div className="flex items-center gap-3">
              {/* search input */}
              <div className="relative hidden md:flex">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-56 pl-9 pr-3 py-2 rounded-md border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* filter dropdown */}
              <button
                className="md:flex items-center gap-1.5 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hidden "
                onClick={() => setSelectedCategory(true)}
              >
                Filter by Category
                <ChevronDown className="w-4 h-4" />
              </button>
              {selectedCategory && (
                <CategoryFilterSidebar
                  onClose={() => setSelectedCategory(false)}
                />
              )}

              {/* add product button */}
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
                onClick={() => setShowAddProductForm(true)}
              >
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto ">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-gray-100 text-gray-500 text-xs">
                  <th className="px-5 py-3 text-left w-10">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-3 py-3 text-left font-medium">Image</th>
                  <th className="px-3 py-3 text-left font-medium">
                    Product Name
                  </th>
                  <th className="px-3 py-3 text-left font-medium">SKU</th>
                  <th className="px-3 py-3 text-left font-medium">Price</th>
                  <th className="px-3 py-3 text-left font-medium">Stock</th>
                  <th className="px-3 py-3 text-left font-medium">Status</th>
                  <th className="px-3 py-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-t border-gray-100 ">
                    <td className="px-5 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(p.id)}
                        onChange={() => toggleSelect(p.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <div className="w-9 h-9 rounded-md bg-gray-900" />
                    </td>
                    <td className="px-3 py-3 text-gray-800">{p.name}</td>
                    <td className="px-3 py-3 text-gray-500">{p.sku}</td>
                    <td className="px-3 py-3 text-gray-800">{p.price}</td>
                    <td className="px-3 py-3 text-gray-800">{p.stock}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[p.status]}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => setShowEditProductModel(true)}
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-1.5 px-5 py-4 text-sm">
            <button className="px-3 py-1.5 rounded-md text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="w-8 h-8 rounded-md bg-blue-500 text-white font-medium">
              1
            </button>
            <button className="w-8 h-8 rounded-md text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 rounded-md text-gray-600 hover:bg-gray-50">
              3
            </button>
            <span className="px-1 text-gray-400">...</span>
            <button className="w-8 h-8 rounded-md text-gray-600 hover:bg-gray-50">
              10
            </button>
            <button className="px-3 py-1.5 rounded-md text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* show add product panel */}
        {showAddProductForm && (
          <AddProductForm onClose={() => setShowAddProductForm(false)} />
        )}

        {/* show edit product model */}
        {showEditProductModel && (
          <EditProductModal onClose={() => setShowEditProductModel(false)} />
        )}
      </div>
    </>
  );
}
