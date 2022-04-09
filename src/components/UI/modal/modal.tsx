import React, { FC } from "react";
import "./modal.css";
import { Close } from "@mui/icons-material";

interface IModal {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const ModalComponent: FC<IModal> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="headerModal">
          <div
            className="headerModalContainer"
            aria-label="Закрыть"
            onClick={() => setActive(false)}
          >
            <div className="closePopupIcon closeModalIcon"></div>
            <Close />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
