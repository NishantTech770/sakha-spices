import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./admin.css";

const BASE = "https://sakha-spices-2.onrender.com/api/admin";

const getToken = () => localStorage.getItem("token") || "";
const authHeaders = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const RefreshIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
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

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(`${BASE}/users`, authHeaders())
      .then(({ data }) => setUsers(data.allUsers || []))
      .catch((err) =>
        toast.error(err.response?.data?.message || "Failed to fetch users"),
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      String(u.phone).includes(search),
  );

  return (
    <div className="ad-content">
      <div className="ad-page-header">
        <h1 className="ad-page-title">Users</h1>
        <p className="ad-page-sub">All registered users on the platform</p>
      </div>
      <div className="ad-card">
        <div className="ad-card__header">
          <div className="ad-search-wrap">
            <SearchIcon />
            <input
              className="ad-search"
              placeholder="Search by name, email or phone…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="ad-refresh-btn" onClick={fetchUsers}>
            <RefreshIcon /> Refresh
          </button>
        </div>
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonRow key={i} cols={5} />
                ))
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="ad-empty">
                    No users found
                  </td>
                </tr>
              ) : (
                filtered.map((u, i) => (
                  <tr key={u._id}>
                    <td className="ad-td-num">{i + 1}</td>
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
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="ad-table-footer">
          {filtered.length} user{filtered.length !== 1 ? "s" : ""} total
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
