"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateTicket.module.css";

type TicketFormData = {
  title: string;
  description: string;
  category: string;
  priority: string;
  attachment: File | null;
};

export default function CreateTicketPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<TicketFormData>({
    title: "",
    description: "",
    category: "",
    priority: "",
    attachment: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.currentTarget;
    const { name, value } = target;

    if (name === "attachment" && target instanceof HTMLInputElement) {
      setFormData((prev) => ({ ...prev, attachment: target.files?.[0] ?? null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append("title", formData.title);
      body.append("description", formData.description);
      body.append("category", formData.category);
      body.append("priority", formData.priority);
      if (formData.attachment) {
        body.append("attachment", formData.attachment);
      }

      const response = await fetch("/api/tickets", {
        method: "POST",
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      const { ticketCode } = (await response.json()) as { ticketCode: string };

      router.push(`/ticket/list?created=1&ticketId=${encodeURIComponent(ticketCode)}`);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to create ticket. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create Ticket</h1>
        <p className={styles.subtitle}>Submit a new support request</p>
      </header>

      <div className={styles.formCardWrap}>
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
                <option value="" disabled>
                  Select a category
                </option>
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
                <option value="" disabled>
                  Select priority level
                </option>
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
              Attachment{" "}
              <span style={{ color: "#94a3b8", fontWeight: "normal", marginLeft: "0" }}>
                (Optional)
              </span>
            </label>
            <div className={styles.fileInputContainer}>
              <input
                type="file"
                id="attachment"
                name="attachment"
                className={styles.fileInput}
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Ticket"}
          </button>
        </form>

        {isSubmitting && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingContent}>
              <span className={styles.spinner} />
              <p>Menyimpan tiket dan mengalihkan ke List Ticket...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
