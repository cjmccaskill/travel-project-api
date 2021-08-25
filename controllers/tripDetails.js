require("dotenv").config();
const { Router } = require("express");
const TripDetails = require("../models/tripDetails");
const Agent = require("../models/agent");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(
    await TripDetails.find({})
      .populate("agentInfo")
      .catch((err) => res.status(400).json(err))
  );
});

// Find by id route
router.get("/:id", async (req, res) => {
  res.json(
    await TripDetails.findById(req.params.id).populate("agentInfo").catch((err) =>
      res.status(400).json(err)
    )
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

// linking agents to packages
// router.get("/relate/:agentId/:tripId", async (req, res) => {
//   const { agentId, tripId } = req.params;
//   // const agent = await Agent.findById(agentId);
//   const trip = await TripDetails.findById(tripId).populate("agentInfo");
//   // agent.packages.push(trip);
//   // trip.agentInfo = agent;
//   // agent.save();
//   // trip.save();
//   // res.json({
//   //   agent: agent.populate("packages"),
//   //   trip: trip.populate("agentInfo"),
//   // });
//   res.json({
//     trip,
//   });
// });

// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await TripDetails.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
