import React, { Component } from "react";

// import BookForm from "./forms/BookForm";
import Modal from "react-responsive-modal";

class AddBookModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          {/* You'll need to build a BookForm component before uncommenting the following line */}
          {/* <BookForm authorID={this.props.authorID} /> */}
          <h1>YOU NEED TO ACTUALLY MAKE A BOOK FORM!!!!!!</h1>
        </Modal>
        <input type="button" onClick={this.onOpenModal} value="Add New Book!" />
      </div>
    );
  }
}
export default AddBookModal;
