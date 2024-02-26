const { Schema, models, model, default: mongoose } = require('mongoose');

const JobApplicationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const JobApplication =
  models.JobApplication || model('JobApplication', JobApplicationSchema);
