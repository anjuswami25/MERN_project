const express = require("express");
const user = require('../models/userModel');
const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        // **Check if email already exists in the database**
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // **If email is unique, create a new user**
        const userAdded = await user.create({
            name: name,
            email: email,
            age: age,
        });

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});
// Get all users
router.get("/", async (req, res) => {
    try {
        const showAll = await user.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await user.findById({ _id: id });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
