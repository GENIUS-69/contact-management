const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center mt-6">
        No contacts submitted yet.
      </p>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-primary mb-4">
        Submitted Contacts
      </h3>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="border rounded-lg p-4"
          >
            <p className="font-semibold text-primary">
              {contact.name}
            </p>
            <p className="text-sm text-gray-600">
              {contact.email}
            </p>
            <p className="text-sm text-gray-600">
              {contact.phone}
            </p>
            {contact.message && (
              <p className="text-sm mt-2 text-gray-700">
                {contact.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
