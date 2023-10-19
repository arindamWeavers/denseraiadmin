import Sidebar from "../../components/Sidebar/Sidebar";
import ComplexNavbar from "../../components/Navbar/Navbar";

const Transacrions = () => {
  return (
    <>
      <div className="flex">
      <div className="normal_sidebar lg:block hidden">
          <Sidebar />
        </div>
        <ComplexNavbar navStatus={false} transactions={true} />
      </div>
    </>
  );
};

export default Transacrions;
