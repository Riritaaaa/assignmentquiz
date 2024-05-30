import React, { useEffect } from "react";
import { Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setTheme } from "@store/slice/theme";
import "./quiz.css";
import { motion, useAnimate } from "framer-motion";

const Nav: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatch(setTheme(newTheme));
  };

  const getMenuItems = () => [
    { path: "/", label: "Home" },
    { path: "/quiz", label: "Quiz" },
    { path: "/score", label: "Score" },
    { path: "/evaluate", label: "Evaluate the course" },
  ];

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { backgroundColor: theme === "dark" ? "#333" : "#f8f8f8",color: theme === "dark" ? "#ffffff" : "#000000"},
      { ease: "easeIn" }
    );
  }, [theme]);

  return (
    <>
      <div className="flex flex-row relative z-50">
        <Menu
          className="fontquiz menu w-full text-base absolute z-20 h-14 font-medium "
          theme={theme}
          selectedKeys={[location.pathname]}
          mode="horizontal"
        >
          {getMenuItems().map((item) => (
            <Menu.Item key={item.path} className="self-center">
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div className="absolute right-8 top-[12px] ">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox "
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label htmlFor="toggle" className="toggle--label z-20">
            <span className="toggle--label-background "></span>
          </label>
        </div>
      </div>
      <motion.div ref={scope} className="background">
        <div className="wave" data-theme={theme}></div>
        <div className="wave" data-theme={theme}></div>
        <Outlet />
      </motion.div>
    </>
  );
};

export default Nav;
