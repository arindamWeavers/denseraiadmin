import Sidebar from "../components/Sidebar/Sidebar";
import ComplexNavbar from "../components/Navbar/Navbar";
import { useState } from "react";

const Dashboard = () => {
  // const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="normal_sidebar lg:block hidden"><Sidebar /></div>
        <ComplexNavbar navStatus={false} dashboard={true} />
      </div>
    </>
  );
};

export default Dashboard;
