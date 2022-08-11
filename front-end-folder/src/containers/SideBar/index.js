import React from "react";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <main>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
      </aside>
    </main>
  );
};

export default Sidebar;
