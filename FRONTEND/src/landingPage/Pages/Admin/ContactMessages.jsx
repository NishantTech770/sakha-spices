import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./admin.css";

const BASE = "http://localhost:8080/api/admin";

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

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expandMsg, setExpandMsg] = useState(null);

  const fetchMessages = () => {
    setLoading(true);
    axios
      .get(`${BASE}/messages`, authHeaders())
      .then(({ data }) => setMessages(data.allMessages || []))
      .catch((err) =>
        toast.error(err.response?.data?.message || "Failed to fetch messages"),
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filtered = messages.filter(
    (m) =>
      m.name?.toLowerCase().includes(search.toLowerCase()) ||
      m.email?.toLowerCase().includes(search.toLowerCase()) ||
      m.category?.toLowerCase().includes(search.toLowerCase()) ||
      m.phone?.includes(search),
  );

  return (
    <div className="ad-content">
      <div className="ad-page-header">
        <h1 className="ad-page-title">Contact Messages</h1>
        <p className="ad-page-sub">
          All contact form submissions from your website
        </p>
      </div>
      <div className="ad-card">
        <div className="ad-card__header">
          <div className="ad-search-wrap">
            <SearchIcon />
            <input
              className="ad-search"
              placeholder="Search by name, email or category…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="ad-refresh-btn" onClick={fetchMessages}>
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
                <th>Category</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonRow key={i} cols={7} />
                ))
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="ad-empty">
                    No messages found
                  </td>
                </tr>
              ) : (
                filtered.map((m, i) => (
                  <tr key={m._id}>
                    <td className="ad-td-num">{i + 1}</td>
                    <td className="ad-td-bold">{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.phone}</td>
                    <td>
                      <span className="ad-badge ad-badge--msg">
                        {m.category}
                      </span>
                    </td>
                    <td>
                      <button
                        className="ad-msg-btn"
                        onClick={() =>
                          setExpandMsg(expandMsg === m._id ? null : m._id)
                        }
                      >
                        {expandMsg === m._id ? "Hide ▲" : "View ▼"}
                      </button>
                      {expandMsg === m._id && (
                        <div className="ad-msg-expand">{m.message}</div>
                      )}
                    </td>
                    <td className="ad-td-date">
                      {new Date(m.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="ad-table-footer">
          {filtered.length} message{filtered.length !== 1 ? "s" : ""} total
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
