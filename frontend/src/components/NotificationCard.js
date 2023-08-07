import React from "react"
import styles from "./notificationCard.scss"

const NotificationCard = ({ message }) => {
  return <div className={styles.notificationCard}>{message}</div>
}

export default NotificationCard
