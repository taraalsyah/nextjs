"use client";

import { useState } from "react";
import styles from "./ListTicket.module.css";

type Ticket = {
  id: string;
  title: string;
  requestor: string;
  status: "Open" | "In Progress" | "Closed";
  priority: "High" | "Medium" | "Low";
  category: string;
  assignTo: string;
  createdAt: string;
  description: string;
  attachment: string | null;
};

type ListTicketPageProps = {
  tickets: Ticket[];
  showCreatedNotice: boolean;
  createdTicketId?: string;
};

export default function ListTicketPage({
  tickets,
  showCreatedNotice,
  createdTicketId,
}: ListTicketPageProps) {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [statusModalTicket, setStatusModalTicket] = useState<Ticket | null>(null);
  const [newStatus, setNewStatus] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateAttachment, setUpdateAttachment] = useState<File | null>(null);

  const handleStatusUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!statusModalTicket) {
      return;
    }

    alert(`Status for ${statusModalTicket.id} has been changed to ${newStatus}`);
    setStatusModalTicket(null);
  };

  const getStatusClass = (status: Ticket["status"]) => {
    switch (status) {
      case "Open":
        return styles.statusOpen;
      case "In Progress":
        return styles.statusInProgress;
      case "Closed":
        return styles.statusClosed;
      default:
        return "";
    }
  };

  const getPriorityClass = (priority: Ticket["priority"]) => {
    switch (priority) {
      case "High":
        return styles.priorityHigh;
      case "Medium":
        return styles.priorityMedium;
      case "Low":
        return styles.priorityLow;
      default:
        return "";
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Ticket List</h1>
          <p className={styles.subtitle}>Overview of all reported support tickets</p>
        </div>
      </header>

      {showCreatedNotice && (
        <div className={styles.successNotice}>
          Ticket {createdTicketId ?? "-"} berhasil dibuat.
        </div>
      )}

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Title</th>
                <th>Requestor</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Assign To</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className={styles.ticketId}>{ticket.id}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.requestor}</td>
                  <td>
                    <span className={`${styles.badge} ${getStatusClass(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${getPriorityClass(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>{ticket.category}</td>
                  <td>{ticket.assignTo}</td>
                  <td>{ticket.createdAt}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.actionBtn}
                        data-tooltip="View Detail"
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>

                      <button
                        className={styles.actionBtn}
                        data-tooltip="Change Status"
                        onClick={() => {
                          setStatusModalTicket(ticket);
                          setNewStatus(ticket.status);
                          setUpdateDesc("");
                          setUpdateAttachment(null);
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTicket && (
        <div className={styles.modalOverlay} onClick={() => setSelectedTicket(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Ticket Details: {selectedTicket.id}</h2>
              <button className={styles.modalCloseBtn} onClick={() => setSelectedTicket(null)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalGrid}>
                <div className={styles.modalField}>
                  <label>Title</label>
                  <p>{selectedTicket.title}</p>
                </div>
                <div className={styles.modalField}>
                  <label>Requestor</label>
                  <p>{selectedTicket.requestor}</p>
                </div>
                <div className={styles.modalField}>
                  <label>Status</label>
                  <p>
                    <span className={`${styles.badge} ${getStatusClass(selectedTicket.status)}`}>
                      {selectedTicket.status}
                    </span>
                  </p>
                </div>
                <div className={styles.modalField}>
                  <label>Priority</label>
                  <p>
                    <span
                      className={`${styles.badge} ${getPriorityClass(selectedTicket.priority)}`}
                    >
                      {selectedTicket.priority}
                    </span>
                  </p>
                </div>
                <div className={styles.modalField}>
                  <label>Category</label>
                  <p>{selectedTicket.category}</p>
                </div>
                <div className={styles.modalField}>
                  <label>Assign To</label>
                  <p>{selectedTicket.assignTo}</p>
                </div>
              </div>
              <div className={styles.modalFieldFull}>
                <label>Description</label>
                <div className={styles.descBox}>{selectedTicket.description}</div>
              </div>
              {selectedTicket.attachment && (
                <div className={styles.modalFieldFull}>
                  <label>Attachment</label>
                  <div className={styles.attachmentPreviewWrap}>
                    <img
                      src={
                        selectedTicket.attachment.startsWith("/")
                          ? selectedTicket.attachment
                          : `/uploads/tickets/${selectedTicket.attachment}`
                      }
                      alt={`Attachment ${selectedTicket.id}`}
                      className={styles.attachmentPreview}
                    />
                  </div>
                  <p className={styles.attachmentName}>{selectedTicket.attachment}</p>
                </div>
              )}
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.closeBtn} onClick={() => setSelectedTicket(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {statusModalTicket && (
        <div className={styles.modalOverlay} onClick={() => setStatusModalTicket(null)}>
          <div
            className={styles.modalBox}
            style={{ maxWidth: "500px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Change Status</h2>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setStatusModalTicket(null)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onSubmit={handleStatusUpdate}>
              <div className={styles.modalBody}>
                <div className={styles.modalFieldFull}>
                  <label>Ticket</label>
                  <p>
                    <strong>{statusModalTicket.id}</strong> - {statusModalTicket.title}
                  </p>
                </div>
                <div className={styles.modalFieldFull}>
                  <label>Update Status</label>
                  <select
                    className={styles.statusSelect}
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.95rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {statusModalTicket.status === "Open" && (
                      <>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                      </>
                    )}
                    {statusModalTicket.status === "In Progress" && (
                      <>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </>
                    )}
                    {statusModalTicket.status === "Closed" && (
                      <option value="Closed">Closed</option>
                    )}
                  </select>
                  {statusModalTicket.status === "Closed" && (
                    <p style={{ fontSize: "0.85rem", color: "#ef4444", marginTop: "0.5rem" }}>
                      This ticket is closed and its status cannot be modified further.
                    </p>
                  )}
                </div>

                {statusModalTicket.status !== "Closed" && (
                  <>
                    <div className={styles.modalFieldFull}>
                      <label>
                        Update Description <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <textarea
                        required
                        value={updateDesc}
                        onChange={(e) => setUpdateDesc(e.target.value)}
                        placeholder="Please provide details about this status change..."
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                          border: "1px solid #cbd5e1",
                          minHeight: "80px",
                          fontFamily: "inherit",
                          resize: "vertical",
                          marginTop: "0.5rem",
                        }}
                      />
                    </div>
                    <div className={styles.modalFieldFull}>
                      <label>
                        Update Attachment <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        type="file"
                        required
                        onChange={(e) => setUpdateAttachment(e.target.files?.[0] ?? null)}
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "0.5rem",
                          border: "1px dashed #cbd5e1",
                          borderRadius: "0.5rem",
                          background: "#f8fafc",
                          marginTop: "0.5rem",
                          color: "#64748b",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={styles.modalFooter}>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setStatusModalTicket(null)}
                  style={{ marginRight: "0.5rem" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.closeBtn}
                  style={{ background: "#3b82f6", color: "white", border: "none" }}
                  disabled={statusModalTicket.status === "Closed"}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
