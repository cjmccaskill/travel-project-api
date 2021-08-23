const { Schema, model } = require("../db/connection");

const AgentSchema = new Schema({
  img: String,
  name: { type: String, required: true },
  bio: { type: String, required: true },
  packages: [],
  contactInfo: [
    {
      email: String,
      github: String,
      website: String,
    },
  ],
});

const Agent = model("Agent", AgentSchema);

module.exports = Agent;
