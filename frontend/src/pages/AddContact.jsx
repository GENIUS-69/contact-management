import ContactForm from "../components/ContactForm";

const AddContact = ({ onSuccess }) => {
  return (
    <div className="flex justify-center py-10">
      <ContactForm onSuccess={onSuccess} />
    </div>
  );
};

export default AddContact;
