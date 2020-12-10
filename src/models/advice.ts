const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const adviceSchema = new Schema(
  {
    _id: String,
    approvalStatus: String,
    description: String,
  },
  { timestamps: true }
);

const adviceModel = mongoose.model("advice", adviceSchema);
export default adviceModel;
