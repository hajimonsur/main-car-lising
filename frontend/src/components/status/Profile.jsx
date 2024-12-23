import React from 'react';

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>No user data found. Please log in.</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to {user.name || "User"}'s Profile</h1>

      <div style={styles.profileCard}>
        <div style={styles.profileImageWrapper}>
          <img
            src={user.avatar || "/avatar.png"} // Fallback for avatar
            alt={`${user.name}'s avatar`}
            style={styles.profileImage}
          />
        </div>
        <div style={styles.profileDetails}>
          <p style={styles.detailItem}><strong>Email:</strong> {user.email}</p>
          <p style={styles.detailItem}><strong>Username:</strong> {user.username}</p>
          <p style={styles.detailItem}><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>About</h2>
        <p style={styles.aboutText}>{user.about || "This user hasn't added an about section yet."}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Recent Activity</h2>
        <ul style={styles.activityList}>
          {user.recentActivity?.length > 0 ? (
            user.recentActivity.map((activity, index) => (
              <li key={index} style={styles.activityItem}>{activity}</li>
            ))
          ) : (
            <p style={styles.noActivity}>No recent activity available.</p>
          )}
        </ul>
      </div>

      {/* Favorite Cars Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Favorite Cars</h2>
        {user.favCar?.length > 0 ? (
          <ul style={styles.favoriteCarsList}>
            {user.favCar.map((car, index) => (
              <li key={index} style={styles.favoriteCarItem}>
                <img src={car.image || "/default-car.jpg"} alt={car.name} style={styles.favoriteCarImage} />
                <span style={styles.favoriteCarName}>{car.name || "Unnamed Car"}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noActivity}>No favorite cars added.</p>
        )}
      </div>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  profileImageWrapper: {
    width: "150px",
    height: "150px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "5px solid #3498db",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  profileDetails: {
    flex: 1,
    marginLeft: "20px",
  },
  detailItem: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#555",
  },
  section: {
    marginBottom: "40px",
  },
  sectionHeading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#34495e",
    marginBottom: "10px",
  },
  aboutText: {
    fontSize: "1rem",
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
  activityList: {
    listStyleType: "none",
    padding: "0",
  },
  activityItem: {
    backgroundColor: "#ecf0f1",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "8px",
    fontSize: "1rem",
    color: "#34495e",
  },
  favoriteCarsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    listStyleType: "none",
    padding: "0",
  },
  favoriteCarItem: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "200px",
    textAlign: "center",
    padding: "10px",
  },
  favoriteCarImage: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  favoriteCarName: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "#34495e",
  },
  noActivity: {
    color: "#e74c3c",
    fontSize: "1rem",
  },
};

export default Profile;
