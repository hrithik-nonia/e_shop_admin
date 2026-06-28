import { useState } from "react";

// Categories list — easily swappable with data from your API
const CATEGORIES = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Audio",
  "Accessories",
  "Clothing",
  "Home Appliances",
  "Books",
  "Groceries",
];

export default function CategoryFilterSidebar({ onClose }) {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(new Set(["Smartphones", "Tablets"]));

  const filtered = CATEGORIES.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleCategory = (category) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(category) ? next.delete(category) : next.add(category);
      return next;
    });
  };

  return (
    <div className="w-72 bg-white rounded-xl border border-gray-200 shadow-sm p-3 absolute lg:top-[35%] lg:right-[15%]">
      {/* Search box */}
      <div className="relative mb-2">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search categories..."
          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                     placeholder:text-gray-400"
        />
      </div>

      {/* All Categories toggle row */}
      <div className="flex ">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 w-full px-1 py-1.5 text-sm font-medium text-gray-800"
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform ${
              expanded ? "rotate-0" : "-rotate-90"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-gray-400">[-]</span>
          <span>All Categories</span>
        </button>

        {/* close btn */}
        <button className="text-2xl font-semibold" onClick={onClose}>
          x
        </button>
      </div>

      {/* Scrollable category list */}
      {expanded && (
        <div className="max-h-64 overflow-y-auto pr-1 mt-1">
          <ul className="space-y-0.5">
            {filtered.map((category) => {
              const isChecked = selected.has(category);
              return (
                <li key={category}>
                  <label
                    className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer text-sm
                                ${isChecked ? "bg-blue-50" : "hover:bg-gray-50"}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCategory(category)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-2 py-3 text-sm text-gray-400 text-center">
                No categories found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
