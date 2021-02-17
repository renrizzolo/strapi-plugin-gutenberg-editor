import ReactDOM from "react-dom";

const Portal = ({ children, el }) =>
  typeof document !== "undefined"
    ? ReactDOM.createPortal(
        children,
        el ? document.getElementById(el) : document.body
      )
    : null;
export default Portal;
