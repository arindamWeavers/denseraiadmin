import React from "react";
import DashboardComponent from "../Dashboard/Dashboard";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import User from "../Users/User";
import Transacrion from "../../components/Transactions/Transaction";
import Plans from "../Plans/Plans";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../ChangePassword";
import Navbar from "../Sidebar/Sidebar";

function ProfileMenu() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  const changePassword = () => {
    navigate("/change-password");
  };

  // profile menu component
  const profileMenuItems = [
    // {
    //   label: "My Profile",
    //   icon: UserCircleIcon,
    // },
    {
      label: "Change Password",
      icon: Cog6ToothIcon,
      func: changePassword,
    },
    // {
    //   label: "Inbox",
    //   icon: InboxArrowDownIcon,
    // },
    // {
    //   label: "Help",
    //   icon: LifebuoyIcon,
    // },
    {
      label: "Sign Out",
      icon: PowerIcon,
      func: closeMenu,
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, func }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={func}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function ComplexNavbar({
  navStatus,
  dashboard,
  user,
  transactions,
  plans,
  changePassword,
}) {
  const { isLoading, userCount, diseaseCount, templateCount, users, diseases } =
    useSelector((state) => state.dashboardReducer);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [nav, setNav] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <>
    <div className="w-full bg-black-200 relative mx-auto items-center text-blue-gray-900 dashboard-right-content-box h-full">
      <div className="flex bg-gradient-extreme-light md:px-[30px] px-3 py-[10px] common-db-top-menu justify-between">
        <div className="top-dashbarwrap flex items-center">
          <div className="togglebaricon">
            <IconButton
              size="sm"
              color="blue-gray"
              variant="text"
              onClick={() => setNav(() => !navStatus)}
              className="ml-auto md:mr-2 lg:hidden"
            >
              <Bars2Icon className="h-6 w-6" />
            </IconButton>
            </div>
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-[20px]"
          >
            {dashboard === true
              ? "Dashboard"
              : user === true
              ? "Users"
              : transactions === true
              ? "Transaction"
              : plans === true
              ? "Plans"
              : "Change Password"}
          </Typography>
        </div>

        {/* <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
        <NavList />
      </div> */}
        {/* <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton> */}
        <ProfileMenu />
      </div>

      {/* <div className="dashboard-main-sec px-[30px] py-[20px]"> */}

      {/* <div className="bd-frst-box mb-[30px]">
          <div className="flex gap-7">

            <div className="flex items-center p-8 bg-white border border-[#d1d1d1] rounded-lg w-4/12">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">{userCount}</span>
                <span className="block text-gray-500">Users</span>
              </div>
            </div>

            <div className="flex items-center p-8 bg-white border-[#d1d1d1] border rounded-lg w-4/12">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">{diseaseCount}</span>
                <span className="block text-gray-500">Diseases</span>
              </div>
            </div>

            <div className="flex items-center p-8 bg-white border-[#d1d1d1] border rounded-lg w-4/12">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">{templateCount}</span>
                <span className="block text-gray-500">Form Template</span>
              </div>
            </div>

          </div>
        </div> */}
      {dashboard && <DashboardComponent />}
      {user && <User />}
      {transactions && <Transacrion />}
      {plans && <Plans />}
      {changePassword && <ChangePassword />}
      {/* {addForm && <AddForm/>} */}
      {/* <div className="bd-second-sec">
          <div className="flex gap-7">
            <div className="w-8/12">
              <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
                <h3 className="border-b border-[#ecf5ff] font-bold bg-[#ecf5ff] px-[8px] py-[10px]">User Table</h3>
                <div className="box-table">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">Name</th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">Email</th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">Role</th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">Edit</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      {users?.length!==0 ? users.map((item)=>{
                        return (
                          <tr>
                          <td className="text-left border-b border-[#dbdbdb] p-2">{item.fullname}</td>
                          <td className="text-left border-b border-[#dbdbdb] p-2">{item.email}</td>
                          <td className="text-left border-b border-[#dbdbdb] p-2">{item.role}</td>
                          <td className="text-left border-b border-[#dbdbdb] p-2"><a href=""><GrEdit /></a></td>
                        </tr>
                        )
                    
                      }):<Loader/>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
                <h3 className="border-b border-[#ecf5ff] font-bold bg-[#ecf5ff] px-[8px] py-[10px]">Disease Table</h3>
                <div className="box-table-two">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">Disease Name</th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">DiseaseID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {diseases?.length!==0 && diseases.map((item)=>{
                        return(
                          <tr>
                          <td className="text-left border-b border-[#dbdbdb] p-2">{item.diseaseName}</td>
                          <td className="text-left border-b border-[#dbdbdb] p-2">{item.diseaseId}</td>
                        </tr>
                        )
                      })}
                    
        
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* </div> */}
    </div>
        <div className="drawernavbaroverlay">
           {nav && (
              <Drawer open={open} className="p-0">
                <IconButton
                  size="md"
                  color="white"
                  variant="text"
                  onClick={() => setNav(() => false)}
                  className="ml-auto mr-2 lg:hidden !absolute !right-10 !top-3 z-10"
                >
                  <XMarkIcon className="h-8 w-8" />
                </IconButton>
                <div className="drawernavbar"><Navbar /></div>
              </Drawer>
            )}
        </div>
    </>
  );
}
