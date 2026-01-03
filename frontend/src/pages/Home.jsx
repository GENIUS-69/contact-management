import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Contact Management App
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        A simple MERN stack application to store and manage contacts
        with real-time updates.
      </p>

      <div className="flex gap-4">
        <Link
          to="/add-contact"
          className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
        >
          Store Contact
        </Link>
        <Link
          to="/contacts"
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
        >
          View Contacts
        </Link>
      </div>
    </div>
  );
};

export default Home;
