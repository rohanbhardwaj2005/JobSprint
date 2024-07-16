import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    workModel: {
      type: String,
      enum: ["in-person", "hybrid", "remote"],
      default: "in-person",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Job", JobSchema);
