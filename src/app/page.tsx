import styles from "./Home.module.css";

export default function Page() {
  // Mock Data for the ticketing dashboard
  const metrics = {
    totalTickets: 1248,
    solvedTickets: 982,
    inProgressTickets: 266,
    solvedPercentage: 78,
  };

  const unresolvedByPriority = [
    { level: "High", count: 42, color: "#ef4444" },
    { level: "Medium", count: 128, color: "#f59e0b" },
    { level: "Low", count: 96, color: "#3b82f6" },
  ];

  const unresolvedByCategory = [
    { name: "Software", count: 104 },
    { name: "Hardware", count: 86 },
    { name: "Network", count: 45 },
    { name: "Access", count: 31 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ticketing Dashboard</h1>
        <p className={styles.subtitle}>Overview of your support tickets for this month</p>
      </header>

      <div className={styles.grid}>
        {/* Total Tickets Card */}
        <div className={`${styles.card} ${styles.cardTotal} ${styles.cardHover}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Total Tickets</h3>
            <div className={`${styles.iconWrapper} ${styles.iconTotal}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
            </div>
          </div>
          <p className={styles.cardValue}>{metrics.totalTickets}</p>
          <p className={styles.cardDescription}>Total tickets received</p>
        </div>

        {/* Solved Tickets Card */}
        <div className={`${styles.card} ${styles.cardSolved} ${styles.cardHover}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Tickets Solved</h3>
            <div className={`${styles.iconWrapper} ${styles.iconSolved}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          <p className={styles.cardValue}>{metrics.solvedTickets}</p>
          <p className={styles.cardDescription}>Successfully resolved</p>
        </div>

        {/* In Progress Tickets Card */}
        <div className={`${styles.card} ${styles.cardProgress} ${styles.cardHover}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>In Progress</h3>
            <div className={`${styles.iconWrapper} ${styles.iconProgress}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>
          <p className={styles.cardValue}>{metrics.inProgressTickets}</p>
          <p className={styles.cardDescription}>Currently being worked on</p>
        </div>

        {/* Percentage Solved Card */}
        <div className={`${styles.card} ${styles.cardPercentage} ${styles.cardHover}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Resolution Rate</h3>
            <div className={`${styles.iconWrapper} ${styles.iconPercentage}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="5" x2="5" y2="19"></line>
                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
            </div>
          </div>
          <p className={styles.cardValue}>{metrics.solvedPercentage}%</p>
          <p className={styles.cardDescription}>Resolved this month</p>
          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBar} 
              style={{ width: `${metrics.solvedPercentage}%` }}
              role="progressbar"
              aria-valuenow={metrics.solvedPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>

      <div className={styles.summarySection}>
        {/* By Priority */}
        <div className={`${styles.card} ${styles.summaryCard}`}>
          <h3 className={styles.summaryTitle}>Unresolved by Priority</h3>
          <div className={styles.chartContainer}>
            {unresolvedByPriority.map((item, index) => {
              const maxCount = Math.max(...unresolvedByPriority.map(i => i.count));
              const widthPerc = (item.count / maxCount) * 100;
              return (
                <div key={index} className={styles.chartRow}>
                  <div className={styles.chartLabelRow}>
                    <span className={styles.chartLabel}>{item.level}</span>
                    <span className={styles.chartValue}>{item.count}</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div 
                      className={styles.barFill} 
                      style={{ 
                        width: `${widthPerc}%`, 
                        background: `linear-gradient(90deg, ${item.color}88, ${item.color})` 
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* By Category */}
        <div className={`${styles.card} ${styles.summaryCard}`}>
          <h3 className={styles.summaryTitle}>Unresolved by Category</h3>
          <div className={styles.chartContainer}>
            {unresolvedByCategory.map((item, index) => {
              const maxCount = Math.max(...unresolvedByCategory.map(i => i.count));
              const widthPerc = (item.count / maxCount) * 100;
              const barColor = "#8b5cf6"; // Purple theme for category
              return (
                <div key={index} className={styles.chartRow}>
                  <div className={styles.chartLabelRow}>
                    <span className={styles.chartLabel}>{item.name}</span>
                    <span className={styles.chartValue}>{item.count}</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div 
                      className={styles.barFill} 
                      style={{ 
                        width: `${widthPerc}%`, 
                        background: `linear-gradient(90deg, ${barColor}88, ${barColor})` 
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}