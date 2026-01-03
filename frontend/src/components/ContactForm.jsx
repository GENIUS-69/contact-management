import { useState } from "react";
import { createContact } from "../services/api";

const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation logic
  const validate = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return !/^\S+@\S+\.\S+$/.test(value)
          ? "Enter a valid email"
          : "";
      case "phone":
        return value.trim() === "" ? "Phone is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    Object.values(errors).every((err) => err === "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setLoading(true);
      await createContact(formData);

      setSuccess("Contact submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      onSuccess(); // refresh contact list
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Contact Us
      </h2>

      {success && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Phone *
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full py-2 rounded-lg font-semibold transition
            ${
              isFormValid && !loading
                ? "bg-accent text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
