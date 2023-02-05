import styles from './AppLoading.module.css'

export default function AppLoading() {
  return (
    <div className={styles.indicatorContainer}>
      <div className={styles.loadingIndicator}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}