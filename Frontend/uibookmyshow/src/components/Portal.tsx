import Button from "./Button";
import ReactDom from "react-dom";
const Portal = ({ open, onClose, children }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="z-20 top-0 bottom-0 left-0 right-0 fixed bg-[rgba(0,0,0,0.7)]">
      <div className="z-200 fixed transform translate-x-1/2 translate-y-1/2 bg-white shadow-2xl rounded-xl ">
        <Button clickHandler={onClose} bg={"black"} buttonName="close" />
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
