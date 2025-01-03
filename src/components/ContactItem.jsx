import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

const ContactItem = ({ imageUrl, name, tag, id, onDelete }) => {
  return (
    <div className="contact-item">
      <div className="contact-item__left">
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={name} tag={tag} />
      </div>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default ContactItem;
