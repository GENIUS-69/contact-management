import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";

import { getContacts } from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const loadContacts = async () => {
      try {
        const response = await getContacts();
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadContacts();
  }, []);

  return (
    <Router>
      <Header />

      <main className="min-h-screen bg-background px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-contact"
            element={<AddContact onSuccess={fetchContacts} />}
          />
          <Route
            path="/contacts"
            element={
              <Contacts
                contacts={contacts}
                onDelete={fetchContacts}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
