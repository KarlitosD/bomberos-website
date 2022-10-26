import "./style.css";

export function Modal({ open, children }) {
  return (
    <>
      {open && (
        <div className="background-modal">
          <div className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
