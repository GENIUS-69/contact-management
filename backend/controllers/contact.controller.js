import Contact from "../models/contact.model.js";

/**
 * @desc    Create a new contact
 * @route   POST /api/contacts
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Phone are required",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating contact",
      error: error.message,
    });
  }
};

/**
 * @desc    Get all contacts
 * @route   GET /api/contacts
 * @access  Public
 */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      error: error.message,
    });
  }
};
