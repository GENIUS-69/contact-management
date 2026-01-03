const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createContact = async (contactData) => {
  const response = await fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact");
  }

  return response.json();
};

export const getContacts = async () => {
  const response = await fetch(`${API_BASE_URL}/contacts`);

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return response.json();
};
