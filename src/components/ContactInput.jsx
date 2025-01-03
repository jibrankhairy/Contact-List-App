import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
      image: null, // Tambahkan state untuk menyimpan file gambar
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onImageChangeEventHandler = this.onImageChangeEventHandler.bind(this); // Handle perubahan gambar
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState({ name: event.target.value });
  }

  onTagChangeEventHandler(event) {
    this.setState({ tag: event.target.value });
  }

  onImageChangeEventHandler(event) {
    const file = event.target.files[0];
    if (file) {
      this.setState({ image: file });
    }
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { name, tag, image } = this.state;

    // Buat URL sementara untuk gambar yang diupload
    const imageUrl = image ? URL.createObjectURL(image) : "/images/default.jpg";

    // Kirim data ke parent component
    this.props.addContact({ name, tag, imageUrl });

    // Reset form setelah submit
    this.setState({ name: "", tag: "", image: null });
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
          required
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeEventHandler}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={this.onImageChangeEventHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactInput;
