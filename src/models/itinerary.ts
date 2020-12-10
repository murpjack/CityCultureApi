const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 diner: {
   type: Schema.Types.ObjectId,
   ref: "diners",
  },
  activity: {
   type: Schema.Types.ObjectId,
   ref: "activities",
  },
  advice: {
    type: Schema.Types.ObjectId,
    ref: "advice",
  },
  */ 
export const itinerarySchema = new Schema(
  {
    _id: String,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    dinerId: String,
    activityId: String,
    adviceId: String,
    slug: String,
    createdBy: String
  },
  {
    timestamps: true,
  }
);

const itineraryModel = mongoose.model("Itinerary", itinerarySchema);
export default itineraryModel;