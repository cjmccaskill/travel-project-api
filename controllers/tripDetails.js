const { Router } = require("express");
const TripDetails = require("../models/tripDetails");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(
    await TripDetails.find({}).catch((err) => res.status(400).json(err))
  );
});

// Create route
router.post("/", async (req, res) => {
  res.json(
    await TripDetails.create(req.body).catch((err) => res.status(400).json(err))
  );
});
// Update route
router.put("/:id", async (req, res) => {
  res.json(
    await TripDetails.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).catch((err) => res.status(400).json(err))
  );
});
// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await TripDetails.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
