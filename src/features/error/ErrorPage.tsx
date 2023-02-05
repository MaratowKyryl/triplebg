import styles from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.status}>500</h1>
      <h3 className={styles.message}>Something went wrong...</h3>
    </div>
  )
}