import ContactList from "../components/ContactList";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className="py-10">
      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
};

export default Contacts;
