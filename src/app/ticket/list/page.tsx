"use client";

import { useState } from "react";
import styles from "./ListTicket.module.css";
import Link from "next/link";

export default function ListTicketPage() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [statusModalTicket, setStatusModalTicket] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateAttachment, setUpdateAttachment] = useState(null);

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    alert(`Status for ${statusModalTicket.id} has been changed to ${newStatus}`);
    setStatusModalTicket(null);
  };

  // Mock Data for Ticket List
  const tickets = [
    {
      id: "TCK-1001",
      title: "Cannot connect to company VPN",
      requestor: "Alice Smith",
      status: "Open",
      priority: "High",
      category: "Network",
      assignTo: "Unassigned",
      createdAt: "2026-04-16",
      description: "When trying to connect via Cisco AnyConnect, I get an authentication timeout error. It started happening this morning after the update.",
      attachment: "VPN_ErrorScreenshot.png"
    },
    {
      id: "TCK-1002",
      title: "Broken monitor stand",
      requestor: "Bob Johnson",
      status: "In Progress",
      priority: "Medium",
      category: "Hardware",
      assignTo: "John Technician",
      createdAt: "2026-04-15",
      description: "The right leg of my dual monitor stand snapped. I need a replacement as soon as possible.",
      attachment: null
    },
    {
      id: "TCK-1003",
      title: "Request for Adobe Cloud license",
      requestor: "Carol Davis",
      status: "Closed",
      priority: "Low",
      category: "Software",
      assignTo: "System Admin",
      createdAt: "2026-04-12",
      description: "My department just approved my use of Illustrator. Kindly grant me license access to Adobe Creative Cloud.",
      attachment: "Approval_Memo.pdf"
    },
    {
      id: "TCK-1004",
      title: "Locked out of email account",
      requestor: "David Wilson",
      status: "Open",
      priority: "High",
      category: "Access",
      assignTo: "Unassigned",
      createdAt: "2026-04-16",
      description: "I typed my password wrong too many times and now my AD account is locked. Please unlock it so I can finish sending these reports.",
      attachment: null
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Open": return styles.statusOpen;
      case "In Progress": return styles.statusInProgress;
      case "Closed": return styles.statusClosed;
      default: return "";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High": return styles.priorityHigh;
      case "Medium": return styles.priorityMedium;
      case "Low": return styles.priorityLow;
      default: return "";
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
                      {/* View Detail Action */}
                      <button className={styles.actionBtn} data-tooltip="View Detail" onClick={() => setSelectedTicket(ticket)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      

                      {/* Change Status Action */}
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Detail Modal */}
      {selectedTicket && (
        <div className={styles.modalOverlay} onClick={() => setSelectedTicket(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Ticket Details: {selectedTicket.id}</h2>
              <button className={styles.modalCloseBtn} onClick={() => setSelectedTicket(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
                  <p><span className={`${styles.badge} ${getStatusClass(selectedTicket.status)}`}>{selectedTicket.status}</span></p>
                </div>
                <div className={styles.modalField}>
                  <label>Priority</label>
                  <p><span className={`${styles.badge} ${getPriorityClass(selectedTicket.priority)}`}>{selectedTicket.priority}</span></p>
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
                  <a href="#" className={styles.attachmentLink}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    {selectedTicket.attachment}
                  </a>
                </div>
              )}
            </div>
            <div className={styles.modalFooter}>
               <button className={styles.closeBtn} onClick={() => setSelectedTicket(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Change Status Modal */}
      {statusModalTicket && (
        <div className={styles.modalOverlay} onClick={() => setStatusModalTicket(null)}>
          <div className={styles.modalBox} style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Change Status</h2>
              <button type="button" className={styles.modalCloseBtn} onClick={() => setStatusModalTicket(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onSubmit={handleStatusUpdate}>
              <div className={styles.modalBody}>
                <div className={styles.modalFieldFull}>
                  <label>Ticket</label>
                  <p><strong>{statusModalTicket.id}</strong> - {statusModalTicket.title}</p>
                </div>
                <div className={styles.modalFieldFull}>
                  <label>Update Status</label>
                  <select 
                    className={styles.statusSelect}
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.95rem', marginTop: '0.5rem' }}
                  >
                    {statusModalTicket.status === 'Open' && (
                      <>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                      </>
                    )}
                    {statusModalTicket.status === 'In Progress' && (
                      <>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </>
                    )}
                    {statusModalTicket.status === 'Closed' && (
                      <option value="Closed">Closed</option>
                    )}
                  </select>
                  {statusModalTicket.status === 'Closed' && (
                    <p style={{ fontSize: '0.85rem', color: '#ef4444', marginTop: '0.5rem' }}>This ticket is closed and its status cannot be modified further.</p>
                  )}
                </div>

                {statusModalTicket.status !== 'Closed' && (
                  <>
                    <div className={styles.modalFieldFull}>
                      <label>Update Description <span style={{color: '#ef4444'}}>*</span></label>
                      <textarea
                        required
                        value={updateDesc}
                        onChange={(e) => setUpdateDesc(e.target.value)}
                        placeholder="Please provide details about this status change..."
                        style={{ width: '100%', boxSizing: 'border-box', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical', marginTop: '0.5rem' }}
                      />
                    </div>
                    <div className={styles.modalFieldFull}>
                      <label>Update Attachment <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="file"
                        required
                        onChange={(e) => setUpdateAttachment(e.target.files[0])}
                        style={{ width: '100%', boxSizing: 'border-box', padding: '0.5rem', border: '1px dashed #cbd5e1', borderRadius: '0.5rem', background: '#f8fafc', marginTop: '0.5rem', color: '#64748b' }}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={styles.modalFooter}>
                 <button type="button" className={styles.closeBtn} onClick={() => setStatusModalTicket(null)} style={{ marginRight: '0.5rem' }}>Cancel</button>
                 <button 
                  type="submit"
                  className={styles.closeBtn} 
                  style={{ background: '#3b82f6', color: 'white', border: 'none' }}
                  disabled={statusModalTicket.status === 'Closed'}
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
