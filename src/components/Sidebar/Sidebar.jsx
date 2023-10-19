// import { AiFillCaretDown } from "react-icons/ai";
// import { AiFillCaretUp } from "react-icons/ai";
// import { userRoutes } from "../Dropdown/route";
// import { formRoutes } from "../Dropdown/route";
// import { FaWpforms } from "react-icons/fa";
// import {GiTakeMyMoney} from "react-icons/gi";

import "../../css/navbar.css";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import {LiaMoneyCheckAltSolid} from "react-icons/lia";
import DenserLogo from "../../assets/logo/Denser.png";

const Navbar = () => {
  // const [user, setUser] = useState(false);
  // const [form, setForm] = useState(false);
  // const setUserDropdown = () => {
  //   setUser(!user);
  //   setForm(false);
  // };
  // const setFormDropdown = () => {
  //   setForm(!form);
  //   setUser(false);
  // };

  return (
    <div className="bg-[#550a75] side-bar-common">
      <aside className="relative h-screen w-64 block shadow-xl">
        <Link to="/dashboard">
          <img
            src={DenserLogo}
            alt="main_logo"
            className="w-[10rem] mx-auto my-6 cursor-pointer"
          />
        </Link>
        <nav className="text-white text-base font-semibold pt-3 mt-11">
          <Link
            className="flex items-center text-white opacity-100 hover:bg-white hover:text-black py-4 pl-6 nav-item cursor-pointer"
            to="/dashboard"
          >
            <i className="fas fa-tachometer-alt mr-3">
              <MdDashboard />
            </i>
            Dashboard
          </Link>
          {/* <Link
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer"
            to="/edit-profile"
          >
            <i className="fas fa-table mr-3"></i>
            Edit Profile
          </Link>
          <Link
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer"
            to="/change-password"
          >
            <i className="fas fa-tablet-alt mr-3"></i>
            Change Password
          </Link> */}

          {/* <div className='relative w-full flex items-center py-5 px-[22px] opacity-75 hover:opacity-100'> */}
          {/* <i className="fas fa-calendar mr-3"></i> */}
          {/* <div className='flex justify-between w-full'>
                            <button className='flex flex-row justify-between w-full cursor-pointer' onClick={setUserDropdown}>

                                <div>Users</div>
                                <div className=''>{!user ? <AiFillCaretDown /> : <AiFillCaretUp />} </div>

                            </button>

                        </div>

          {/* </div> */}

          <Link
            className="flex items-center text-white opacity-100 hover:opacity-100 hover:bg-white hover:text-black  py-4 pl-6 nav-item cursor-pointer"
            to="/users"
          >
            <i className="fas fa-tachometer-alt mr-3">
              <HiMiniUsers />
            </i>
            Users
          </Link>

          <Link
            className="flex items-center text-white opacity-100 hover:opacity-100 hover:bg-white hover:text-black  py-4 pl-6 nav-item cursor-pointer"
            to="/transactions"
          >
            <i className="fas fa-tachometer-alt mr-3">
              <MdOutlineAttachMoney className="h-5 w-5" />
            </i>
            Transactions
          </Link>

          <Link
            className="flex items-center text-white opacity-100 hover:opacity-100 hover:bg-white hover:text-black  py-4 pl-6 nav-item cursor-pointer"
            to="/plans"
          >
            <i className="fas fa-tachometer-alt mr-3">
              <LiaMoneyCheckAltSolid className="h-5 w-5" />
            </i>
            Plans
          </Link>

          {/* <Link
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer"
            to="/query"
          >
            <i className="fas fa-tachometer-alt mr-3">
              <MdQueryStats className="h-5 w-5" />
            </i>
            Query
          </Link> */}
          {/* {user && userRoutes.map((item) => {
                        return <Link className='flex justify-between py-4 px-11 w-full cursor-pointer' to={item.path}>{item.name}</Link>
                    })} */}

          {/* <div className='relative w-full flex items-center py-5 px-[22px] opacity-75 hover:opacity-100'>
                        <i className="fas fa-calendar mr-3"></i>
                        <div className='flex justify-between w-full'>
                            <button className='flex flex-row justify-between w-full cursor-pointer' onClick={setFormDropdown}>

                                <div className=''>Forms</div>
                                <div className='pl-2'>{!form ? <AiFillCaretDown /> : <AiFillCaretUp />} </div>

                            </button>

                        </div>

                    </div> */}
          {/* {form && formRoutes.map((item) => {
                        console.log(item.path,"path")
                        return <Link className='flex justify-between py-4 px-11 w-full cursor-pointer' to={item.path}>{item.name}</Link>
                    })} */}
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
