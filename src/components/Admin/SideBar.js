import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaGem,
  FaUser,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  const { collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <FaUser size={"2em"} color="#ADADAD" />
            <span style={{cursor: "pointer", fontSize: "20px"}}> Test Exercise</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
            >
              Dashboard
              <Link to="/admin" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              icon={<FaGem />}
              title="Features"
            >
              <MenuItem>
                Quản lý Users
                <Link to="/admin/manage-users" />
              </MenuItem>
              <MenuItem> Quản lý Bài Quiz
              <Link to="/admin/manage-quizzes" /></MenuItem>
              <MenuItem> <Link to="/admin/manage-questions" /> Quản lý Câu Hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <div>
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                © All rights reserved
              </span>
            </div>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
