const { Schema, model } = require("../db/connection");

const TripDetailsSchema = new Schema({
  img: String,
  packageName: { type: String, required: true },
  description: { type: String, required: true },
  vehicle: String,
  hotel: String,
  location: [{ type: String }],
  agentInfo: { ref: "Agent", type: Schema.Types.ObjectId },
  // agentInfo contains the info from the agent schema
  photos: [{ type: String }],
  payment: String,
});

const TripDetails = model("TripDetails", TripDetailsSchema);

module.exports = TripDetails;
