import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavDrawer = (props) => {
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    list: "list-none cursor-pointer  text-white my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm",
  };
  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(15, 23, 42)",

        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="h-[60vh] font flex flex-col my-12 bg-gray-900 items-center"
          style={{ fontFamily: "Poppins, serif" }}
        >
          {/* <Image src={""} height={1} width={1}/> */}
          <div className="mx-auto my-16">
            <img src={"/logo.png"} height={100} width={100} />
          </div>{" "}
          {/* adding the navs */}
          <div className="flex  flex-col">
            <li className={style.list} onClick={() => props.onScroll("home")}>
              HOME
            </li>
            <li className={style.list} onClick={() => props.onScroll("services")}>
              SERVICES
            </li>
            <li className={style.list} onClick={() => props.onScroll("why")}>
              WHY US
            </li>
            <li className={style.list} onClick={() => props.onScroll("achievements")}>
              ACHIEVEMENTS
            </li>
          </div>
          <Link href="/contact">
            <button className="mx-auto bg-white rounded text-gray-900 px-12 py-2 mt-80  cursor-pointer hover:opacity-[0.9]">
              CONTACT
            </button>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="px-2 my-1 flex items-center justify-between w-[100vw]"
          >
            <div className="w-[15%]">
              {
                <svg
                  viewBox="0 0 100 80"
                  width="30"
                  height="20"
                  style={{ fill: "rgb(255,255,255)" }}
                >
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>
              }
            </div>
            <div>
              <img src={"/logo.png"} height={100} width={100} />
            </div>
            <button className="flex items-center justify-end mx-0  px-1  text-xs w-[15%]"></button>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
