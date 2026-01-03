import express from "express";
import { createContact, getContacts } from "../controllers/contact.controller.js";

const router = express.Router();

// POST: Create a new contact
router.post("/", createContact);

// GET: Fetch all contacts
router.get("/", getContacts);

export default router;
