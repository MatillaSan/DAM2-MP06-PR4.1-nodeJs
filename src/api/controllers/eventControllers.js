const Event = require('../models/event');

// Funció per obtenir tots els usuaris
exports.addEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send("L'esdeveniment no s'ha trobat.");
        }
        res.send(event);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
