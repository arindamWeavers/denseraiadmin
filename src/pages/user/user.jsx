import Sidebar from "../../components/Sidebar/Sidebar";
import ComplexNavbar from "../../components/Navbar/Navbar";

const Users = () => {
  return (
    <>
      <div className="flex">
      <div className="normal_sidebar lg:block hidden">
          <Sidebar />
        </div>
        <ComplexNavbar navStatus={false} user={true} />
      </div>
    </>
  );
};

export default Users;
