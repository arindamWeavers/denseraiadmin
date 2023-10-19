import Sidebar from "../../components/Sidebar/Sidebar";
import ComplexNavbar from "../../components/Navbar/Navbar";

const ChangePasswordPage = () => {
  return (
    <>
      <div className="flex">
        <div className="normal_sidebar lg:block hidden">
          <Sidebar />
        </div>
        <ComplexNavbar navStatus={false} changePassword={true} />
      </div>
    </>
  );
};

export default ChangePasswordPage;
