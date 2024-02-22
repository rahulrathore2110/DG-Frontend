import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenus";
import { motion } from "framer-motion";
import profilePic from "../../assets/images/s6.png";
import logo from "../../assets/images/DgLogo.png";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore, AiFillBank } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, []);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Customer",
      icon: FaRegUserCircle,
      menus: ["All Customer", "Create Customer", "Update Customer"],
    },
    {
      name: "Loans",
      icon: AiFillBank,
      menus: ["All Loans", "Running Loans", "Closed Loans", "approval Loans"],
    },
    {
      name: "EMI",
      icon: TbReportAnalytics,
      menus: ["All EMI","Paid EMI", "Bounce EMI","Pending EMI", "Settled EMI"],
    },
  ];

  return (
    <div className="bg-gray-900 border-r border-gray-700">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed  inset-0 max-h-screen z-[998] bg-black/80 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="  text-white shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          {open && <img src={logo} width={200} alt="Logo" />}
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sky-500   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link" >
                <AiOutlineAppstore size={23} className="min-w-max" />
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/mainAccount"}
                className="link"
              >
                <HiOutlineDatabase size={23} className="min-w-max" />
                Main Account
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/transaction"}
                className="link"
              >
                <BsPerson size={23} className="min-w-max" />
                Transactions
              </NavLink>
            </li>

            {(open || isTabletMid) && (
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-white inline-block mb-2">
                  Detailed Functions
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink
                to={"/settings"}
                className="link"
              >
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Rahul Rathore</p>
                  <small>Credit Manager</small>
                </div>

                <img src={profilePic} alt="Profile Pic" className="w-16" />
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden text-white " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
