"use client";

import { useState } from "react";
import styles from "./CreateTicket.module.css";

export default function CreateTicketPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData((prev) => ({ ...prev, attachment: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Ticket Created:", { ...formData, status: "Open" });
    alert("Ticket has been created successfully!");
    // You could route to /ticket/list here if there were a router implementation
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create Ticket</h1>
        <p className={styles.subtitle}>Submit a new support request</p>
      </header>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="title">
            Title / Subject <span>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            placeholder="Brief summary of the issue"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="category">
              Category <span>*</span>
            </label>
            <select
              id="category"
              name="category"
              className={styles.select}
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Network">Network</option>
              <option value="Access">Access</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="priority">
              Priority <span>*</span>
            </label>
            <select
              id="priority"
              name="priority"
              className={styles.select}
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select priority level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Description <span>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className={styles.textarea}
            placeholder="Please describe the issue in detail..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            className={`${styles.input} ${styles.inputDisabled}`}
            value="Open"
            readOnly
            disabled
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="attachment">
            Attachment <span style={{ color: "#94a3b8", fontWeight: "normal", marginLeft: "0" }}>(Optional)</span>
          </label>
          <div className={styles.fileInputContainer}>
            <input
              type="file"
              id="attachment"
              name="attachment"
              className={styles.fileInput}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit Ticket
        </button>
      </form>
    </div>
  );
}
