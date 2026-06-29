import {
  Package,
  CircleCheck,
  CircleMinus,
  CircleX,
  TrendingDown,
  Boxes,
  Grid2x2,
  FileText,
  ClipboardList,
  Clock,
  Truck,
  PackageCheck,
  Ban,
  DollarSign,
  Coins,
  Wallet,
  Users,
  UserPlus,
  Banknote,
  CreditCard,
  ArrowUp,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import CountService from "../api/api";
import { useEffect, useState } from "react";

// ---- Trend badge -----------------------------------------------------

function Trend({ direction, value }) {
  const config = {
    up: { Icon: ArrowUp, color: "text-green-600" },
    down: { Icon: ArrowDown, color: "text-red-500" },
    flat: { Icon: ArrowRight, color: "text-gray-400" },
  }[direction];

  const { Icon, color } = config;

  return (
    <span className={`flex items-center gap-0.5 text-sm font-medium ${color}`}>
      <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      {value}
    </span>
  );
}

// ---- Single stat card -------------------------------------------------

function StatCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  trend,
  trendValue,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex gap-3">
      <div
        className={`shrink-0 h-11 w-11 rounded-lg flex items-center justify-center ${iconBg}`}
      >
        <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-gray-500 truncate">{title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xl font-semibold text-gray-900">{value}</span>
          <Trend direction={trend} value={trendValue} />
        </div>
        <p className="text-xs text-gray-400 mt-0.5">Compared to last month</p>
      </div>
    </div>
  );
}

// ---- Dashboard grid -----------------------------------------------------
export default function DashboardStats() {
  // ---- Data: swap with your live API response ---------------------------
  // get total product count
  const [totalProduct, setTotalProduct] = useState(null);
  useEffect(() => {
    CountService.totalCount().then((data) => {
      setTotalProduct(data);
    });
  }, []);

  //get active product count
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    CountService.activeProductsCount().then((data) => {
      setActiveProduct(data);
    });
  }, []);

  // inactive products
  const [inactiveProduct, setInactiveProduct] = useState(null);
  useEffect(() => {
    CountService.inActiveProducts().then((data) => {
      setInactiveProduct(data);
    });
  }, []);

  // out of stock products
  const [outOfStockProduct, setOutOfStockProduct] = useState(null);
  useEffect(() => {
    CountService.outOfStockProductsCount().then((data) => {
      setOutOfStockProduct(data);
    });
  }, []);

  // low stock products
  const [lowStockProduct, setLowStockProduct] = useState(null);
  useEffect(() => {
    CountService.lowStockProductsCount().then((data) => {
      setLowStockProduct(data);
    });
  }, []);

  const STATS = [
    {
      icon: Package,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      title: "Total Products",
      value: totalProduct,
      trend: "up",
      trendValue: "5%",
    },
    {
      icon: CircleCheck,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      title: "Active Products",
      value: activeProduct,
      trend: "up",
      trendValue: "3%",
    },
    {
      icon: CircleMinus,
      iconBg: "bg-gray-200",
      iconColor: "text-gray-500",
      title: "Inactive Products",
      value: inactiveProduct,
      trend: "down",
      trendValue: "1%",
    },
    {
      icon: CircleX,
      iconBg: "bg-red-100",
      iconColor: "text-red-400",
      title: "Out of Stock Products",
      value: outOfStockProduct,
      trend: "flat",
      trendValue: "0%",
    },

    {
      icon: TrendingDown,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-400",
      title: "Low Stock Products",
      value: lowStockProduct,
      trend: "down",
      trendValue: "2%",
    },
    {
      icon: Boxes,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-500",
      title: "Total Stock Quantity",
      value: "2,500",
      trend: "up",
      trendValue: "8%",
    },
    {
      icon: Grid2x2,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      title: "Total Categories",
      value: "12",
      trend: "flat",
      trendValue: "0%",
    },
    {
      icon: FileText,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Total Orders",
      value: "1,250",
      trend: "up",
      trendValue: "15%",
    },

    {
      icon: ClipboardList,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "New Orders",
      value: "55",
      trend: "up",
      trendValue: "20%",
    },
    {
      icon: Clock,
      iconBg: "bg-lime-100",
      iconColor: "text-lime-600",
      title: "Processing Orders",
      value: "110",
      trend: "up",
      trendValue: "10%",
    },
    {
      icon: Truck,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      title: "Shipped Orders",
      value: "980",
      trend: "up",
      trendValue: "12%",
    },
    {
      icon: PackageCheck,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      title: "Delivered Orders",
      value: "950",
      trend: "up",
      trendValue: "14%",
    },

    {
      icon: Ban,
      iconBg: "bg-orange-200",
      iconColor: "text-orange-600",
      title: "Cancelled Orders",
      value: "50",
      trend: "down",
      trendValue: "5%",
    },
    {
      icon: Ban,
      iconBg: "bg-orange-200",
      iconColor: "text-orange-600",
      title: "Cancelled Orders",
      value: "50",
      trend: "down",
      trendValue: "5%",
    },
    {
      icon: DollarSign,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
      title: "Total Sales",
      value: "$134,890",
      trend: "up",
      trendValue: "25%",
    },
    {
      icon: Coins,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-400",
      title: "Today's Sales",
      value: "$4,500",
      trend: "up",
      trendValue: "30%",
    },

    {
      icon: Wallet,
      iconBg: "bg-emerald-200",
      iconColor: "text-emerald-700",
      title: "Monthly Revenue",
      value: "$45,000",
      trend: "up",
      trendValue: "18%",
    },
    {
      icon: Users,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      title: "Total Customers",
      value: "15,200",
      trend: "up",
      trendValue: "9%",
    },
    {
      icon: UserPlus,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-500",
      title: "New Customers",
      value: "350",
      trend: "up",
      trendValue: "11%",
    },
    {
      icon: Banknote,
      iconBg: "bg-amber-200",
      iconColor: "text-amber-700",
      title: "Total Profit",
      value: "$32,500",
      trend: "up",
      trendValue: "22%",
    },
    {
      icon: CreditCard,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-500",
      title: "Pending Payments",
      value: "$1,200",
      trend: "down",
      trendValue: "3%",
    },
  ];
  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </div>
  );
}
