/*
 * Modal fetched from https://www.npmjs.com/package/react-responsive-modal
 */
import React from 'react';
import Modale from './npm_pack/index.es';
import style from '../styles/app.scss';
import Login from './Login';

const btnClasses = `${style.cBtn} ${style.cBtn__primary} ${style.cBtn__large}`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className={btnClasses} type="button" onClick={this.onOpenModal}>
          Enter the gates
        </button>
        <Modale
          open={open}
          onClose={this.onCloseModal}
          center
          showCloseIcon={false}
        >
          <h2 className={style.cModal__title}>Are you a Mountain Knight?</h2>
          <Login />
        </Modale>
      </div>
    );
  }
}

export default Modal;
