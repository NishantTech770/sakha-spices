import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./admin.css";

const BASE = "http://localhost:8080/api";

const getToken = () => localStorage.getItem("token") || "";
const authHeaders = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
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
    width="20"
    height="20"
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
const AdminIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const CalIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SkeletonRow = ({ cols }) => (
  <tr>
    {Array.from({ length: cols }).map((_, i) => (
      <td key={i}>
        <div className="ad-skeleton" />
      </td>
    ))}
  </tr>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loadingU, setLoadingU] = useState(true);
  const [loadingM, setLoadingM] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE}/admin/users`, authHeaders())
      .then(({ data }) => setUsers(data.allUsers || []))
      .catch((err) =>
        toast.error(err.response?.data?.message || "Failed to load users"),
      )
      .finally(() => setLoadingU(false));

    axios
      .get(`${BASE}/admin/messages`, authHeaders())
      .then(({ data }) => setMessages(data.allMessages || []))
      .catch((err) =>
        toast.error(err.response?.data?.message || "Failed to load messages"),
      )
      .finally(() => setLoadingM(false));
  }, []);

  const thisMonthMsgs = messages.filter((m) => {
    const d = new Date(m.createdAt),
      now = new Date();
    return (
      d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    );
  });

  const stats = [
    {
      label: "Total Users",
      value: loadingU ? "…" : users.length,
      icon: <UsersIcon />,
      color: "#e8821a",
    },
    {
      label: "Total Messages",
      value: loadingM ? "…" : messages.length,
      icon: <MsgIcon />,
      color: "#1b5e20",
    },
    {
      label: "Admin Users",
      value: loadingU ? "…" : users.filter((u) => u.role === "admin").length,
      icon: <AdminIcon />,
      color: "#6d3200",
    },
    {
      label: "Messages (Month)",
      value: loadingM ? "…" : thisMonthMsgs.length,
      icon: <CalIcon />,
      color: "#c46a0e",
    },
  ];

  return (
    <div className="ad-content">
      <div className="ad-page-header">
        <h1 className="ad-page-title">Dashboard</h1>
        <p className="ad-page-sub">Overview of your platform activity</p>
      </div>
      <div className="ad-stats-grid">
        {stats.map((s, i) => (
          <div className="ad-stat" key={i} style={{ "--sc": s.color }}>
            <div className="ad-stat__icon">{s.icon}</div>
            <div>
              <div className="ad-stat__num">{s.value}</div>
              <div className="ad-stat__label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ad-card">
        <div className="ad-card__header">
          <h2 className="ad-card__title">Recent Messages</h2>
          <button
            className="ad-link-btn"
            onClick={() => navigate("/admin/messages")}
          >
            View All →
          </button>
        </div>
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {loadingM
                ? Array.from({ length: 4 }).map((_, i) => (
                    <SkeletonRow key={i} cols={4} />
                  ))
                : messages.slice(0, 5).map((m, i) => (
                    <tr key={i}>
                      <td>{m.name}</td>
                      <td>{m.email}</td>
                      <td>
                        <span className="ad-badge ad-badge--msg">
                          {m.category}
                        </span>
                      </td>
                      <td>
                        {new Date(m.createdAt).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="ad-card">
        <div className="ad-card__header">
          <h2 className="ad-card__title">Recent Users</h2>
          <button
            className="ad-link-btn"
            onClick={() => navigate("/admin/users")}
          >
            View All →
          </button>
        </div>
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {loadingU
                ? Array.from({ length: 4 }).map((_, i) => (
                    <SkeletonRow key={i} cols={4} />
                  ))
                : users.slice(0, 5).map((u, i) => (
                    <tr key={i}>
                      <td>
                        <div className="ad-user-cell">
                          <div className="ad-avatar">
                            {u.name?.charAt(0).toUpperCase()}
                          </div>
                          {u.name}
                        </div>
                      </td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td>
                        <span
                          className={`ad-badge ${u.role === "admin" ? "ad-badge--admin" : "ad-badge--user"}`}
                        >
                          {u.role}
                        </span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
