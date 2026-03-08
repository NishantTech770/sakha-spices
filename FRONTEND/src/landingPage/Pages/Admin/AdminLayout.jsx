import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./admin.css";

const DashIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const UsersIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const MsgIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);
const LogoutIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const MenuIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = (() => {
    try {
      const stored = localStorage.getItem("user");
      return stored && stored !== "undefined" ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  })();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const closeSidebar = () => setSidebarOpen(false);
  const avatarLetter = user?.email?.charAt(0).toUpperCase() || "A";

  const navLinks = [
    { to: "/admin/dashboard", icon: <DashIcon />, label: "Dashboard" },
    { to: "/admin/users", icon: <UsersIcon />, label: "Users" },
    { to: "/admin/messages", icon: <MsgIcon />, label: "Messages" },
  ];

  return (
    <>
      <div className="ad-mobile-bar">
        <button
          className="ad-mobile-menu-btn"
          onClick={() => setSidebarOpen((o) => !o)}
        >
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <span className="ad-mobile-title">🌿 Admin Panel</span>
      </div>

      {sidebarOpen && <div className="ad-overlay" onClick={closeSidebar} />}

      <div className="ad-shell">
        <aside
          className={`ad-sidebar${sidebarOpen ? " ad-sidebar--open" : ""}`}
        >
          <div className="ad-sidebar__grain" />

          <div className="ad-sidebar__brand">
            <span className="ad-sidebar__brand-icon">🌿</span>
            <div>
              <div className="ad-sidebar__brand-name">Sakha Spices</div>
              <div className="ad-sidebar__brand-tag">Admin Panel</div>
            </div>
          </div>

          <nav className="ad-sidebar__nav">
            {navLinks.map(({ to, icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `ad-nav-link${isActive ? " ad-nav-link--active" : ""}`
                }
                onClick={closeSidebar}
              >
                {icon} {label}
              </NavLink>
            ))}
          </nav>

          <div className="ad-sidebar__bottom">
            <div className="ad-sidebar__user">
              <div className="ad-sidebar__avatar">{avatarLetter}</div>
              <div>
                <div className="ad-sidebar__uname">
                  {user?.email?.split("@")[0] || "Admin"}
                </div>
                <div className="ad-sidebar__urole">Administrator</div>
              </div>
            </div>
            <button className="ad-logout-btn" onClick={handleLogout}>
              <LogoutIcon /> Logout
            </button>
          </div>
        </aside>

        <main className="ad-main">
          <Outlet />
        </main>
      </div>

      <Toaster position="bottom-right" />
    </>
  );
};

export default AdminLayout;
