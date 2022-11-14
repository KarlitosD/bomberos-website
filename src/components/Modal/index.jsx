import styles from "./style.module.css";

export function Modal({ open, children }) {
  return (
    <>
      {open && (
        <div className={styles.backgroundModal}>
          <div className={styles.modal}>{children}</div>
        </div>
      )}
    </>
  );
}
