import { lazy, Suspense } from "react";
import Navbar from "./component/navbar";
const ProductsDashboard = lazy(() => import("./pages/product_status_page"));
const DashboardStats = lazy(() => import("./pages/landing_page"));
const PendingOrderManagement = lazy(() => import("./pages/panding_order_page"));
const DeliveredProductManagement = lazy(
  () => import("./pages/delivered_product_page"),
);
const AllOrdersManagement = lazy(() => import("./pages/all_product_page"));
const CancelledProductsManagement = lazy(
  () => import("./pages/cancellid_product_page"),
);
import Sidebar from "./component/sidebar";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="grid grid-cols-15">
        <div className="col-span-3 h-screen hidden lg:flex sticky top-0">
          <Sidebar />
        </div>
        <div className=" col-span-15 lg:col-span-12 ">
          <Navbar />
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <p>Loading page...</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<DashboardStats />} />
              <Route path="/products" element={<ProductsDashboard />} />
              <Route
                path="/orders/pending"
                element={<PendingOrderManagement />}
              />
              <Route
                path="/order/delivered"
                element={<DeliveredProductManagement />}
              />
              <Route path="/orders" element={<AllOrdersManagement />} />
              <Route
                path="/order/cancelled"
                element={<CancelledProductsManagement />}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}
