import styles from "./style.module.css";

export function Tutorial() {
  return (
    <>
      <div className={styles.outsideContainer}>
        <div className={styles.step1}>
          <h2 className={styles.imgTitle}>PASO 1</h2>
        </div>
        <div className={styles.step2}>
          <h2 className={styles.imgTitle}>PASO 2</h2>
        </div>
        <div className={styles.step3}>
          <h2 className={styles.imgTitle}>PASO 3</h2>
        </div>
      </div>
    </>
  );
}
