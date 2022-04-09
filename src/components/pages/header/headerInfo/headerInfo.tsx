import {AccessTime, AddLocation, Telegram} from '@mui/icons-material';
import React, {useState} from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import Fade from "@mui/material/Fade";
import Modal from '../../../UI/modal/modal';
// @ts-ignore
import styles from './headerInfo.module.scss';

const HeaderInfo = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalActive, setModalActive] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.headerInfo}>
      <div className={styles.inner}>
        <button className={styles.location} onClick={() => setModalActive(true)}>
          <AddLocation />
          <span>г. Минск</span>
        </button>

        <Modal active={modalActive} setActive={setModalActive}>
          <div className={styles.img}></div>
          <div className={styles.modalContent}>
            <h2>Населенный пункт</h2>
            <p>Вам будут показаны товары, а также условия доставки для выбранного населенного пункта. Если пункт не найден, уточните запрос введя район или сельсовет.</p>
          </div>
          <div className={styles.modalInput}>
            <p>Населенный пункт</p>
            <div>
              <input type="text"/>
              <button>Сохранить</button>
            </div>
          </div>
        </Modal>

        <ul className={styles.contactsList}>
          <li><Telegram />
            <span>telegram</span></li>
          <li>+375 29 302 10 21</li>
          <li>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className={styles.contacts}
            >
              Ещё
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem>+375 29 302 10 21</MenuItem>
              <MenuItem>+375 25 502 10 21</MenuItem>
              <MenuItem>+375 17 302 10 21</MenuItem>
              <MenuItem onClick={handleClose}>Телеграм</MenuItem>
              <MenuItem onClick={handleClose}>Почта</MenuItem>
              <MenuItem onClick={handleClose}>Заказать звонок</MenuItem>
              <MenuItem onClick={handleClose}>Написать нам</MenuItem>
              <MenuItem onClick={handleClose}>Контакты</MenuItem>
            </Menu>
          </li>
          <div className={styles.workTime}>
            <AccessTime />
            <span>контакт центр<br/> с 8:00 до 22:00</span>
          </div>
        </ul>


      </div>
    </div>
  );
};

export default HeaderInfo;