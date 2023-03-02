import React from 'react';
import './Modal.scss'
interface ModalProps {
  closeModal: () =>  void
}

class Modal extends React.Component<ModalProps> {

 constructor(props:any) {
    super(props);
  }
  handleCloseModal = () => {
    this.props.closeModal();
  };
  modal = {
    type: "caution",
    header: "METAMASK EXTENSION",
    text: "To work with our application, you have to install the",
    link: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    linkText: "Metamask browser extension",
    textButton: "SKIP THIS STEP"
  };
  render() {
    return (
      <div className="modal">
      <section>
        {this.modal.type === 'error' && <h2 style={{ color: 'brown' }}>{this.modal.header}</h2>}
        {this.modal.type === 'success' && <h2 style={{ color: 'greenyellow' }}>{this.modal.header}</h2>}
        {this.modal.type === 'caution' && <h2>{this.modal.header}</h2>}
        <p>
          {this.modal.text}
          {this.modal.link && <a href={this.modal.link} target="_blank"> {this.modal.linkText}</a>}
        </p>
        <button className="btn-primary" onClick={this.handleCloseModal}>{this.modal.textButton}</button>
      </section>
    </div>
    );
  }
}

export default Modal;