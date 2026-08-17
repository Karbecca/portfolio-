import { useMemo, useRef, useContext } from "react";
import PopupContext from "../../contexts/popupContext";
import check from "/icons/check_icon.png";
import fail from "/icons/fail_icon.png";
import "../../styles/css/message.css";

const PopUpMessage = () => {
  const popUp = useRef(null);
  const { popupShow } = useContext(PopupContext);

  const cleanMessage = useMemo(() => {
    if (popupShow.message !== null && popupShow.message.length > 10) {
      const message = popupShow.message;
      return message.slice(0, message.indexOf(".")) + ".";
    }
    return 'Connection To Service Error.';
  }, [popupShow]);

  const messageClasses = `messageHolder ${popupShow.status ? 'display' : 'dissapear'}`;

  return (
    <div ref={popUp} className={messageClasses}>
      <img src={popupShow.pass ? check : fail} alt={popupShow.pass ? "success" : "error"} className="messageIcon" />
      <h1 className="message">
        {cleanMessage}
      </h1>
    </div>
  );
};


export default PopUpMessage;