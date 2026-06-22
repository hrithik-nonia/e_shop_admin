import Navbar from "../component/navbar";
import Product_status from "../component/product_status";
import Sidebar from "../component/sidebar";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-15">
        <div className="col-span-3 min-h-screen hidden lg:flex">
          <Sidebar />
        </div>
        <div className=" col-span-15 lg:col-span-12 ">
          <Navbar />
          <Product_status />
        </div>
      </div>
    </>
  );
}
