"use client";

import { useState } from "react";
import styles from "./UserManagement.module.css";

export default function UserManagementPage() {
  // Mock Data for User Management List
  const [users, setUsers] = useState([
    {
      id: "USR-001",
      name: "Alice Smith",
      email: "alice.smith@company.com",
      role: "Admin",
      status: "Active",
      createdDate: "2025-05-12",
    },
    {
      id: "USR-002",
      name: "Bob Johnson",
      email: "bob.johnson@company.com",
      role: "Technician",
      status: "Active",
      createdDate: "2025-08-23",
    },
    {
      id: "USR-003",
      name: "Carol Davis",
      email: "carol.davis@company.com",
      role: "User",
      status: "Inactive",
      createdDate: "2026-01-15",
    },
    {
      id: "USR-004",
      name: "David Wilson",
      email: "david.wilson@company.com",
      role: "User",
      status: "Active",
      createdDate: "2026-03-01",
    },
    {
      id: "USR-005",
      name: "Eve Brown",
      email: "eve.brown@company.com",
      role: "Technician",
      status: "Inactive",
      createdDate: "2025-11-05",
    },
  ]);
  const roles = ["Admin", "Technician", "User"];
  const statuses = ["Active", "Inactive"];

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return styles.statusActive;
      case "Inactive": return styles.statusInactive;
      default: return "";
    }
  };

  const handleRoleChange = (userId, currentRole, nextRole) => {
    if (currentRole === nextRole) {
      return;
    }

    const confirmed = window.confirm(
      `Yakin ingin mengubah role dari ${currentRole} ke ${nextRole}?`
    );

    if (!confirmed) {
      return;
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: nextRole } : user
      )
    );
  };

  const handleStatusChange = (userId, currentStatus, nextStatus) => {
    if (currentStatus === nextStatus) {
      return;
    }

    const confirmed = window.confirm(
      `Yakin ingin mengubah status dari ${currentStatus} ke ${nextStatus}?`
    );

    if (!confirmed) {
      return;
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: nextStatus } : user
      )
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>User Management</h1>
          <p className={styles.subtitle}>Manage system users and their roles</p>
        </div>
      </header>

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.userName}>{user.name}</div>
                  </td>
                  <td className={styles.userEmail}>{user.email}</td>
                  <td>
                    <select
                      className={styles.roleSelect}
                      value={user.role}
                      onChange={(event) =>
                        handleRoleChange(user.id, user.role, event.target.value)
                      }
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className={`${styles.roleSelect} ${styles.statusSelect} ${getStatusClass(user.status)}`}
                      value={user.status}
                      onChange={(event) =>
                        handleStatusChange(user.id, user.status, event.target.value)
                      }
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{user.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
