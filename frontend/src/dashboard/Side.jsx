import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { AuthContext } from "../context/AuthProvider";

const Side = () => {
  const {user} =useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="" className="ml-10 rounded">
       <p className="ml-3">{user?.displayName || "Guest"}</p> 
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} >
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Side;
