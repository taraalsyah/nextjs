"use client";

import styles from "./UserManagement.module.css";

export default function UserManagementPage() {
  // Mock Data for User Management List
  const users = [
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
      status: "Suspended",
      createdDate: "2025-11-05",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return styles.statusActive;
      case "Inactive": return styles.statusInactive;
      case "Suspended": return styles.statusSuspended;
      default: return "";
    }
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
                  <td className={styles.roleText}>{user.role}</td>
                  <td>
                    <span className={`${styles.badge} ${getStatusClass(user.status)}`}>
                      {user.status}
                    </span>
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
