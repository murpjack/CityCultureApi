const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const dinerSchema = new Schema(
  {
    _id: String,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    telephone: String,
    theme: Number,
    coords: Array,
    foodMenuUrl: String,
    hasGlutenFreeOptions: Boolean,
    hasVeganOptions: Boolean,
    hasWheelchairAccess: Boolean,
    hasBabyChangingFacilities: Boolean,
  },
  {
    timestamps: true,
  }
);

const dinerModel = mongoose.model("Diner", dinerSchema);
export default dinerModel;
