import styles from "./style.module.css";

export function Modal({ open, children }) {
  return (
    <>
      {open && (
        <div className={style.backgroundModal}>
          <div className={style.modal}>{children}</div>
        </div>
      )}
    </>
  );
}
