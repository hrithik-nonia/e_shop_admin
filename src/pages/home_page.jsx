import Navbar from "../component/navbar";
import ProductsDashboard from "../component/product_status";
import Sidebar from "../component/sidebar";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-15">
        <div className="col-span-3 h-screen hidden lg:flex sticky top-0">
          <Sidebar />
        </div>
        <div className=" col-span-15 lg:col-span-12 ">
          <Navbar />
          <ProductsDashboard />
        </div>
      </div>
    </>
  );
}
