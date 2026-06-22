import Navbar from "../component/navbar";
export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-15">
        <div className="bg-red-500 col-span-3 min-h-screen hidden lg:flex">
          j
        </div>
        <div className="bg-green-300 col-span-15 lg:col-span-12 min-h-screen">
          <Navbar />
        </div>
      </div>
    </>
  );
}
