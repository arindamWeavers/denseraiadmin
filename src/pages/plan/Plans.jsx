import Sidebar from "../../components/Sidebar/Sidebar";
import ComplexNavbar from "../../components/Navbar/Navbar";

const Plans = () => {

  return (
    <>
      <div className="flex">
      <div className="normal_sidebar lg:block hidden">
          <Sidebar />
        </div>
        <ComplexNavbar navStatus={false} plans={true} />
      </div>
    </>
  );
};

export default Plans;
