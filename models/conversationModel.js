import mongoose from "mongoose";

const converstionScehema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },

  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", converstionScehema);

export default Conversation;
